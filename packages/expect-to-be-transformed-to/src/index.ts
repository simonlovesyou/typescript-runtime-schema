import * as ts from "typescript";
import {
  printReceived,
  printExpected,
  printDiffOrStringify,
} from "jest-matcher-utils";

interface Transformer {
  (program: ts.Program): ts.TransformerFactory<ts.SourceFile>
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
       */
      toBeTransformedTo(transformer: Transformer, string: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeAfter(new Date('2019-12-31'))
       * );
       */
      toBeTransformedTo<T>(string: string): JestMatchers<T>;
    }
  }
}

const toBeTransformedTo = (
  received: string,
  transformer: Transformer,
  expectedOutput: string,
) => {
  const setParentNodes = true;

  console.log(received, transformer, expectedOutput)

  const sourceFile = ts.createSourceFile(
    "whatever.ts",
    received,
    ts.ScriptTarget.ES2015,
    setParentNodes
  );

  const host = ts.createCompilerHost({}, setParentNodes);

  const program = ts.createProgram({
    rootNames: ["whatever.ts"],
    host,
    options: {},
  });

  const { outputText } = ts.transpileModule(received, {
    transformers: { before: [transformer(program)] },
  });

  const result = outputText.trim()

  return {
    message: () =>
      `expected source code ${printReceived(
        received
      )} to transform to ${printExpected(
        expectedOutput
      )} using the passed in transformer but it compiled to ${result}\n\n${printDiffOrStringify(
        expectedOutput,
        result,
        "expected",
        "received",
        false
      )}`,
    pass: result === expectedOutput,
  };
};

expect.extend({ toBeTransformedTo });
