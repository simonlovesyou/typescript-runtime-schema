import parseNodeToSourceText from '.' 
import * as ts from "typescript";

describe("parse-node-to-source-text", () => {
  describe("when a Node is passed as argument", () => {
    const node = ts.createInterfaceDeclaration(
      undefined,
      undefined,
      ts.createIdentifier("User"),
      undefined,
      undefined,
      [
        ts.createPropertySignature(
          undefined,
          ts.createIdentifier("id"),
          undefined,
          ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          undefined
        ),
      ]
    );
    it("should create the correct formatted source text", () => {
      expect(parseNodeToSourceText(node)).toBe(`interface User {
    id: string;
}`);
    });
  });
});
