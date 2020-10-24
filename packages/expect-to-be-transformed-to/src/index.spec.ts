import '.'
import * as ts from "typescript";

const createVisitor = (program: ts.Program) => (
  ctx: ts.TransformationContext,
  sf: ts.SourceFile
) => {
  const visitor: ts.Visitor = (node: ts.Node) => {
    if(ts.isStringLiteral(node)) {
      return ts.factory.createStringLiteral('bar')
    }
    return ts.visitEachChild(node, visitor, ctx);
  };
  return visitor
};

const transformer = (program: ts.Program) => {
  const visitor = createVisitor(program);

  return (TransformationContext: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) =>
      ts.visitNode(sourceFile, visitor(TransformationContext, sourceFile));
  };
}


describe("expect-to-be-transformed-to", () => {
  it('should transform the typescript code using the transformer', () => {
    //@ts-ignore
    expect(`"foo"`).toBeTransformedTo(transformer, `"bar";`)
  })
});
