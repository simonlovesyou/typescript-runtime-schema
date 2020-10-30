import * as ts from "typescript";
import { keyword } from "./keywords";
import { MutateMap } from ".";

const literalTypeNode = (
  literal:
    | ts.NullLiteral
    | ts.TrueLiteral
    | ts.FalseLiteral
    | ts.LiteralExpression
    | ts.PrefixUnaryExpression
) => keyword(literal.kind);

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
};

export default MUTATE_MAP;
