import * as ts from "typescript";
import { tsquery } from "@phenomnomnominal/tsquery";
import { pipe, last, map } from "ramda";
import {
  findRootIdentifier,
  isKeyword,
} from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";
import getArbitraryNodeName from "@typescript-runtime-schema/get-arbitrary-node-name";
import mutate from './mutators'

interface TransformerOptions {}

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
  sourceFile: ts.SourceFile
) => {
  const checker = program.getTypeChecker();
  let libraryIdentifier: ts.Identifier | undefined = undefined;
  let schemaIdentifiers: ts.Identifier[] | undefined = undefined;
  const visitor: ts.Visitor = (node: ts.Node) => {
    libraryIdentifier = libraryIdentifier || findLibraryIdentifier(node);
    schemaIdentifiers = schemaIdentifiers || findSchemaIdentifiers(node);
    // @ts-ignore
    node._name = getArbitraryNodeName(node);
    // @ts-ignore
    map((value: ts.Node) => {
      try {
        const name = getArbitraryNodeName(value);
        if (name) {
          // @ts-ignore
          value._name = name;
        }
      } catch (error) {}
    }, node);

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
        const typeArgumentLiteral = (typeArgument as ts.LiteralTypeNode)
          .literal;

        if (
          isKeyword(typeArgument) ||
          (typeArgumentLiteral && isKeyword(typeArgumentLiteral))
        ) {
          return pipe(
            factory.updateCallExpression(callExpressionIdentifier, undefined, [
              mutate(typeArgumentLiteral || typeArgument, checker) as ts.Expression
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
        if (ts.isUnionTypeNode(typeArgument)) {
          const types = typeArgument.types;

          return pipe(
            factory.updateCallExpression(callExpressionIdentifier, undefined, [
              ts.factory.createArrayLiteralExpression(types.map(type => mutate(type, checker) as ts.Expression)),
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }

        return pipe(
          factory.updateCallExpression(callExpressionIdentifier, undefined, [
            mutate(typeArgument, checker) as ts.Expression,
          ]),
          factory.createCallExpression(undefined, args)
        )(callExpression);
      }
      return ts.visitEachChild(node, visitor, ctx);
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
