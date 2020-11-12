import * as ts from "typescript";
import { map, reduce } from "ramda";
import {
  findRootIdentifier,
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards from ".";

type TypeKeyword =
  | ts.SyntaxKind.StringKeyword
  | ts.SyntaxKind.NumberKeyword
  | ts.SyntaxKind.BooleanKeyword
  | ts.SyntaxKind.AnyKeyword
  | ts.SyntaxKind.VoidKeyword
  | ts.SyntaxKind.IntersectionType
  | ts.SyntaxKind.ObjectKeyword;

const literalTypeNode = (
  literalTypeNode: ts.LiteralTypeNode,
  checker: ts.TypeChecker
) =>
  mutateUpwards<ts.SyntaxKind.StringLiteral | ts.SyntaxKind.NullKeyword>(
    literalTypeNode.literal,
    checker
  );
export const typeReferenceNode = (
  typeReferenceNode: ts.TypeReferenceNode,
  checker: ts.TypeChecker
) => {
  const name = typeReferenceNode.typeName as ts.Identifier;
  const rootIdentifier = findRootIdentifier(name, checker);
  const parent = rootIdentifier.parent;
  const result = mutateUpwards<
    ts.SyntaxKind.InterfaceDeclaration | ts.SyntaxKind.TypeAliasDeclaration
  >(parent, checker);
  return result;
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker
): ts.ObjectLiteralExpression => {
  const types = unionTypeNode.types;

  return createObjectLiteralFrom(
    {
      anyOf: map((type: ts.TypeNode) => {
        return mutateUpwards<
          TypeKeyword | ts.SyntaxKind.TypeReference | ts.SyntaxKind.LiteralType
        >(type, checker);
      })(types),
    },
    true
  );
};

export const intersectionType = (
  intersection: ts.IntersectionType,
  checker: ts.TypeChecker
): ts.ObjectLiteralExpression => {
  const types = (intersection.types as unknown) as ts.TypeNode[];

  return reduce((acc, type: ts.TypeNode) => {
    return mergeObjectLiteralsRecursivelyLeft(
      acc,
      mutateUpwards<
        TypeKeyword | ts.SyntaxKind.LiteralType | ts.SyntaxKind.TypeReference
      >(type, checker) as ts.ObjectLiteralExpression
    );
  }, createObjectLiteralFrom({}))(types);
};

export const arrayType = (
  arrayTypeNode: ts.ArrayTypeNode,
  checker: ts.TypeChecker
): ts.ObjectLiteralExpression => {
  const elementType = arrayTypeNode.elementType;

  return createObjectLiteralFrom(
    {
      type: "array",
      items: mutateUpwards<TypeKeyword>(elementType, checker),
    },
    true
  );
};

export const tupleType = (
  tupleType: ts.TupleType,
  checker: ts.TypeChecker
) => {
  // `elements` does not exist on TupleType for some reason, although it's there
  const elements = (tupleType as any).elements || [];

  return createObjectLiteralFrom(
    {
      type: "array",
      items: map((element) =>
        mutateUpwards<
          TypeKeyword | ts.SyntaxKind.TypeReference | ts.SyntaxKind.LiteralType
        >(element, checker)
      )(elements),
      additionalItems: false
    },
    true
  );
};

const MUTATE_MAP = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
  [ts.SyntaxKind.IntersectionType]: intersectionType,
  [ts.SyntaxKind.ArrayType]: arrayType,
  [ts.SyntaxKind.TupleType]: tupleType,
};

export default MUTATE_MAP;
