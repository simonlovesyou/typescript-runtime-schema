import * as ts from "typescript";
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

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) => {
  const members = interfaceDeclaration.members;

  return createSchemaDescriptor(factory.createStringLiteral()("object"), [
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map(
          (member: ts.PropertySignature) =>
            mutateUpwards(member, checker) as ts.ObjectLiteralElementLike
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
};

export default MUTATE_MAP;
