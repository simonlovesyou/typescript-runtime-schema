import ts from "typescript";
import types from "./types";
import declarations from "./declarations";
import literals from "./literals";
import operators from "./operators";
import keywords from "./keywords";
import signatures from "./signatures";

const evaluateMap = {
  ...types,
  ...declarations,
  ...literals,
  ...operators,
  ...keywords,
  ...signatures
};

type MutationSyntaxKind = keyof typeof evaluateMap;

export type Context = {
  typeArguments?: ts.TypeNode[] | ts.NodeArray<ts.TypeNode>;
  typeArgumentMap?: Map<string, ts.TypeNode>;
};

const evaluateOver = <T extends MutationSyntaxKind>(
  node: any,
  checker: ts.TypeChecker,
  context: Context
): ReturnType<typeof evaluateMap[T]> => {
  return evaluateMap[node.kind as MutationSyntaxKind](
    node,
    checker,
    context
  ) as ReturnType<typeof evaluateMap[T]>;
};

export default evaluateOver;
