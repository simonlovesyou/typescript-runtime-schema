## API
### .toTransformSourceCode
`expect(transformer).toTransformSourceCode(sourceCode, expectedCodeOutput)`

### Parameters
Name | Type | Description
------ | ------ | ------ |
`expect` | `(ts.Program) => (ts.TransformationContext) => (ts.SourceFile) => ts.SourceFile` | The typescript compiler transformation function. 
`sourceCode` | `string` | The source code we're passing through the transformer
`expectedCodeOutput` | `string` | Our expected output of the transformer