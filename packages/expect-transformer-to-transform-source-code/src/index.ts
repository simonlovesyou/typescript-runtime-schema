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
      toTransformSourceCode(sourceCode: string, transpiledCode: string): R
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeAfter(new Date('2019-12-31'))
       * );
       */
      toTransformSourceCode<T>(transformer: Transformer): JestMatchers<T>;
    }
  }
}

const toTransformSourceCode = (
  transformer: Transformer,
  received: string,
  expectedOutput: string,
) => {
  const setParentNodes = true;

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
      )} using the passed in transformer but it compiled to \n${printReceived(result)}\n\n${printDiffOrStringify(
        expectedOutput,
        result,
        "expected",
        "received",
        false
      )}`,
    pass: result === expectedOutput,
  };
};

expect.extend({ toTransformSourceCode });