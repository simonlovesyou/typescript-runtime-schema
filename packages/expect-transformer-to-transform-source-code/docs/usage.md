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