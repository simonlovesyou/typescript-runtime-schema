import * as ts from "typescript";
import { tsquery } from "@phenomnomnominal/tsquery";
import { pipe, last } from "ramda";
import {
  findRootIdentifier,
  isKeyword,
} from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";
import getArbitraryNodeName from "@typescript-runtime-schema/get-arbitrary-node-name";

interface TransformerOptions {}

const keywordConstraintMap = new Map([
  [
    ts.SyntaxKind.StringKeyword,
    pipe(
      factory.createPropertyAccessExpression("string"),
      factory.createCallExpression(undefined, [])
    )(factory.createIdentifier("Joi")),
  ],
  [
    ts.SyntaxKind.NumberKeyword,
    pipe(
      factory.createPropertyAccessExpression("number"),
      factory.createCallExpression(undefined, [])
    )(factory.createIdentifier("Joi")),
  ],
]);

const parseKeywordWithExpression = (
  keywordKind: ts.SyntaxKind
): ts.Expression => {
  return keywordConstraintMap.get(keywordKind);
};

const parseLibraryTypeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration
): ts.Expression => {
  if (typeAliasDeclaration.type.kind === ts.SyntaxKind.StringKeyword) {
    return parseKeywordWithExpression(typeAliasDeclaration.type.kind);
  }
  if (typeAliasDeclaration.type.kind === ts.SyntaxKind.NumberKeyword) {
    return parseKeywordWithExpression(typeAliasDeclaration.type.kind);
  }
  debugger;
};

const findCallExpressionIdentifier = (
  node: ts.CallExpression
): ts.Identifier | undefined => {
  const children = node.getChildren();

  return children.find((node) => {
    if (ts.isIdentifier(node)) {
      return node;
    }
    if (ts.isPropertyAccessExpression(node)) {
      const identifiers = tsquery<ts.Identifier>(node, "Identifier");
      return last(identifiers);
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
      const callExpression = node;
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

        if (isKeyword(typeArgument)) {
          return ts.factory.updateCallExpression(
            callExpression,
            callExpressionIdentifier,
            undefined,
            [...args, parseKeywordWithExpression(typeArgument.kind)]
          );
        }
        // Retrieves the first type argument identifier (assuming there's only one for now)
        const typeArgumentIdentifier = tsquery(
          typeArgument,
          "Identifier"
        )[0] as ts.Identifier;

        const rootTypeArgumentIdentifier = findRootIdentifier(
          typeArgumentIdentifier,
          checker
        );
        rootTypeArgumentIdentifier.parent;

        // type Foo = string
        if (ts.isTypeAliasDeclaration(rootTypeArgumentIdentifier.parent)) {
          return pipe(
            () => factory.createIdentifier("is"),
            factory.createCallExpression(undefined, [
              ...args,
              parseLibraryTypeAliasDeclaration(
                rootTypeArgumentIdentifier.parent
              ),
            ])
          )();
        }
        if (ts.isInterfaceDeclaration(rootTypeArgumentIdentifier.parent)) {
          throw new Error('Interfaces are not yet implemented in this version.')
        }
      }
      return node;
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
