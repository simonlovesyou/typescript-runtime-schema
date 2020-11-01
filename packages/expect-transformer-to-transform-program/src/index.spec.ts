import ".";
import * as ts from "typescript";
import dedent from 'dedent'

const createVisitor = (program: ts.Program) => (
  ctx: ts.TransformationContext,
  sf: ts.SourceFile
) => {
  const visitor: ts.Visitor = (node: ts.Node) => {
    if (ts.isStringLiteral(node)) {
      return ts.factory.createStringLiteral("bar");
    }
    return ts.visitEachChild(node, visitor, ctx);
  };
  return visitor;
};

const transformer = (program: ts.Program) => {
  const visitor = createVisitor(program);

  return (TransformationContext: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) =>
      ts.visitNode(sourceFile, visitor(TransformationContext, sourceFile));
  };
};

describe("expect-transformer-to-transform-program", () => {
  it("should transform the typescript code using the transformer", () => {
    expect(transformer).toTransformProgram(
      { "./foo.ts": `import * as baz from './baz`, "./baz.ts": `export const bar = "foo"`},
      { "./foo.js": dedent`
        "use strict";
        exports.__esModule = true;
        var baz = require("bar");
      `, "./baz.js": dedent`
        "use strict";
        exports.__esModule = true;
        exports.bar = void 0;
        exports.bar = "bar";
      ` }
    );
  });
});
