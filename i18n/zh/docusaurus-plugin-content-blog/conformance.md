---
title: 一致性测试
---

这篇文章详细介绍了用于测试 JavaScript 和 TypeScript 语法解析器的三个 GitHub 存储
库。

<!--truncate-->

## Test262

JavaScript 有一个名为 Test262 的
[`ECMAScript 测试套件`](https://github.com/tc39/test262)。Test262 的目标是提供一个
覆盖规范中指定的所有可观察行为的测试套件。

实际进行符合性测试时，最好查看
此[`解析阶段测试`](https://github.com/tc39/test262/blob/main/INTERPRETING.md#negative)。

## Babel

当 JavaScript 添加新的语言功能时，Babel 也需要解析它们。因此，Babel 有自己
的[`解析器测试`](https://github.com/babel/babel/tree/main/packages/babel-parser/test)。

## TypeScript

TypeScript 的符合性测试可以
在[`这里`](https://github.com/microsoft/TypeScript/tree/main/tests/cases/conformance)找
到。

## Test Runner

Rome 为上述测试套件实现了测试运行器，可以
从[`这里`](https://github.com/rome/tools/tree/main/xtask/coverage)查看。
