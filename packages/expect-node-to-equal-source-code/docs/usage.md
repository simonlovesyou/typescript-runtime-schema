## Usage

### .toEqualSourceCode

`expect(node).toEqualSourceCode(expectedSourceCode)`

Use `.toEqualSourceCode` when testing whether or not some TypeScript AST node that equivalates to some source code

```ts
import * as ts from "typescript";
import "@typescript-runtime-schema/expect-node-to-equal-source-code";

const generateFizzBuzzArray = (length: number) =>
  Array(length)
    .fill(0)
    .map((index) => index + 1)
    .map(
      (num: string) => (num % 3 ? "" : "fizz") + (num % 5 ? "" : "buzz") || i
    );

const generateFizzBuzzArrayLiteral = (length: number) =>
  ts.factory.createArrayLiteralExpression(
    generateFizzBuzzArray(length).map((arrayItem: string | number) =>
      typeof arrayItem === "number"
        ? ts.factory.createNumericLiteral(arrayItem.toString())
        : ts.factory.createStringLiteral(arrayItem)
    ),
    false
  );

expect(generateFizzBuzzArrayLiteral(8)).toEqualSourceCode(
  `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]`
);
```

### compilerOptions

`expect-node-to-equal-source-code` uses the following compilerOptions:

```json
{
  "moduleResolution": "node",
  "module": "commonjs",
  "target": "es2020"
}
```
