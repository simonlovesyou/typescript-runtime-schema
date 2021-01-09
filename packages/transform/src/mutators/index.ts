import literals from "./literals";
import types from "./types";
import nodes from "./nodes";
import keywords from "./keywords";
import operators from "./operators";
import ts from "typescript";

const mutateMap = {
  ...keywords,
  ...literals,
  ...types,
  ...nodes,
  ...operators,
};

type MutationSyntaxKind = keyof typeof mutateMap;

export type Context = {
  typeArguments?: ts.TypeNode[] | ts.NodeArray<ts.TypeNode>;
  typeArgumentMap?: Map<string, ts.TypeNode>;
};

const mutateOver = <T extends MutationSyntaxKind>(
  node: any,
  checker: ts.TypeChecker,
  context: Context
): ReturnType<typeof mutateMap[T]> => {
  return mutateMap[node.kind as MutationSyntaxKind](
    node,
    checker,
    context
  ) as ReturnType<typeof mutateMap[T]>;
};

export default mutateOver;
