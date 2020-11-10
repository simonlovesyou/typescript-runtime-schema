import * as ts from "typescript";
import { map, reduce } from "ramda";
import {
  findRootIdentifier,
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards, { MutateMap } from ".";

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

  return createObjectLiteralFrom(
    {
      anyOf: map(
        (type: ts.TypeNode) =>
          mutateUpwards(type, checker) as ts.ObjectLiteralExpression
      )(types),
    },
    true
  );
};

export const intersectionType = (
  intersection: ts.IntersectionType,
  checker: ts.TypeChecker
) => {
  const types = (intersection.types as unknown) as ts.TypeNode[];

  return reduce(
    (acc, type: ts.TypeNode) =>
      mergeObjectLiteralsRecursivelyLeft(
        acc,
        mutateUpwards(type, checker) as ts.ObjectLiteralExpression
      ),
    createObjectLiteralFrom({})
  )(types);
};

export const arrayType = (
  arrayTypeNode: ts.ArrayTypeNode,
  checker: ts.TypeChecker
) => {
  const elementType = arrayTypeNode.elementType;

  return createObjectLiteralFrom(
    {
      type: "array",
      items: mutateUpwards(elementType, checker),
    },
    true
  );
};

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
  [ts.SyntaxKind.IntersectionType]: intersectionType,
  [ts.SyntaxKind.ArrayType]: arrayType,
};

export default MUTATE_MAP;
