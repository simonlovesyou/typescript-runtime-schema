## API
### .toTransformProgram
`expect(transformer).toTransformProgram(sourceFiles, expectedOutputFiles)`

### Parameters
Name | Type | Description
------ | ------ | ------ |
`expect` | `(ts.Program) => (ts.TransformationContext) => (ts.SourceFile) => ts.SourceFile` | The typescript compiler transformation function.
`sourceFiles` | `Record<string, string>` | The source files we're passing through the transformer keyed by the file name/path
`expectedOutputFiles` | `Record<string, string>` | Our expected output of the transformer keyed by file name/path