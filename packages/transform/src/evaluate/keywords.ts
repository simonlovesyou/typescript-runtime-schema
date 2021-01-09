import * as ts from "typescript";
import { cloneNode } from "@wessberg/ts-clone-node";

export const mutate = (node: ts.TypeNode) => {
  return cloneNode<ts.TypeNode>(node);
};

export const intrinsic = () => {
  throw new Error('Cannot handle `intrinsic` keyword')
}

const MUTATE_MAP = {
  [ts.SyntaxKind.AnyKeyword]: mutate,
  [ts.SyntaxKind.BigIntKeyword]: mutate,
  [ts.SyntaxKind.BooleanKeyword]: mutate,
  [ts.SyntaxKind.NeverKeyword]: mutate,
  [ts.SyntaxKind.NumberKeyword]: mutate,
  [ts.SyntaxKind.ObjectKeyword]: mutate,
  [ts.SyntaxKind.StringKeyword]: mutate,
  [ts.SyntaxKind.SymbolKeyword]: mutate,
  [ts.SyntaxKind.UndefinedKeyword]: mutate,
  [ts.SyntaxKind.UnknownKeyword]: mutate,
  [ts.SyntaxKind.VoidKeyword]: mutate,
  [ts.SyntaxKind.IntrinsicKeyword]: intrinsic,
};

export default MUTATE_MAP;
