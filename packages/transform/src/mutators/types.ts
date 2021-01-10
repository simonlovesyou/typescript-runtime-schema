import * as ts from "typescript";
import { map, reduce, pipe } from "ramda";
import {
  findRootIdentifier,
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from "@typescript-runtime-schema/compiler-utilities";
import mutateUpwards, { Context } from ".";
import evaluateOver from "../evaluate";

type TypeKeyword =
  | ts.SyntaxKind.StringKeyword
  | ts.SyntaxKind.NumberKeyword
  | ts.SyntaxKind.BooleanKeyword
  | ts.SyntaxKind.AnyKeyword
  | ts.SyntaxKind.VoidKeyword
  | ts.SyntaxKind.IntersectionType
  | ts.SyntaxKind.ObjectKeyword;

const indexSignature = (
  indexSignature: ts.IndexSignatureDeclaration,
  checker: ts.TypeChecker,
  context: Context
): ts.ObjectLiteralExpression => {
  return createObjectLiteralFrom({
    type: "object",
    propertyNames: {
      anyOf: map((parameter) =>
        mutateUpwards<TypeKeyword>(parameter, checker, context)
      )(indexSignature.parameters),
    },
    additionalProperties: mutateUpwards(indexSignature.type, checker, context),
  });
};

const literalTypeNode = (
  literalTypeNode: ts.LiteralTypeNode,
  checker: ts.TypeChecker,
  context: Context
) =>
  mutateUpwards<ts.SyntaxKind.StringLiteral | ts.SyntaxKind.NullKeyword>(
    literalTypeNode.literal,
    checker,
    context
  );

export const typeReferenceNode = (
  typeReferenceNode: ts.TypeReferenceNode,
  checker: ts.TypeChecker,
  context: Context
): any => {
  const name = typeReferenceNode.typeName as ts.Identifier;

  const nextIdentifier = findRootIdentifier(
    name,
    checker,
    { includeImports: true },
    ts.isTypeAliasDeclaration
  );

  if (typeReferenceNode.typeArguments) {
    const evaluatedType = evaluateOver(typeReferenceNode, checker, {});
    return mutateUpwards(evaluatedType, checker, {});
  }

  return mutateUpwards<
    ts.SyntaxKind.InterfaceDeclaration | ts.SyntaxKind.TypeAliasDeclaration
  >(nextIdentifier.parent, checker, context);
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.ObjectLiteralExpression => {
  const types = unionTypeNode.types;

  return createObjectLiteralFrom(
    {
      anyOf: map((type: ts.TypeNode) => {
        const result = mutateUpwards<
          TypeKeyword | ts.SyntaxKind.TypeReference | ts.SyntaxKind.LiteralType
        >(type, checker, context);
        // FIXME: Result can either be the evaluated type or an object literal expression
        return ts.isObjectLiteralExpression(result)
          ? result
          : mutateUpwards<TypeKeyword>(result, checker, {});
      })(types),
    },
    true
  );
};

export const intersectionType = (
  intersection: ts.IntersectionType,
  checker: ts.TypeChecker,
  context: Context
): ts.ObjectLiteralExpression => {
  const types = (intersection.types as unknown) as ts.TypeNode[];

  return reduce((acc, type: ts.TypeNode) => {
    return mergeObjectLiteralsRecursivelyLeft(
      acc,
      mutateUpwards<
        TypeKeyword | ts.SyntaxKind.LiteralType | ts.SyntaxKind.TypeReference
      >(type, checker, context) as ts.ObjectLiteralExpression
    );
  }, createObjectLiteralFrom({}))(types);
};

export const arrayType = (
  arrayTypeNode: ts.ArrayTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.ObjectLiteralExpression => {
  const elementType = arrayTypeNode.elementType;

  return createObjectLiteralFrom(
    {
      type: "array",
      items: mutateUpwards<TypeKeyword>(elementType, checker, context),
    },
    true
  );
};

export const tupleType = (
  tupleType: ts.TupleType,
  checker: ts.TypeChecker,
  context: Context
) => {
  // `elements` does not exist on TupleType for some reason, although it's there
  const elements = (tupleType as any).elements || [];

  return createObjectLiteralFrom(
    {
      type: "array",
      items: map((element) =>
        mutateUpwards<
          TypeKeyword | ts.SyntaxKind.TypeReference | ts.SyntaxKind.LiteralType
        >(element, checker, context)
      )(elements),
      additionalItems: false,
    },
    true
  );
};

const mappedType = (mappedTypeNode: ts.MappedTypeNode, checker: ts.TypeChecker, context: Context) => {
  const evaluatedType = evaluateOver(mappedTypeNode, checker, context)

  return evaluatedType
}

const MUTATE_MAP = {
  [ts.SyntaxKind.LiteralType]: literalTypeNode,
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
  [ts.SyntaxKind.IntersectionType]: intersectionType,
  [ts.SyntaxKind.ArrayType]: arrayType,
  [ts.SyntaxKind.TupleType]: tupleType,
  [ts.SyntaxKind.IndexSignature]: indexSignature,
  [ts.SyntaxKind.MappedType]: mappedType,
};

export default MUTATE_MAP;
