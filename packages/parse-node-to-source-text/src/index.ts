import * as ts from "typescript";

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

const parseNodeToSourceText = (node: ts.Node): string => {
  const resultFile = ts.createSourceFile(
    "whatever.ts",
    "",
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  );

  const result = printer.printNode(ts.EmitHint.Unspecified, node, resultFile);

  return result;
};

export default parseNodeToSourceText
