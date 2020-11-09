import * as ts from "typescript";
import {
  printReceived,
  printExpected,
  printDiffOrStringify,
} from "jest-matcher-utils";
import { createProjectSync } from "@ts-morph/bootstrap";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that the passed in TypeScript node equals the provided source code.
       * @example
       * expect(node: ts.Node).toEqualSourceCode('"foo";');
       */
      toEqualSourceCode(transpiledCode: string): R
    }
  }
}

const createVisitor = (staticNode: ts.Node) => () => (
  ctx: ts.TransformationContext,
) => {
  const visitor: ts.Visitor = (node: ts.Node) => {
    if(!ts.isSourceFile(node)) {
      return staticNode
    }
    return ts.visitEachChild(node, visitor, ctx);
  };
  return visitor
};

const transformer = (staticNode: ts.Node) =>  (program: ts.Program) => {
  const visitor = createVisitor(staticNode)();

  return (TransformationContext: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) =>
      ts.visitNode(sourceFile, visitor(TransformationContext));
  };
}

const toEqualSourceCode = (
  node: ts.Node,
  expectedSourceCode: string,
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

  project.createSourceFile('whatever.ts', '"foo";')

  const program = project.createProgram();

  const { emitSkipped, diagnostics } = program.emit(
    undefined,
    undefined,
    undefined,
    false,
    {
      before: [transformer(node)(program)],
    }
  );

  if (emitSkipped) {
    throw new Error(project.formatDiagnosticsWithColorAndContext(diagnostics));
  }

  const result = project.fileSystem.readFileSync("/dist/whatever.js").trim()

  return {
    message: () =>
      `expected node to transform to ${printExpected(
        expectedSourceCode
      )} but it compiled to \n${printReceived(result)}\n\n${printDiffOrStringify(
        expectedSourceCode,
        result,
        "expected",
        "received",
        false
      )}`,
    pass: result === expectedSourceCode,
  };
};

expect.extend({ toEqualSourceCode });
