import * as ts from "typescript";
import { map } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";
import mutateUpwards, { MutateMap } from ".";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import {
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from "@typescript-runtime-schema/compiler-utilities";

const propertySignature = (
  propertySignature: ts.PropertySignature,
  checker: ts.TypeChecker
) => {
  return factory.createPropertyAssignment(propertySignature.name)(
    mutateUpwards(propertySignature.type, checker) as ts.Expression
  );
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
  return result[0];
};

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) => {
  const members = interfaceDeclaration.members;

  const inheritFrom = interfaceDeclaration.heritageClauses
    ? map((heritageClause: ts.HeritageClause) => {
        return mutateUpwards(
          heritageClause,
          checker
        ) as ts.ObjectLiteralExpression;
      })(interfaceDeclaration.heritageClauses)
    : [factory.createObjectLiteralExpression()([])];

  return mergeObjectLiteralsRecursivelyLeft(
    inheritFrom[0],
    createObjectLiteralFrom(
      {
        type: "object",
        title: interfaceDeclaration.name.getText(),
        properties: factory.createObjectLiteralExpression(true)(
          members.map(
            (member: ts.PropertySignature) =>
              mutateUpwards(member, checker) as ts.ObjectLiteralElementLike
          )
        ),
        required: members.reduce((acc, member: ts.PropertySignature) => {
          return member.questionToken
            ? acc
            : [
                ...acc,
                factory.createStringLiteral(false)(member.name.getText()),
              ];
        }, []),
        additionalProperties: false,
      },
      true
    )
  );
};

const typeLiteralNode = (
  typeLiteralNode: ts.TypeLiteralNode,
  checker: ts.TypeChecker
) => {
  const members = typeLiteralNode.members;

  return createObjectLiteralFrom(
    {
      type: "object",
      properties: factory.createObjectLiteralExpression(true)(
        map(
          (member: ts.TypeElement) =>
            mutateUpwards(member, checker) as ts.ObjectLiteralElementLike
        )(members)
      ),
      additionalProperties: false,
    },
    true
  );
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
