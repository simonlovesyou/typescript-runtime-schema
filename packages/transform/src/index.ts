import * as ts from "typescript";
import { tsquery } from "@phenomnomnominal/tsquery";
import { pipe, last, map } from "ramda";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";
import getArbitraryNodeName from "@typescript-runtime-schema/get-arbitrary-node-name";
import mutate from "./mutators";

interface TransformerOptions {}

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
  let schemaIdentifiers: ts.Identifier[] | undefined = undefined

  const visitor: ts.Visitor = (node: ts.Node) => {
    libraryIdentifier = libraryIdentifier || findLibraryIdentifier(node);
    schemaIdentifiers = schemaIdentifiers || findSchemaIdentifiers(node);
    if (ts.isCallExpression(node)) {
      const callExpression = node;
      if (ts.isIdentifier(callExpression.expression)) {
        const rootIdentifier = findRootIdentifier(
          callExpression.expression,
          checker,
          { includeImports: false }
        );

        if (rootIdentifier.escapedText === libraryIdentifier.escapedText) {
          const { typeArguments, arguments: args } = callExpression;
          const [typeArgument] = typeArguments;
          return pipe(
            factory.updateCallExpression(callExpression.expression, undefined, [
              mutate(typeArgument, checker) as ts.Expression,
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
        return ts.visitEachChild(node, visitor, ctx);
      }
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
