---
title: パーサーの適合試験
---

この記事では、JavaScript および TypeScript の文法に対するパーサーのテストを行う
ための 3 つの GitHub リポジトリについて詳しく説明します。

<!--truncate-->

## Test262

JavaScript には、Test262 と呼ばれる
[ECMAScript のテストスイート](https://github.com/tc39/test262)があります。
Test262 の目標は、仕様で指定されたすべての観測可能な動作をカバーするテストスイー
トを提供することです。

実際に適合性のテストを実施するにあたっては、こちら
の[パースフェーズのテスト](https://github.com/tc39/test262/blob/main/INTERPRETING.md#negative)を
確認するのが良いでしょう。

## Babel

JavaScript に新しい言語機能が追加されると、Babel でもそれらを解析する必要があり
ます。したがって、Babel には独自
の[パーサーテスト](https://github.com/babel/babel/tree/main/packages/babel-parser/test)が
あります。

## TypeScript

TypeScript における適合性テスト
は[こちら](https://github.com/microsoft/TypeScript/tree/main/tests/cases/conformance)で
見つけることができます。

## Test Runner

Rome は上記のテストスイート用にテストランナーを実装してお
り、[こちら](https://github.com/rome/tools/tree/main/xtask/coverage)から確認する
ことができます。
