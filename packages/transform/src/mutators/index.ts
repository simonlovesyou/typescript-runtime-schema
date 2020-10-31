import literals from "./literals";
import types from "./types";
import nodes from "./nodes";
import keywords from "./keywords";
import ts from "typescript";

export type Mutator = (
  node: ts.Node,
  checker: ts.TypeChecker
) => ts.Expression | ts.Expression[] | ts.Node | ts.StringLiteral | ts.StringLiteral[];

export type MutateMap = Partial<Record<ts.SyntaxKind, Mutator>>;

const mutateOver = (mutateMap: MutateMap) => (
  node: ts.Node,
  checker: ts.TypeChecker
): ReturnType<Mutator> => {
  return mutateMap[node.kind](node, checker);
};

export default mutateOver({
  ...keywords,
  ...literals,
  ...types,
  ...nodes,
});
