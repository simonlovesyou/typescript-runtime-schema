import formatAbstractSyntaxTree from ".";
import * as ts from "typescript";

describe("formatAbstractSyntaxTree", () => {
  describe("when a Node is passed as argument", () => {
    const node = ts.createExpressionStatement(
      ts.createArrayLiteral(
        [
          ts.createObjectLiteral(
            [
              ts.createPropertyAssignment(
                ts.createIdentifier("hello"),
                ts.createStringLiteral("hello")
              ),
            ],
            false
          ),
          ts.createArrayLiteral(
            [
              ts.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                ts.createStringLiteral("foo")
              ),
              ts.createArrayLiteral([ts.createStringLiteral("string")], true),
            ],
            true
          ),
        ],
        true
      )
    );

    it("should return a pretty printed representation of the AST", () => {
      expect(formatAbstractSyntaxTree(node)).toBe(`
ExpressionStatement
  ArrayLiteralExpression
    ObjectLiteralExpression
      PropertyAssignment
    ArrayLiteralExpression
      ArrowFunction
      ArrayLiteralExpression
        StringLiteral    
`.trim());
    });
  });
});
