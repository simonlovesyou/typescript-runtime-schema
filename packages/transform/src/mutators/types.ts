import * as ts from "typescript";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards, { MutateMap } from ".";

const literalTypeNode = (
  literalTypeNode: ts.LiteralTypeNode,
  checker: ts.TypeChecker
) => mutateUpwards(literalTypeNode.literal, checker);

export const typeReferenceNode = (
  typeReferenceNode: ts.TypeReferenceNode,
  checker: ts.TypeChecker
) => {
  const name = typeReferenceNode.typeName as ts.Identifier;
  const rootIdentifier = findRootIdentifier(name, checker);
  const parent = rootIdentifier.parent;

  return mutateUpwards(parent, checker) as ts.Expression;
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker
): ts.Expression[] => {
  const types = unionTypeNode.types;

  return types.map((type) => mutateUpwards(type, checker) as ts.Expression);
};

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
};

export default MUTATE_MAP;
