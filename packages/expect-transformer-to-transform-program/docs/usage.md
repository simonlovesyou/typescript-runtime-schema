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