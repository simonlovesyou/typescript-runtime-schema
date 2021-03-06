import * as ts from "typescript";
import { keyword } from "./keywords";
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

const stringLiteral = (stringLiteral: ts.StringLiteral) => createObjectLiteralFrom({
  const: factory.createStringLiteral(true)(stringLiteral.text)
}, true)

const numericLiteral = (numericLiteral: ts.NumericLiteral) => createObjectLiteralFrom({
  const: factory.createNumericLiteral()(numericLiteral.text)
}, true)

const MUTATE_MAP = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.StringLiteral]: stringLiteral,
  [ts.SyntaxKind.NumericLiteral]: numericLiteral
};

export default MUTATE_MAP;
