import createStringValidator from ".";

import * as ts from "typescript";

const compileFromNode = (node: ts.Node) => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const resultFile = ts.createSourceFile(
    "whatever.ts",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  const result = printer.printNode(
    ts.EmitHint.Unspecified,
    node,
    resultFile
  );

  return result
}

describe("createStringValidator", () => {
  describe("when an empty options object is passed", () => {
    it("should create the correct output", () => {
      expect(compileFromNode(createStringValidator({}))).toBe('Joi.string();')
    });
  });
});
