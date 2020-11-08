import * as ts from "typescript";
import { keyword } from "./keywords";
import { MutateMap } from ".";
import { compose } from "ramda";
import { createObjectLiteralFrom } from "@typescript-runtime-schema/compiler-utilities";
import * as factory from '@typescript-runtime-schema/factory'

const literalTypeNode = (
  literal:
    | ts.NullLiteral
    | ts.TrueLiteral
    | ts.FalseLiteral
    | ts.LiteralExpression
    | ts.PrefixUnaryExpression
) => keyword(literal.kind);

const stringLiteral = (literal: ts.StringLiteral) => createObjectLiteralFrom({
  const: literal
}, true)

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.StringLiteral]: stringLiteral
};

export default MUTATE_MAP;
