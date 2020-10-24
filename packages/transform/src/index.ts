import * as ts from "typescript";
import { inspect } from "util";
import { tsquery } from "@phenomnomnominal/tsquery";
import { either, find, is } from "ramda";
import { findRootIdentifier, createCall } from "@typescript-runtime-schema/compiler-utilities";
import getArbitraryNodeName from "@typescript-runtime-schema/get-arbitrary-node-name";

interface TransformerOptions {}

const parseKeywordWithExpression = (
  keywordKind: ts.SyntaxKind,
  expression: ts.Expression
): ts.Expression => {
  if (keywordKind === ts.SyntaxKind.StringKeyword) {
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        expression,
        ts.factory.createIdentifier("string")
      ),
      undefined,
      []
    );
  }
};

const parseLibraryTypeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration
): ts.Expression => {
  if (typeAliasDeclaration.type.kind === ts.SyntaxKind.StringKeyword) {
    return parseKeywordWithExpression(
      typeAliasDeclaration.type.kind,
      ts.factory.createIdentifier("Joi")
    );
  }
  debugger;
};

const parseLibraryTypeReference = (
  typeReference: ts.TypeReferenceNode,
  checker: ts.TypeChecker
): void => {
  const parent = typeReference.parent;
  if (ts.isTypeAliasDeclaration(parent)) {
    const declarations = checker.getSymbolAtLocation(typeReference);
    const children = parent.getChildren();
    const kids = typeReference.getChildren();
    debugger;
  }
};

const parseLibraryInterfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration
): ts.Expression => {
  const members = interfaceDeclaration.members;

  return ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(
      ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier("Joi"),
          ts.factory.createIdentifier("object")
        ),
        undefined,
        []
      ),
      ts.factory.createIdentifier("keys")
    ),
    undefined,
    [
      ts.factory.createObjectLiteralExpression(
        [
          ...members.map((member) => {
            if (ts.isPropertySignature(member)) {
              return ts.factory.createPropertyAssignment(
                member.name,
                parseKeywordWithExpression(
                  member.type.kind,
                  ts.factory.createIdentifier("Joi")
                )
              );
            }
          }),
        ],
        true
      ),
    ]
  );
};

const findCallExpressionIdentifier = (
  node: ts.CallExpression
): ts.Identifier | undefined => {
  const children = node.getChildren();

  return children.find((node) => {
    if (ts.isIdentifier(node)) {
      return node;
    }
    return false;
  }) as ts.Identifier | undefined;
};

const findLibraryIdentifier = (node: ts.Node): ts.Identifier | undefined => {
  if (ts.isImportDeclaration(node)) {
    return tsquery<ts.Identifier>(node, 'Identifier[escapedText="is"]')[0];
  }
};

const findSchemaIdentifiers = (node: ts.Node): ts.Identifier[] | undefined => {
  if (
    ts.isImportDeclaration(node) &&
    node.getFullText().includes('from "@typescript-runtime-schema/schemas";')
  ) {
    return tsquery(node, "Identifier") as ts.Identifier[] | undefined;
  }
};

const createVisitor = (program: ts.Program) => (
  ctx: ts.TransformationContext,
  sf: ts.SourceFile
) => {
  const checker = program.getTypeChecker();
  let libraryIdentifier: ts.Identifier | undefined = undefined;
  let schemaIdentifiers: ts.Identifier[] | undefined = undefined;
  const visitor: ts.Visitor = (node: ts.Node) => {
    libraryIdentifier = libraryIdentifier || findLibraryIdentifier(node);
    schemaIdentifiers = schemaIdentifiers || findSchemaIdentifiers(node);
    // @ts-ignore
    node._name = getArbitraryNodeName(node);

    if (ts.isCallExpression(node)) {
      const callExpression = node as ts.CallExpression;
      const callExpressionIdentifier = findCallExpressionIdentifier(
        callExpression
      );
      const rootIdentifier = findRootIdentifier(
        callExpressionIdentifier,
        checker
      );

      if (rootIdentifier.escapedText === libraryIdentifier.escapedText) {
        const { typeArguments, arguments: args } = callExpression;
        const [typeArgument] = typeArguments;
        if(typeArgument.kind === ts.SyntaxKind.StringKeyword) {
          return ts.factory.createCallExpression(
            ts.factory.createIdentifier("is"),
            undefined,
            [
              ...args,
              parseKeywordWithExpression(typeArgument.kind, ts.factory.createIdentifier('Joi'))
            ]
          );
        }
        // Retrieves the first type argument identifier (assuming there's only one for now)
        const typeArgumentIdentifier = tsquery(
          typeArgument,
          "Identifier"
        )[0] as ts.Identifier;

        debugger;
        const rootTypeArgumentIdentifier = findRootIdentifier(
          typeArgumentIdentifier,
          checker
        );
        rootTypeArgumentIdentifier.parent;
        if (ts.isTypeReferenceNode(rootTypeArgumentIdentifier.parent)) {
          debugger;
          parseLibraryTypeReference(rootTypeArgumentIdentifier.parent, checker);
          // return ts.factory.createCallExpression(
          //   ts.factory.createIdentifier("assert"),
          //   [typeArgument],
          //   [parseLibraryTypeAliasDeclaration(matchingDeclaration, schemaIdentifiers), ...args]
          // );
        }
        // type Foo = string
        if (ts.isTypeAliasDeclaration(rootTypeArgumentIdentifier.parent)) {
          debugger;
          return ts.factory.createCallExpression(
            ts.factory.createIdentifier("is"),
            undefined,
            [
              ...args,
              parseLibraryTypeAliasDeclaration(
                rootTypeArgumentIdentifier.parent
              ),
            ]
          );
        }
        if(ts.isInterfaceDeclaration(rootTypeArgumentIdentifier.parent)) {
          return ts.factory.createCallExpression(
            ts.factory.createIdentifier("is"),
            undefined,
            [
              ...args,
              parseLibraryInterfaceDeclaration(
                rootTypeArgumentIdentifier.parent
              ),
            ]
          )
        }
        // debugger;
      }
      return;
    }
    return ts.visitEachChild(node, visitor, ctx);
  };
  return visitor;
};

const transformer = (program: ts.Program, opts?: TransformerOptions) => {
  const visitor = createVisitor(program);

  return (TransformationContext: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) =>
      ts.visitNode(sourceFile, visitor(TransformationContext, sourceFile));
  };
};

export default transformer;
