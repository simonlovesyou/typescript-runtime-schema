# @typescript-runtime-schema/expect-node-to-equal-source-code ![version](https://badgen.net/badge/version/1.0.6/blue)
Expect a node to equal some source code

## Installation
Using npm:
```
npm install @typescript-runtime-schema/expect-node-to-equal-source-code
```
Using yarn:
```
yarn add @typescript-runtime-schema/expect-node-to-equal-source-code
```
## Setup

Import `@typescript-runtime-schema/expect-node-to-equal-source-code` at the top of your test file:

```js
import '@typescript-runtime-schema/expect-node-to-equal-source-code'
```
## Usage

### .toEqualSourceCode

`expect(node).toEqualSourceCode(expectedSourceCode)`

Use `.toEqualSourceCode` when testing whether or not some TypeScript AST node that equivalates to some source code

```ts
import * as ts from "typescript";
import "@typescript-runtime-schema/expect-node-to-equal-source-code";

const generateFizzBuzzArray = (length: number) =>
  Array(length)
    .fill(0)
    .map((index) => index + 1)
    .map(
      (num: string) => (num % 3 ? "" : "fizz") + (num % 5 ? "" : "buzz") || i
    );

const generateFizzBuzzArrayLiteral = (length: number) =>
  ts.factory.createArrayLiteralExpression(
    generateFizzBuzzArray(length).map((arrayItem: string | number) =>
      typeof arrayItem === "number"
        ? ts.factory.createNumericLiteral(arrayItem.toString())
        : ts.factory.createStringLiteral(arrayItem)
    ),
    false
  );

expect(generateFizzBuzzArrayLiteral(8)).toEqualSourceCode(
  `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]`
);
```

### compilerOptions

`expect-node-to-equal-source-code` uses the following compilerOptions:

```json
{
  "moduleResolution": "node",
  "module": "commonjs",
  "target": "es2020"
}
```

## API
### .toEqualSourceCode
`expect(node).toEqualSourceCode(expectedSourceCode)`

### Parameters
Name | Type | Description
------ | ------ | ------ |
`expect` | `ts.Node` | The typescript node.
`expectedSourceCode` | `string` | The expected source code the node represents.
## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.