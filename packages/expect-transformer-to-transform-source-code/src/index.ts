import * as ts from "typescript";
import {
  printReceived,
  printExpected,
  printDiffOrStringify,
} from "jest-matcher-utils";

interface Transformer {
  (program: ts.Program): ts.TransformerFactory<ts.SourceFile>;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that the passed in transformer can produce the expected output based on provided source code.
       * @example
       * expect(transformer: (program: ts.Program) => ts.TranformerFactory<ts.SourceFile>).toTransformSourceCode('"foo";', '"bar";);
       */
      toTransformSourceCode(sourceCode: string, transpiledCode: string): R;
    }
  }
}

const toTransformSourceCode = (
  transformer: Transformer,
  sourceCode: string,
  expectedCodeOutput: string
) => {
  const host = ts.createCompilerHost({}, true);

  const program = ts.createProgram({
    rootNames: ["whatever.ts"],
    host,
    options: {
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });

  const { outputText } = ts.transpileModule(sourceCode, {
    transformers: { before: [transformer(program)] },
  });

  const result = outputText.trim();

  return {
    message: () =>
      `expected source code ${printReceived(
        sourceCode
      )} to transform to ${printExpected(
        expectedCodeOutput
      )} using the passed in transformer but it compiled to \n${printReceived(
        result
      )}\n\n${printDiffOrStringify(
        expectedCodeOutput,
        result,
        "expected",
        "sourceCode",
        false
      )}`,
    pass: result === expectedCodeOutput,
  };
};

expect.extend({ toTransformSourceCode });
