import * as ts from "typescript";
import { keyword } from "./keywords";
import { MutateMap } from ".";
import { compose } from "ramda";
import * as factory from '@typescript-runtime-schema/factory'

const literalTypeNode = (
  literal:
    | ts.NullLiteral
    | ts.TrueLiteral
    | ts.FalseLiteral
    | ts.LiteralExpression
    | ts.PrefixUnaryExpression
) => keyword(literal.kind);

const stringLiteral = (literal: ts.StringLiteral) => compose(
  factory.createObjectLiteralExpression(true),
  Array.of,
  factory.createPropertyAssignment('const')
)(literal);

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.StringLiteral]: stringLiteral
};

export default MUTATE_MAP;
