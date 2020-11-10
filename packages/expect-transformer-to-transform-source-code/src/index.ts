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
       * Asserts that the passed in transformer can produce the expected output based on provided source code.
       * @example
       * expect(transformer: (program: ts.Program) => ts.TranformerFactory<ts.SourceFile>).toTransformSourceCode('"foo";', '"bar";);
       */
      toTransformSourceCode(sourceCode: string, transpiledCode: string): R
    }
  }
}

const toTransformSourceCode = (
  transformer: Transformer,
  received: string,
  expectedOutput: string,
) => {
  const host = ts.createCompilerHost({}, true);

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
