import * as ts from "typescript";
import { MutateMap } from ".";
import {
  createObjectLiteralFrom,
} from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";

const keywordTypeMap = new Map([
  [ts.SyntaxKind.StringKeyword, "string"],
  [ts.SyntaxKind.NumberKeyword, "number"],
  [ts.SyntaxKind.BooleanKeyword, "boolean"],
  [ts.SyntaxKind.ObjectKeyword, "object"],
  [ts.SyntaxKind.AnyKeyword, "any"],
  [ts.SyntaxKind.UndefinedKeyword, "undefined"],
  [ts.SyntaxKind.NullKeyword, "null"],
]);

export const keyword = (
  kind: ts.SyntaxKind
): ts.ObjectLiteralExpression | ts.ArrayLiteralExpression => {
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

const MUTATE_MAP: MutateMap = {
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
