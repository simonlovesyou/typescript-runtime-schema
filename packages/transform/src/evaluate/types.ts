import * as ts from "typescript";
import {
  findRootIdentifier,
  nodeEquals,
  isTypeNodeAssignableToTypeNode,
} from "@typescript-runtime-schema/compiler-utilities";
import evaluateOver, { Context } from ".";

export const typeReferenceNode = (
  typeReferenceNode: ts.TypeReferenceNode,
  checker: ts.TypeChecker,
  context: Context
): ts.TypeNode => {
  const name = typeReferenceNode.typeName as ts.Identifier;

  const nextIdentifier = findRootIdentifier(
    name,
    checker,
    { includeImports: true },
    ts.isTypeAliasDeclaration
  );

  const typeReferenceSymbol = checker.getTypeAtLocation(typeReferenceNode);
  const someTypeSymbol =
    //@ts-ignore Because `baseType` is actually there _sometimes_
    typeReferenceSymbol.symbol || typeReferenceSymbol.baseType;

  if (someTypeSymbol && someTypeSymbol.escapedName === "Array") {
    const currentSourceFile = nextIdentifier.parent.getSourceFile();
    // This is quite hacky but should work for most cases
    if (currentSourceFile.fileName.includes("node_modules/typescript/lib")) {
      return ts.factory.createArrayTypeNode(
        evaluateOver<ts.KeywordTypeSyntaxKind>(
          typeReferenceNode.typeArguments[0],
          checker,
          context
        )
      );
    }
  }
  if (
    someTypeSymbol !== undefined &&
    ts.SymbolFlags.TypeParameter === someTypeSymbol.flags
  ) {
    const name = typeReferenceNode.typeName as ts.Identifier;

    const mappedType = context.typeArgumentMap.get(String(name.escapedText));

    return evaluateOver<ts.KeywordTypeSyntaxKind>(mappedType, checker, {});
  }

  if (typeReferenceNode.typeArguments) {
    const evaluatedTypeArguments = typeReferenceNode.typeArguments.map(
      (typeArgument) => {
        return evaluateOver(typeArgument, checker, context);
      }
    ) as ts.TypeNode[];

    return evaluateOver<ts.KeywordTypeSyntaxKind | ts.SyntaxKind.TypeReference>(
      nextIdentifier.parent,
      checker,
      {
        typeArguments: evaluatedTypeArguments,
      }
    );
  } else {
    return evaluateOver<ts.KeywordTypeSyntaxKind | ts.SyntaxKind.TypeReference>(
      nextIdentifier.parent,
      checker,
      context
    );
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
              evaluateOver<ts.KeywordTypeSyntaxKind>(
                mappedTypeNode.type,
                checker,
                {
                  ...context,
                  typeArgumentMap,
                }
              )
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
            evaluateOver<ts.KeywordTypeSyntaxKind>(
              mappedTypeNode.type,
              checker,
              {
                ...context,
                typeArgumentMap,
              }
            )
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
      evaluateOver<ts.KeywordTypeSyntaxKind>(mappedTypeNode.type, checker, {
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
      ((evaluatedIndexType as ts.LiteralTypeNode)
        .literal as ts.LiteralExpression).text
  ) as ts.PropertySignature).type;
};

export const unionTypeNode = (
  unionTypeNode: ts.UnionTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.UnionTypeNode => {
  const types = unionTypeNode.types;

  return ts.factory.createUnionTypeNode(
    types.map((type) =>
      evaluateOver<ts.KeywordTypeSyntaxKind>(type, checker, context)
    )
  );
};

export const arrayType = (
  arrayTypeNode: ts.ArrayTypeNode,
  checker: ts.TypeChecker,
  context: Context
): ts.ArrayTypeNode => {
  const type = arrayTypeNode.elementType;

  return ts.factory.updateArrayTypeNode(
    arrayTypeNode,
    evaluateOver<ts.KeywordTypeSyntaxKind>(type, checker, context)
  );
};

export const conditionalType = (
  conditionalTypeNode: ts.ConditionalTypeNode,
  checker: ts.TypeChecker,
  context: Context
) => {
  const checkType = evaluateOver<
    ts.SyntaxKind.TypeReference | ts.KeywordTypeSyntaxKind
  >(conditionalTypeNode.checkType, checker, context);

  const extendsType = evaluateOver<
    ts.SyntaxKind.TypeReference | ts.KeywordTypeSyntaxKind
  >(conditionalTypeNode.extendsType, checker, context);

  const trueType = evaluateOver<
    ts.SyntaxKind.TypeReference | ts.KeywordTypeSyntaxKind
  >(conditionalTypeNode.trueType, checker, context);

  const falseType = evaluateOver<
    ts.SyntaxKind.TypeReference | ts.KeywordTypeSyntaxKind
  >(conditionalTypeNode.falseType, checker, context);

  if (ts.isUnionTypeNode(checkType)) {
    const res = checkType.types
      .reduce((acc: ts.TypeNode[], typeNode) => {
        if (isTypeNodeAssignableToTypeNode(typeNode, extendsType)) {
          if (nodeEquals(trueType, checkType)) {
            return [...acc, typeNode];
          }
          return [...acc, trueType];
        } else {
          if (nodeEquals(falseType, checkType)) {
            return [...acc, typeNode];
          }
          return [...acc, falseType];
        }
      }, [])
      .filter((node) => node.kind !== ts.SyntaxKind.NeverKeyword);
    return ts.factory.createUnionTypeNode(res);
  }
};

const EVALUATE_MAP = {
  [ts.SyntaxKind.TypeReference]: typeReferenceNode,
  [ts.SyntaxKind.MappedType]: mappedType,
  [ts.SyntaxKind.IndexedAccessType]: indexAccessType,
  [ts.SyntaxKind.UnionType]: unionTypeNode,
  [ts.SyntaxKind.ArrayType]: arrayType,
  [ts.SyntaxKind.ConditionalType]: conditionalType,
};

export default EVALUATE_MAP;
