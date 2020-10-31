import * as ts from "typescript";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards, { MutateMap } from ".";
import { createSchemaDescriptor } from "../create";

const literalTypeNode = (
  literalTypeNode: ts.LiteralTypeNode,
  checker: ts.TypeChecker
) => mutateUpwards(literalTypeNode.literal, checker) as ts.StringLiteral;

export const typeReferenceNode = (
  typeReferenceNode: ts.TypeReferenceNode,
  checker: ts.TypeChecker
) => {
  const name = typeReferenceNode.typeName as ts.Identifier;
  const rootIdentifier = findRootIdentifier(name, checker);
  const parent = rootIdentifier.parent;
  const result = mutateUpwards(parent, checker) as ts.Node;

  if (ts.isStringLiteral(result)) {
    return createSchemaDescriptor(
      mutateUpwards(parent, checker) as ts.StringLiteral | ts.StringLiteral[]
    );
  }
  return result;
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker
) => {
  const types = unionTypeNode.types;

  return createSchemaDescriptor(
    types.map((type) => mutateUpwards(type, checker) as ts.StringLiteral)
  );
};

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
};

export default MUTATE_MAP;
