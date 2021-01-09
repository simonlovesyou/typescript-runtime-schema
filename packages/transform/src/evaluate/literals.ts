import * as ts from "typescript";
import { cloneNode } from "@wessberg/ts-clone-node";

export const typeLiteral = (typeLiteralNode: ts.TypeLiteralNode) => {
  return cloneNode(typeLiteralNode);
};

export const literalType = (literalType: ts.LiteralTypeNode) => {
  return cloneNode(literalType);
};

export const stringLiteral = (stringLiteral: ts.StringLiteral) => stringLiteral;

const MUTATE_MAP = {
  [ts.SyntaxKind.TypeLiteral]: typeLiteral,
  [ts.SyntaxKind.LiteralType]: literalType,
};

export default MUTATE_MAP;
