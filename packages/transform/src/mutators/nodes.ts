import * as ts from "typescript";
import { map, reduce, pipe, filter, reject, equals } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";
import mutateUpwards, { Context } from ".";
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
  checker: ts.TypeChecker,
  context: Context
): ts.PropertyAssignment => {
  return factory.createPropertyAssignment(propertySignature.name)(
    mutateUpwards<
      TypeKeyword | ts.SyntaxKind.UnionType | ts.SyntaxKind.TypeReference
    >(propertySignature.type, checker, context)
  );
};

const typeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  if (typeAliasDeclaration.typeParameters) {
    const typeArgumentMap = typeAliasDeclaration.typeParameters.reduce(
      (map, typeParameter, index) => {
        map.set(
          String(typeParameter.name.escapedText),
          context.typeArguments[index]
        );
        return map;
      },
      new Map<string, ts.TypeNode>()
    );
    const type = typeAliasDeclaration.type;
    return mutateUpwards<TypeKeyword>(type, checker, {
      ...context,
      typeArgumentMap,
    });
  }
  const type = typeAliasDeclaration.type;
  return mutateUpwards<TypeKeyword>(type, checker, context);
};

const identifier = (
  identifier: ts.Identifier,
  checker: ts.TypeChecker,
  context: Context
) => {
  const rootIdentifier = findRootIdentifier(identifier, checker);

  return mutateUpwards<ts.SyntaxKind.InterfaceDeclaration>(
    rootIdentifier.parent,
    checker,
    context
  );
};

const heritageClause = (
  heritageClause: ts.HeritageClause,
  checker: ts.TypeChecker,
  context: Context
) => {
  const types = heritageClause.types;
  const result = types.map((type) =>
    mutateUpwards<ts.SyntaxKind.Identifier>(type.expression, checker, context)
  );
  return result[0];
};

const interfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  const members = interfaceDeclaration.members;

  const propertySignatures = filter(ts.isPropertySignature)(
    (members as unknown) as ts.Node[]
  ) as ts.PropertySignature[];

  const propertyNames = filter(ts.isIndexSignatureDeclaration)(
    (members as unknown) as ts.Node[]
  ) as ts.IndexSignatureDeclaration[];

  const inheritsFrom = interfaceDeclaration.heritageClauses
    ? map((heritageClause: ts.HeritageClause) => {
        return mutateUpwards<ts.SyntaxKind.HeritageClause>(
          heritageClause,
          checker,
          context
        );
      })(interfaceDeclaration.heritageClauses)
    : [factory.createObjectLiteralExpression()([])];

  const base = createObjectLiteralFrom(
    reject(equals(null))({
      type: "object",
      title: interfaceDeclaration.name.escapedText,
      properties:
        propertySignatures.length > 0
          ? factory.createObjectLiteralExpression(true)(
              propertySignatures.map((member) =>
                mutateUpwards<ts.SyntaxKind.PropertySignature>(
                  member,
                  checker,
                  context
                )
              )
            )
          : null,
      propertyNames:
        propertyNames.length > 1
          ? {
              anyOf: map((member: ts.IndexSignatureDeclaration) => {
                // Assume only one parameter
                const parameter = member.parameters[0];

                return mutateUpwards<ts.SyntaxKind.Parameter>(
                  parameter,
                  checker,
                  context
                );
              })(propertyNames),
            }
          : propertyNames.length === 0
          ? null
          : mutateUpwards<ts.SyntaxKind.Parameter>(
              // Assume only one parameter
              propertyNames[0].parameters[0],
              checker,
              context
            ),
      required:
        propertySignatures.length > 0
          ? propertySignatures.reduce((acc, member) => {
              return member.questionToken
                ? acc
                : [
                    ...acc,
                    factory.createStringLiteral(false)(member.name.getText()),
                  ];
            }, [])
          : null,
      additionalProperties: propertyNames.length > 0,
    }),
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
  checker: ts.TypeChecker,
  context: Context
): ts.ObjectLiteralExpression => {
  const members = typeLiteralNode.members;

  const propertySignatures = filter(ts.isPropertySignature)(
    (members as unknown) as ts.Node[]
  ) as ts.PropertySignature[];

  const propertyNames = filter(ts.isIndexSignatureDeclaration)(
    (members as unknown) as ts.Node[]
  ) as ts.IndexSignatureDeclaration[];

  return createObjectLiteralFrom(
    reject(equals(null))({
      type: "object",
      properties:
        propertySignatures.length > 0
          ? factory.createObjectLiteralExpression(true)(
              pipe(
                map((member: ts.PropertySignature) => {
                  return mutateUpwards<ts.SyntaxKind.PropertySignature>(
                    member,
                    checker,
                    context
                  );
                })
              )(propertySignatures)
            )
          : null,
      propertyNames:
        propertyNames.length > 1
          ? {
              anyOf: propertyNames.map((member) => {
                // Assume only one parameter
                const parameter = member.parameters[0];

                return mutateUpwards<ts.SyntaxKind.Parameter>(
                  parameter,
                  checker,
                  context
                );
              }),
            }
          : propertyNames.length === 0
          ? null
          : mutateUpwards<ts.SyntaxKind.Parameter>(
              // Assume only one parameter
              propertyNames[0].parameters[0],
              checker,
              context
            ),
      additionalProperties: propertyNames.length > 0,
      required:
        propertySignatures.length > 0
          ? propertySignatures.reduce((acc, member) => {
              return member.questionToken
                ? acc
                : [
                    ...acc,
                    factory.createStringLiteral(false)(member.name.getText()),
                  ];
            }, [])
          : null,
    }),
    true
  );
};

const parameter = (
  parameter: ts.ParameterDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  return mutateUpwards<TypeKeyword>(parameter.type, checker, context);
};

const typeParameterDeclaration = (
  typeParameter: ts.TypeParameterDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  return mutateUpwards<ts.SyntaxKind.TypeReference>(
    typeParameter.constraint,
    checker,
    context
  );
};

const MUTATE_MAP = {
  [ts.SyntaxKind.TypeLiteral]: typeLiteralNode,
  [ts.SyntaxKind.InterfaceDeclaration]: interfaceDeclaration,
  [ts.SyntaxKind.PropertySignature]: propertySignature,
  [ts.SyntaxKind.Identifier]: identifier,
  [ts.SyntaxKind.TypeAliasDeclaration]: typeAliasDeclaration,
  [ts.SyntaxKind.HeritageClause]: heritageClause,
  [ts.SyntaxKind.Parameter]: parameter,
  [ts.SyntaxKind.TypeParameter]: typeParameterDeclaration,
};

export default MUTATE_MAP;
