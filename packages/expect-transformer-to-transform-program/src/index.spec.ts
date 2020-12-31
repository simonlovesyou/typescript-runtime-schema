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
      { "./foo.ts": `import * as bar from './bar`, "./bar.ts": `export const bar = "foo"`},
      { "./foo.js": dedent`
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        const bar = require("bar");
      `, "./bar.js": dedent`
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.bar = void 0;
        exports.bar = "bar";
      ` }
    );
  });
});