# @typescript-runtime-schema/expect-transformer-to-transform-source-code ![version](https://badgen.net/badge/version/1.0.6/blue)
Expect a transformer to produce certain transpiled code given some source code

## Installation
Using npm:
```
npm install @typescript-runtime-schema/expect-transformer-to-transform-source-code
```
Using yarn:
```
yarn add @typescript-runtime-schema/expect-transformer-to-transform-source-code
```
## Setup

Import `@typescript-runtime-schema/expect-transformer-to-transform-source-code` at the top of your test file:

```js
import '@typescript-runtime-schema/expect-transformer-to-transform-source-code'
```
## Usage
### .toTransformSourceCode
`expect(transformer).toTransformSourceCode(sourceCode, expectedCodeOutput)`

Use `.toTransformSourceCode` when checking if your typescript transformer can transform the given source code to expected code output
```ts
import '@typescript-runtime-schema/expect-transformer-to-transform-source-code'

const sourceCode = `
export const bar = "foo"
`
const expectedCode = `
exports.__esModule = true;
exports.bar = void 0;
exports.bar = "bar";
`

// Reader exercise: Transformer implementation
expect(transformer).toTransformSourceCode(sourceCode, expectedCode)
```

### compilerOptions
`expect-transformer-to-transform-source-code` uses the following compilerOptions:
```json
{
  "moduleResolution": "node",
  "module": "commonjs",
  "target": "es2020",
}
```
## API
### .toTransformSourceCode
`expect(transformer).toTransformSourceCode(sourceCode, expectedCodeOutput)`

### Parameters
Name | Type | Description
------ | ------ | ------ |
`expect` | `(ts.Program) => (ts.TransformationContext) => (ts.SourceFile) => ts.SourceFile` | The typescript compiler transformation function. 
`sourceCode` | `string` | The source code we're passing through the transformer
`expectedCodeOutput` | `string` | Our expected output of the transformer
## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.