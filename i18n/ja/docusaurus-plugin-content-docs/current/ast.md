---
id: ast
title: 抽象構文木 (AST)
---

次の章のパーサーは、トークンを抽象構文木（AST）に変換する責任を持っています。
ソーステキストと比較して、AST で作業する方がはるかに使いやすいです。

すべての JavaScript ツールはASTレベルで動作します。例えば：

-   リンター（例：eslint）は、ASTをエラーのためにチェックします。
-   フォーマッター（例：prettier）は、AST を JavaScript テキストに戻して表示しま
    す。
-   ミニファイア（例：terser）は、AST を変換します。
-   バンドラーは、異なるファイルの AST 間のすべてのインポートとエクスポートス
    テートメントを接続します。

この章では、Rust の構造体と列挙型を使用して JavaScript の AST を構築しましょう。

## ASTに慣れる

AST に慣れるために、[ASTExplorer](https://astexplorer.net/) を訪れてどのようなも
のか見てみましょう。上部パネルで JavaScript を選択し、次に `acorn` を入力して、
ツリービューと JSON ビューが表示されます。

```json
{
	"type": "Program",
	"start": 0,
	"end": 5,
	"body": [
		{
			"type": "VariableDeclaration",
			"start": 0,
			"end": 5,
			"declarations": [
				{
					"type": "VariableDeclarator",
					"start": 4,
					"end": 5,
					"id": {
						"type": "Identifier",
						"start": 4,
						"end": 5,
						"name": "a"
					},
					"init": null
				}
			],
			"kind": "var"
		}
	],
	"sourceType": "script"
}
```

これはツリーなので、すべてのオブジェクトはタイプ名
（例：`Program`、`VariableDeclaration`、`VariableDeclarator`、`Identifier`）を
持っています。 `start` と `end` はソースからのオフセットです。

## estree

[estree](https://github.com/estree/estree) は、JavaScript のためのコミュニティ標
準の文法仕様です。これにより、さまざまなツールが互換性を持つことができるよう
に、[すべてのASTノード](https://github.com/estree/estree/blob/master/es5.md) が
定義されています。

任意のASTノードの基本的な構築要素は、`Node` 型です。

```rust
#[derive(Debug, Default, Clone, Copy, Serialize, PartialEq, Eq)]
pub struct Node {
    /// ソース内の開始オフセット
    pub start: usize,

    /// ソース内の終了オフセット
    pub end: usize,
}

impl Node {
    pub fn new(start: usize, end: usize) -> Self {
        Self { start, end }
    }
}
```

`var a` のASTは次のように定義されています。

```rust
pub struct Program {
    pub node: Node,
    pub body: Vec<Statement>,
}

pub enum Statement {
    VariableDeclarationStatement(VariableDeclaration),
}

pub struct VariableDeclaration {
    pub node: Node,
    pub declarations: Vec<VariableDeclarator>,
}

pub struct VariableDeclarator {
    pub node: Node,
    pub id: BindingIdentifier,
    pub init: Option<Expression>,
}

pub struct BindingIdentifier {
    pub node: Node,
    pub name: String,
}

pub enum Expression {
}
```

Rustには継承がないため、各構造体に `Node` が追加されています（これは「継承に代わ
るコンポジション」と呼ばれます）。

`Statement` と `Expression` は列挙型です。なぜなら、他の多くのノードタイプと拡張
されるからです。例えば：

```rust
pub enum Expression {
    AwaitExpression(AwaitExpression),
    YieldExpression(YieldExpression),
}

pub struct AwaitExpression {
    pub node: Node,
    pub expression: Box<Expression>,
}

pub struct YieldExpression {
    pub node: Node,
    pub expression: Box<Expression>,
}
```

`Box` が必要なのは、Rustでは自己参照する構造体は許可されていないためです。

:::info JavaScriptの文法には多くの面倒な点があります。興味深いの
で、[文法チュートリアル](/blog/grammar) を読んでみてください。:::

## Rustの最適化

### メモリ割り当て

[概要](./overview.md) の章で、ヒープに割り当てられた `Vec` や `Box` などの構造体
に注意が必要であることを簡単に述べました。なぜなら、ヒープの割り当ては安価ではな
いからです。

[swc](https://github.com/swc-project/swc/blob/main/crates/swc_ecma_ast/src/expr.rs)
の実装を見てみると、ASTには多くの `Box` や `Vec` が含まれていることがわかりま
す。また、`Statement` と `Expression` の列挙型には多数の列挙子が含まれていること
にも注意してください。

### 列挙型のサイズ

最初の最適化は、列挙型のサイズを減らすことです。

Rustの列挙型のバイトサイズは、すべての列挙子の合計です。例えば、以下の列挙型は56
バイト（タグに1バイト、ペイロードに48バイト、アライメントに8バイト）を使用しま
す。

```rust
enum Name {
    Anonymous, // 0バイトのペイロード
    Nickname(String), // 24バイトのペイロード
    FullName{ first: String, last: String }, // 48バイトのペイロード
}
```

:::noteこの例は、[このブログ記事](https://adeschamps.github.io/enum-size) から取
られています。:::

`Expression` と `Statement` の列挙型は、現在の設定では200バイト以上を占めること
があります。

これらの200バイトは、`matches!(expr, Expression::AwaitExpression(_))` のチェック
を行うたびに渡されるか、アクセスされる必要がありますが、パフォーマンスの観点から
はキャッシュに優しくありません。

より良いアプローチは、列挙型の列挙子をボックス化し、16バイトだけを持ち運ぶことで
す。

```rust
pub enum Expression {
    AwaitExpression(Box<AwaitExpression>),
    YieldExpression(Box<YieldExpression>),
}

pub struct AwaitExpression {
    pub node: Node,
    pub expression: Expression,
}

pub struct YieldExpression {
    pub node: Node,
    pub expression: Expression,
}
```

64 ビットシステムでは、列挙型が実際に16バイトであることを確認するため
に、`std::mem::size_of` を使用することができます。

```rust
#[test]
fn no_bloat_enum_sizes() {
    use std::mem::size_of;
    assert_eq!(size_of::<Statement>(), 16);
    assert_eq!(size_of::<Expression>(), 16);
}
```

「no bloat enum sizes」というテストケースは、小さな列挙型サイズを確保するために
Rustコンパイラのソースコードでよく見られます。

```rust reference
https://github.com/rust-lang/rust/blob/9c20b2a8cc7588decb6de25ac6a7912dcef24d65/compiler/rustc_ast/src/ast.rs#L3033-L3042
```

他の大きな型を見つけるためには、次のコマンドを実行します。

```bash
RUSTFLAGS=-Zprint-type-sizes cargo +nightly build -p name_of_the_crate --release
```

そして、次のように表示されます。

```markup
print-type-size type: `ast::js::Statement`: 16 bytes, alignment: 8 bytes
print-type-size     discriminant: 8 bytes
print-type-size     variant `BlockStatement`: 8 bytes
print-type-size         field `.0`: 8 bytes
print-type-size     variant `BreakStatement`: 8 bytes
print-type-size         field `.0`: 8 bytes
print-type-size     variant `ContinueStatement`: 8 bytes
print-type-size         field `.0`: 8 bytes
print-type-size     variant `DebuggerStatement`: 8 bytes
print-type-size         field `.0`: 8 bytes
```

#### メモリアリーナ

ASTに対してグローバルメモリアロケータを使用するのは実際には非効率です。すべての
`Box` と `Vec` は要求に応じて個別に割り当てられ、個別に解放されます。私たちがし
たいことは、メモリを事前に割り当てて一括で解放することです。

:::info
[このブログ記事](https://manishearth.github.io/blog/2021/03/15/arenas-in-rust/)で
は、メモリアリーナについて詳しく説明しています。:::

[`bumpalo`](https://docs.rs/bumpalo/latest/bumpalo/) は、私たちのユースケースに
非常に適しているとされています。ドキュメントによれば：

> バンプアロケーションは、高速ですが制限されたアロケーション手法です。メモリの
> チャンクを持ち、そのメモリ内のポインタを維持します。オブジェクトを割り当てるた
> びに、チャンクに十分な容量が残っているかを素早くチェックし、オブジェクトのサイ
> ズによってポインタを更新します。それだけです！
>
> バンプアロケーションの欠点は、個々のオブジェクトを解放したり、使用されなくなっ
> たオブジェクトのメモリ領域を回収したりする一般的な方法がないことです。
>
> これらのトレードオフにより、バンプアロケーションはフェーズ指向のアロケーション
> に適しています。つまり、同じプログラムフェーズ中にすべてのオブジェクトが割り当
> てられ、使用され、グループとして一括で解放できるオブジェクトのグループです。

`bumpalo::collections::Vec` と `bumpalo::boxed::Box` を使用することで、ASTに寿命
が追加されます。

```rust
use bumpalo::collections::Vec;
use bumpalo::boxed::Box;

pub enum Expression<'a> {
    AwaitExpression(Box<'a, AwaitExpression>),
    YieldExpression(Box<'a, YieldExpression>),
}

pub struct AwaitExpression<'a> {
    pub node: Node,
    pub expression: Expression<'a>,
}

pub struct YieldExpression<'a> {
    pub node: Node,
    pub expression: Expression<'a>,
}
```

:::cautionこの段階では寿命を扱うことに慣れていない場合は注意してください。メモリ
アリーナを使用しなくてもプログラムは正常に動作します。

次の章のコードは、シンプルさのためにメモリアリーナの使用を示していません。:::

## JSONシリアライゼーション

[serde](https://serde.rs/) を使用してASTをJSONにシリアライズすることができま
す。`estree` と互換性を持たせるためにはいくつかのテクニックが必要です。以下にい
くつかの例を示します。

```rust
use serde::Serialize;

#[derive(Debug, Clone, Serialize, PartialEq)]
#[serde(tag = "type")]
#[cfg_attr(feature = "estree", serde(rename = "Identifier"))]
pub struct IdentifierReference {
    #[serde(flatten)]
    pub node: Node,
    pub name: Atom,
}

#[derive(Debug, Clone, Serialize, PartialEq, Hash)]
#[serde(tag = "type")]
#[cfg_attr(feature = "estree", serde(rename = "Identifier"))]
pub struct BindingIdentifier {
    #[serde(flatten)]
    pub node: Node,
    pub name: Atom,
}

#[derive(Debug, Serialize, PartialEq)]
#[serde(untagged)]
pub enum Expression<'a> {
    ...
}
```

-   `serde(tag = "type")` は、構造体名を「type」フィールドにするために使用されま
    す。つまり、`{ "type" : "..." }` となります。
-   `cfg_attr` + `serde(rename)` は、`estree` が異なる構造体名を同じ名前にリネー
    ムするために使用されます。なぜなら、`estree` は異なる識別子を区別しないから
    です。
-   列挙型の `serde(untagged)` は、列挙型のために余分な JSON オブジェクトを作成
    しないようにするために使用されます。
