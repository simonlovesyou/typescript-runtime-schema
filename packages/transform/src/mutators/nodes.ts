import * as ts from "typescript";
import { map } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";
import { createSchemaDescriptor } from "../create";
import mutateUpwards, { MutateMap } from ".";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import { mutate } from "./keywords";

const propertySignature = (
  propertySignature: ts.PropertySignature,
  checker: ts.TypeChecker
) => {
  const result = mutateUpwards(
    propertySignature.type,
    checker
  ) as ts.Expression;

  if (ts.isStringLiteral(result)) {
    return ts.factory.createPropertyAssignment(
      propertySignature.name,
      createSchemaDescriptor(result)
    );
  }

  return ts.factory.createPropertyAssignment(propertySignature.name, result);
};

const typeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration,
  checker: ts.TypeChecker
) => {
  const type = typeAliasDeclaration.type;

  return mutateUpwards(type, checker);
};

const identifier = (identifier: ts.Identifier, checker: ts.TypeChecker) => {
  const rootIdentifier = findRootIdentifier(identifier, checker);
  return mutateUpwards(rootIdentifier.parent, checker) as ts.Node;
};

const heritageClause = (
  heritageClause: ts.HeritageClause,
  checker: ts.TypeChecker
) => {
  const types = heritageClause.types;
  const result = types.map((type) =>
  mutateUpwards(type.expression, checker)
) as ts.Expression[];
  debugger;
  return result[0]
};

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) => {
  const members = interfaceDeclaration.members;

  return createSchemaDescriptor(factory.createStringLiteral()("object"), [
    factory.createPropertyAssignment("title")(
      factory.createStringLiteral()(interfaceDeclaration.name.getText())
    ),
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map((member: ts.PropertySignature) => {
          return mutateUpwards(member, checker) as ts.ObjectLiteralElementLike;
        }),
      ])
    ),
    factory.createPropertyAssignment("required")(
      factory.createArrayLiteralExpression(false)([
        ...members.reduce((acc, member: ts.PropertySignature) => {
          return member.questionToken
            ? acc
            : [...acc, factory.createStringLiteral()(member.name.getText())];
        }, []),
      ])
    ),
    interfaceDeclaration.heritageClauses &&
      factory.createPropertyAssignment("allOf")(
        factory.createArrayLiteralExpression(true)([
          ...map((heritageClause: ts.HeritageClause) => {
            return mutateUpwards(
              heritageClause,
              checker
            ) as ts.ObjectLiteralExpression;
          })(interfaceDeclaration.heritageClauses || []),
        ])
      ),
    factory.createPropertyAssignment("additionalProperties")(
      ts.factory.createFalse()
    ),
  ].filter(node => node));
};

const typeLiteralNode = (
  typeLiteralNode: ts.TypeLiteralNode,
  checker: ts.TypeChecker
) => {
  const members = typeLiteralNode.members;
  return createSchemaDescriptor(factory.createStringLiteral()("object"), [
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map(
          (member) =>
            mutateUpwards(member, checker) as ts.ObjectLiteralElementLike
        ),
      ])
    ),
  ]);
};

const MUTATE_MAP: MutateMap = {
  [ts.SyntaxKind.TypeLiteral]: typeLiteralNode,
  [ts.SyntaxKind.InterfaceDeclaration]: interfaceDeclaration,
  [ts.SyntaxKind.PropertySignature]: propertySignature,
  [ts.SyntaxKind.Identifier]: identifier,
  [ts.SyntaxKind.TypeAliasDeclaration]: typeAliasDeclaration,
  [ts.SyntaxKind.HeritageClause]: heritageClause,
};

export default MUTATE_MAP;
