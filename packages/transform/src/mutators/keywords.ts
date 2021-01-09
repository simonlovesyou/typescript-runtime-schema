import * as ts from "typescript";
import { createObjectLiteralFrom } from "@typescript-runtime-schema/compiler-utilities";

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

export const keyword = (kind: ts.SyntaxKind): ts.ObjectLiteralExpression => {
  if (kind === ts.SyntaxKind.VoidKeyword) {
    return createObjectLiteralFrom(
      { anyOf: [{ type: "null" }, { type: "undefined" }] },
      true
    );
  }

  return createObjectLiteralFrom(
    {
      type: keywordTypeMap.get(kind),
    },
    true
  );
};

export const mutate = (node: ts.Node) => {
  return keyword(node.kind);
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
