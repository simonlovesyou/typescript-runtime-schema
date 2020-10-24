import '.'
import * as ts from "typescript";

describe("expect-to-be-compiled-to", () => {
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
    describe('when the expected compiled string is correct', () => {
      const expected = `
interface User {
    id: string;
}
`.trim()
      it("should correctly pass the test", () => {
        expect(node).toBeCompiledTo(expected);
      });
    })
    describe('when the expected compiled string is not correct', () => {
      const expected = `
interface User {
  id: number;
}
`.trim()
      it("should correctly not pass the test", () => {
        expect(node).not.toBeCompiledTo(expected);
      });
    })
  });
});
