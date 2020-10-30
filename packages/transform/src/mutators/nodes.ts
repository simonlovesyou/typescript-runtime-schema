import * as ts from "typescript";
import * as factory from "@typescript-runtime-schema/factory";
import { createSchemaDescriptor } from "../create";
import mutateUpwards, { MutateMap } from ".";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";

const propertySignature = (
  propertySignature: ts.PropertySignature,
  checker: ts.TypeChecker
) => {
  const type = propertySignature.type;

  return mutateUpwards(type, checker);
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

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) => {
  const members = interfaceDeclaration.members;

  return createSchemaDescriptor("object", [
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map((member) =>
          ts.factory.createPropertyAssignment(
            member.name,
            mutateUpwards(member, checker) as ts.Expression
          )
        ),
      ])
    ),
  ]);
};

const typeLiteralNode = (
  typeLiteralNode: ts.TypeLiteralNode,
  checker: ts.TypeChecker
) => {
  const members = typeLiteralNode.members;

  return createSchemaDescriptor("object", [
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map((member) => {
          return ts.factory.createPropertyAssignment(
            member.name,
            mutateUpwards(member, checker) as ts.Expression
          );
        }),
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
};

export default MUTATE_MAP;
