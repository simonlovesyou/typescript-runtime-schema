import * as ts from "typescript";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import evaluateOver, { Context } from ".";

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

  const someTypeSymbol = checker.getTypeAtLocation(typeReferenceNode).symbol;
  if (
    someTypeSymbol !== undefined &&
    ts.SymbolFlags.TypeParameter === someTypeSymbol.flags
  ) {
    const name = typeReferenceNode.typeName as ts.Identifier;

    const mappedType = context.typeArgumentMap.get(String(name.escapedText));

    return evaluateOver(mappedType, checker, {});
  }

  if (typeReferenceNode.typeArguments) {
    const evaluatedTypeArguments = typeReferenceNode.typeArguments.map(
      (typeArgument) => {
        if (ts.isTypeReferenceNode(typeArgument) && typeArgument.typeArguments)
          evaluateOver(typeArgument, checker, {
            typeArguments: typeArgument.typeArguments,
          });

        return typeArgument;
      }
    ) as ts.TypeNode[];

    return evaluateOver(nextIdentifier.parent, checker, {
      typeArguments: evaluatedTypeArguments,
    });
  } else {
    return evaluateOver(nextIdentifier.parent, checker, {});
  }
};

const mappedType = (
  mappedTypeNode: ts.MappedTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.TypeLiteralNode => {
  const evaluatedTypeParameter = evaluateOver<ts.SyntaxKind.TypeParameter>(
    mappedTypeNode.typeParameter,
    checker,
    context
  );
  if (ts.isUnionTypeNode(evaluatedTypeParameter.constraint)) {
    const res = ts.factory.createTypeLiteralNode(
      (evaluatedTypeParameter.constraint as ts.UnionTypeNode).types.map(
        (type: ts.LiteralTypeNode) => {
          const typeArgumentMap =
            context.typeArgumentMap || new Map<string, ts.TypeNode>();
          typeArgumentMap.set(
            String(mappedTypeNode.typeParameter.name.escapedText),
            type
          );

          const questionToken =
            mappedTypeNode.questionToken?.kind === ts.SyntaxKind.QuestionToken
              ? mappedTypeNode.questionToken
              : undefined;

          if (ts.isLiteralTypeNode(type)) {
            return ts.factory.createPropertySignature(
              [],
              (type.literal as ts.LiteralExpression).text,
              questionToken,
              evaluateOver(mappedTypeNode.type, checker, {
                ...context,
                typeArgumentMap,
              })
            );
          }
          return ts.factory.createIndexSignature(
            [],
            [],
            [
              ts.factory.createParameterDeclaration(
                [],
                [],
                undefined,
                "x",
                questionToken,
                type
              ),
            ],
            evaluateOver(mappedTypeNode.type, checker, {
              ...context,
              typeArgumentMap,
            })
          );
        }
      )
    );
    return res;
  }

  const typeArgumentMap =
    context.typeArgumentMap || new Map<string, ts.TypeNode>();
  typeArgumentMap.set(
    String(mappedTypeNode.typeParameter.name.escapedText),
    evaluatedTypeParameter.constraint
  );

  const questionToken =
    mappedTypeNode.questionToken?.kind === ts.SyntaxKind.QuestionToken
      ? mappedTypeNode.questionToken
      : undefined;

  const res = ts.factory.createTypeLiteralNode([
    ts.factory.createIndexSignature(
      [],
      [],
      [
        ts.factory.createParameterDeclaration(
          [],
          [],
          undefined,
          "x",
          questionToken,
          evaluatedTypeParameter.constraint
        ),
      ],
      evaluateOver(mappedTypeNode.type, checker, {
        ...context,
        typeArgumentMap,
      })
    ),
  ]);
  return res;
};

const indexAccessType = (
  indexAccessTypeNode: ts.IndexedAccessTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.TypeNode => {
  /* T[P]
   * T = ObjectType
   * P = IndexType */
  const { objectType, indexType } = indexAccessTypeNode;

  const evaluatedObjectType = evaluateOver(
    objectType,
    checker,
    context
  ) as ts.TypeLiteralNode;

  const evaluatedIndexType = evaluateOver(indexType, checker, context);

  return (evaluatedObjectType.members.find(
    (member) =>
      (member.name as ts.Identifier).escapedText ===
      evaluatedIndexType.literal.text
  ) as ts.PropertySignature).type;
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.UnionTypeNode => {
  const types = unionTypeNode.types;

  return ts.factory.createUnionTypeNode(
    types.map((type) => evaluateOver(type, checker, context))
  );
};

const EVALUATE_MAP = {
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.MappedType]: mappedType,
  [ts.SyntaxKind.IndexedAccessType]: indexAccessType,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
};

export default EVALUATE_MAP;
