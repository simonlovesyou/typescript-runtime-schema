import * as ts from "typescript";
import { pipe } from "ramda";
import { findRootIdentifier } from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";
import mutate from "./mutators";

interface TransformerOptions {}

const findLibraryIdentifier = (node: ts.Node): ts.Identifier | undefined => {
  if (
    ts.isImportDeclaration(node) &&
    node.moduleSpecifier.getText().includes('@typescript-runtime-schema/lib') &&
    node.importClause.namedBindings
  ) {
    if(ts.isNamedImports(node.importClause.namedBindings)) {
      return node.importClause.namedBindings.elements
        .filter(ts.isImportSpecifier)
        .find((identifier) => identifier.name.getText() === "is").name;
    } else if(ts.isNamespaceImport(node.importClause.namedBindings)) {
      return node.importClause.namedBindings.name
    }
  }
};
const createVisitor = (program: ts.Program) => (
  ctx: ts.TransformationContext,
  sourceFile: ts.SourceFile
) => {
  const checker = program.getTypeChecker();
  let libraryIdentifier: ts.Identifier | undefined = undefined;

  const visitor: ts.Visitor = (node: ts.Node) => {
    libraryIdentifier = libraryIdentifier || findLibraryIdentifier(node);

    if (ts.isCallExpression(node)) {
      const callExpression = node;
      if(ts.isPropertyAccessExpression(callExpression.expression)) {
        if(callExpression.expression.expression.getText() === libraryIdentifier.getText()) {
          const { typeArguments, arguments: args } = callExpression;
          const [typeArgument] = typeArguments;

          return pipe(
            factory.updateCallExpression(callExpression.expression, undefined, [
              mutate(typeArgument, checker, {}) as ts.Expression,
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
        return ts.visitEachChild(node, visitor, ctx);
      }
      if (ts.isIdentifier(callExpression.expression)) {
        const rootIdentifier = findRootIdentifier(
          callExpression.expression,
          checker,
          { includeImports: false }
        );

        if (rootIdentifier && rootIdentifier.getText() === libraryIdentifier?.getText()) {
          const { typeArguments, arguments: args } = callExpression;
          const [typeArgument] = typeArguments;
          return pipe(
            factory.updateCallExpression(callExpression.expression, undefined, [
              mutate(typeArgument, checker, {}) as ts.Expression,
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
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
