---
title: Rome Tools
---

Rome は、JavaScript と TypeScript のパースに様々な技術を使用しています。この
チュートリアルでは、それらを理解しやすい順序で要約しています。

<!--truncate-->

## 歴史

-   Rome のコードベースは TypeScript から Rust に書き直されました。詳細は
    [`Rome will be rewritten in Rust`](HTTPS://web.archive.org/web/20230401084626/HTTPS://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust/)
    をご覧ください。
-   この決定は、[`rslint`](HTTPS://github.com/rslint/rslint) と
    [`rust-analyzer`](HTTPS://github.com/rust-lang/rust-analyzer) の作者との話し合
    いの結果行われました。
-   rust-analyzer は、IDE のようなツールを具象構文木をベースに構築できることを証
    明しました。
-   rslint は、rust-analyzer で使用されているライブラリを用いて、 Rust で
    JavaScript のパーサーを実装できることを証明しました。
-   Rome は、作者の許可を得て rslint のコードベースを自分たちのリポジトリに移植
    しました。

## 具象構文木 (CST)

-   ベースライブラリは [`rowan`](HTTPS://github.com/rust-analyzer/rowan) と呼ばれ
    ており、詳細は
    [`overview of rowan`](HTTPS://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md)
    をご覧ください。
-   Rowan (red-green trees としても知られている) は、赤いベリーを実らせる
    [`Rowan`](HTTPS://en.wikipedia.org/wiki/Rowan) という木にちなんで名付けられま
    した。
-   red-green trees の由来は、C# の作者によ
    る[`ブログ記事`](HTTPS://ericlippert.com/2012/06/08/red-green-trees/)で説明さ
    れています。
-   Rowan は、ソースコードのすべてを記述する損失のない CST を定義し、構文木の
    親、子、兄弟ノードなどを走査する一連の API を提供します。
-   AST よりも CST を利用する利点について
    は、[`Pure AST based linting sucks`](HTTPS://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html)
    をご覧ください。
-   CST は完全に回復可能なパーサーを構築する手段を提供します。

## 文法

-   AST と同様に文法を定義する必要があります。文法
    は、[`xtask/codegen`](HTTPS://github.com/rome/tools/tree/main/xtask/codegen)
    を使用して自動生成されます。
-   文法は [`ungrammar`](HTTPS://github.com/rust-analyzer/ungrammar) という DSL か
    ら生成されます。
-   入力の `ungrammar` の ソースファイル
    は、[`xtask/codegen/js.ungram`](HTTPS://github.com/rome/tools/blob/main/xtask/codegen/js.ungram)
    にあります。
-   生成されるコードは、
    [`rome_js_syntax/src/generated`](HTTPS://github.com/rome/tools/tree/main/crates/rome_js_syntax/src/generated)
    にあります。

## エントリーポイント

Rome のコードベースは大きくなり、パーサーのエントリーポイントを見つけるのが少し
難しくなっています。

初めての方のために、コードを実行するためのバイナリのエントリーポイントである
`rome_cli` クレートを見てみましょう。

```bash
cargo run -p rome_cli

touch test.js
cargo run -p rome_cli -- check ./test.js
```

`rome_cli` は最終的に `rome_js_parser::parse` を呼び出します。

```rust reference
HTTPS://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/parse.rs#L178-L187
```

実際のパーサーのコードはこちらのように始まります。

```rust reference
HTTPS://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/syntax/program.rs#L14-L17
```

## コントリビューション

-   [`CONTRIBUTING.md`](HTTPS://github.com/rome/tools/blob/main/CONTRIBUTING.md)
    には、コントリビューションの方法の説明があります。
-   パーサーのテストについて
    は、[`cargo codegen test`](HTTPS://github.com/rome/tools/tree/main/xtask/codegen#cargo-codegen-test)
    をご確認ください。
-   適合テストについては、
    [`cargo coverage`](HTTPS://github.com/rome/tools/tree/main/xtask/coverage)
    をご覧ください。
-   分からないことがあれば、[`Discord サーバー`](HTTPS://discord.com/invite/rome)
    で自由に質問できます。

:::info JavaScript / TypeScript パーサーは 99% 完成しています。コントリビュー
ションの最善の方法は、独自のコードベースで Rome をテストするか、Github の問題を
確認することです。:::
