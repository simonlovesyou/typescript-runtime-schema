import ".";
import * as ts from "typescript";

describe("expect-to-be-transformed-to", () => {
  it("should transform the typescript code using the transformer", () => {
    expect(
      ts.factory.createObjectLiteralExpression([
        ts.factory.createPropertyAssignment(
          "foo",
          ts.factory.createStringLiteral("bar")
        ),
      ])
    ).toEqualSourceCode(`{ foo: "bar" }`);
  });
});
