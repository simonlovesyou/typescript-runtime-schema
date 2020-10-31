import * as ts from "typescript";
import { map } from "ramda";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards, { MutateMap } from ".";
import { createSchemaDescriptor } from "../create";
import * as factory from '@typescript-runtime-schema/factory'

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
    return mutateUpwards(parent, checker) as
      | ts.StringLiteral
      | ts.StringLiteral[];
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

export const intersectionType = (
  intersection: ts.IntersectionType,
  checker: ts.TypeChecker
) => {
  const types = intersection.types as unknown as ts.TypeNode[];
  debugger;
  return factory.createObjectLiteralExpression(true)([
    factory.createPropertyAssignment('allOf')(
      factory.createArrayLiteralExpression(true)([
        ...map((type: ts.TypeNode) => mutateUpwards(type, checker))(types as ts.TypeNode[]) as ts.Expression[]
      ])
    )
  ])
};

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
  [ts.SyntaxKind.IntersectionType]: intersectionType,
};

export default MUTATE_MAP;
