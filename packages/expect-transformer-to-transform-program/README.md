# @typescript-runtime-schema/expect-transformer-to-transform-program ![version](https://badgen.net/badge/version/1.0.2/blue)
Expect a set of source files to be transformed to using the provided transformer

## Installation
Using npm:
```
npm install @typescript-runtime-schema/expect-transformer-to-transform-program
```
Using yarn:
```
yarn add @typescript-runtime-schema/expect-transformer-to-transform-program
```
## Setup

Import `@typescript-runtime-schema/expect-transformer-to-transform-program` at the top of your test file:

```js
import '@typescript-runtime-schema/expect-transformer-to-transform-program'
```
## Usage
### .toTransformProgram
`expect(transformer).toTransformProgram(inputFiles, outputFiles)`

Use `.toTransformProgram` when checking if your typescript transformer can transform the given source files to expected code output
```ts
import '@typescript-runtime-schema/expect-transformer-to-transform-program'
// Used to ignore the identation of template string
import dedent from 'dedent'

const sourceFiles = {
  "./foo.ts": `import * as bar from './bar`,
  "./bar.ts": `export const bar = "foo"`
}

const expectedOutputFiles = {
  "./foo.js": dedent`
    "use strict";
    exports.__esModule = true;
    var baz = require("bar");
  `,
  "./baz.js": dedent`
    "use strict";
    exports.__esModule = true;
    exports.bar = void 0;
    exports.bar = "bar";
  `
}

// Reader exercise: Transformer implementation
expect(transformer).toTransformProgram(sourceFiles, expectedOutputFiles)
```

### compilerOptions
`expect-transformer-to-transform-program` uses the following compilerOptions:
```json
{
  "moduleResolution": "node",
  "module": "commonjs",
  "target": "es2020",
  "declaration": true
}
```
## API
### .toTransformProgram
`expect(transformer).toTransformProgram(sourceFiles, expectedOutputFiles)`

### Parameters
Name | Type | Description
------ | ------ | ------ |
`expect` | `(ts.Program) => (ts.TransformationContext) => (ts.SourceFile) => ts.SourceFile` | The typescript compiler transformation function.
`sourceFiles` | `Record<string, string>` | The source files we're passing through the transformer keyed by the file name/path
`expectedOutputFiles` | `Record<string, string>` | Our expected output of the transformer keyed by file name/path
## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.