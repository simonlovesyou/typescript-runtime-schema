import * as ts from "typescript";
import {
  printReceived,
  printExpected,
  printDiffOrStringify,
} from "jest-matcher-utils";
import { forEachObjIndexed, mapObjIndexed, equals } from "ramda";
import { createProjectSync } from "@ts-morph/bootstrap";
import * as path from "path";

interface Transformer {
  (program: ts.Program): ts.TransformerFactory<ts.SourceFile>;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that the passed in transformer can produce the expected output files by provided source files.
       * @example
       * expect(transformer: (ts.Program) => (ts.TransformationContext) => (ts.SourceFile) => ts.SourceFile)
       */
      toTransformProgram(
        sourceFiles: Record<string, string>,
        transpiledFiles: Record<string, string>
      ): R;
    }
  }
}

const toTransformProgram = (
  transformer: Transformer,
  inputFiles: Record<string, string>,
  expectedOutputFiles: Record<string, string>
) => {
  const project = createProjectSync({
    useInMemoryFileSystem: true,
    compilerOptions: {
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      outDir: "/dist",
      declaration: true,
      typeRoots: ["./dist"],
    },
  });

  forEachObjIndexed(
    (sourceCode: string, fileName: string) =>
      void project.createSourceFile(fileName, sourceCode),
    inputFiles
  );

  const program = project.createProgram();

  const { emitSkipped, diagnostics } = program.emit(
    undefined,
    undefined,
    undefined,
    false,
    {
      before: [transformer(program)],
    }
  );

  if (emitSkipped) {
    throw new Error(project.formatDiagnosticsWithColorAndContext(diagnostics));
  }

  const output = mapObjIndexed((value, path) =>
    project.fileSystem.readFileSync("/dist/" + path).trim()
  )(expectedOutputFiles);

  return {
    message: () =>
      `expected source code ${printReceived(
        inputFiles
      )} to transform to ${printExpected(
        expectedOutputFiles
      )} using the passed in transformer but it compiled to \n${printReceived(
        output
      )}\n\n${printDiffOrStringify(
        expectedOutputFiles,
        output,
        "expected",
        "received",
        false
      )}`,
    pass: equals(expectedOutputFiles as any, output),
  };
};

expect.extend({ toTransformProgram });
