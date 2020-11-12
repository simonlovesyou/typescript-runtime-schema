import * as ts from "typescript";
import { map, reduce } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";
import mutateUpwards from ".";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import {
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from "@typescript-runtime-schema/compiler-utilities";

type TypeKeyword =
  | ts.SyntaxKind.StringKeyword
  | ts.SyntaxKind.NumberKeyword
  | ts.SyntaxKind.BooleanKeyword
  | ts.SyntaxKind.AnyKeyword
  | ts.SyntaxKind.VoidKeyword
  | ts.SyntaxKind.IntersectionType
  | ts.SyntaxKind.ObjectKeyword;

const propertySignature = (
  propertySignature: ts.PropertySignature,
  checker: ts.TypeChecker
): ts.PropertyAssignment => {
  return factory.createPropertyAssignment(propertySignature.name)(
    mutateUpwards<
      TypeKeyword | ts.SyntaxKind.UnionType | ts.SyntaxKind.TypeReference
    >(propertySignature.type, checker) as ts.Expression
  );
};

const typeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration,
  checker: ts.TypeChecker
) => {
  const type = typeAliasDeclaration.type;
  return mutateUpwards<TypeKeyword>(type, checker);
};

const identifier = (identifier: ts.Identifier, checker: ts.TypeChecker) => {
  const rootIdentifier = findRootIdentifier(identifier, checker);

  return mutateUpwards<ts.SyntaxKind.InterfaceDeclaration>(
    rootIdentifier.parent,
    checker
  );
};

const heritageClause = (
  heritageClause: ts.HeritageClause,
  checker: ts.TypeChecker
) => {
  const types = heritageClause.types;
  const result = types.map((type) =>
    mutateUpwards<ts.SyntaxKind.Identifier>(type.expression, checker)
  );
  return result[0];
};

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) => {
  const members = interfaceDeclaration.members;

  const inheritsFrom = interfaceDeclaration.heritageClauses
    ? map((heritageClause: ts.HeritageClause) => {
        return mutateUpwards<ts.SyntaxKind.HeritageClause>(
          heritageClause,
          checker
        );
      })(interfaceDeclaration.heritageClauses)
    : [factory.createObjectLiteralExpression()([])];

  const base = createObjectLiteralFrom(
    {
      type: "object",
      title: interfaceDeclaration.name.escapedText,
      properties: factory.createObjectLiteralExpression(true)(
        members.map((member: ts.PropertySignature) =>
          mutateUpwards<ts.SyntaxKind.PropertySignature>(member, checker)
        )
      ),
      required: members.reduce((acc, member: ts.PropertySignature) => {
        return member.questionToken
          ? acc
          : [...acc, factory.createStringLiteral(false)(member.name.getText())];
      }, []),
      additionalProperties: false,
    },
    true
  );

  const result = reduce(
    (acc, objectLiteral: ts.ObjectLiteralExpression) =>
      mergeObjectLiteralsRecursivelyLeft(objectLiteral, acc),
    base
  )(inheritsFrom);
  return result;
};

const typeLiteralNode = (
  typeLiteralNode: ts.TypeLiteralNode,
  checker: ts.TypeChecker
): ts.ObjectLiteralExpression => {
  const members = typeLiteralNode.members;

  return createObjectLiteralFrom(
    {
      type: "object",
      properties: factory.createObjectLiteralExpression(true)(
        map((member: ts.TypeElement) =>
          mutateUpwards<ts.SyntaxKind.PropertySignature>(member, checker)
        )(members)
      ),
      additionalProperties: false,
      required: members.reduce((acc, member: ts.PropertySignature) => {
        return member.questionToken
          ? acc
          : [...acc, factory.createStringLiteral(false)(member.name.getText())];
      }, []),
    },
    true
  );
};

const MUTATE_MAP = {
  [ts.SyntaxKind.TypeLiteral]: typeLiteralNode,
  [ts.SyntaxKind.InterfaceDeclaration]: interfaceDeclaration,
  [ts.SyntaxKind.PropertySignature]: propertySignature,
  [ts.SyntaxKind.Identifier]: identifier,
  [ts.SyntaxKind.TypeAliasDeclaration]: typeAliasDeclaration,
  [ts.SyntaxKind.HeritageClause]: heritageClause,
};

export default MUTATE_MAP;
