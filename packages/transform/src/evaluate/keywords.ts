import * as ts from "typescript";
import { cloneNode } from "@wessberg/ts-clone-node";

const keywordTypeMap = new Map([
  [ts.SyntaxKind.StringKeyword, "string"],
  [ts.SyntaxKind.NumberKeyword, "number"],
  [ts.SyntaxKind.BooleanKeyword, "boolean"],
  [ts.SyntaxKind.ObjectKeyword, "object"],
  [ts.SyntaxKind.AnyKeyword, "any"],
  [ts.SyntaxKind.UndefinedKeyword, "undefined"],
  [ts.SyntaxKind.NullKeyword, "null"],
  [ts.SyntaxKind.ObjectKeyword, "object"],
]);

export const mutate = (node: ts.Node) => {
  return cloneNode(node)
};

const MUTATE_MAP = {
  [ts.SyntaxKind.StringKeyword]: mutate,
  [ts.SyntaxKind.NumberKeyword]: mutate,
  [ts.SyntaxKind.BooleanKeyword]: mutate,
  [ts.SyntaxKind.ObjectKeyword]: mutate,
  [ts.SyntaxKind.AnyKeyword]: mutate,
  [ts.SyntaxKind.UndefinedKeyword]: mutate,
  [ts.SyntaxKind.NullKeyword]: mutate,
  [ts.SyntaxKind.VoidKeyword]: mutate,
};

export default MUTATE_MAP;
