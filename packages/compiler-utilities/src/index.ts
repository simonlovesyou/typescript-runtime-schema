import * as ts from "typescript";
import { pipe } from "ramda";

export const addPropertyAccessToIdentifier = (property: ts.Identifier | ts.PrivateIdentifier) => (
  identifier: ts.Expression
) => ts.createPropertyAccess(identifier, property);

export const createCall = (
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[]
) => (expression: ts.Expression) =>
  ts.createCall(expression, typeArguments, argumentsArray);

export const addMethodCallToExpression = (
  methodName: string,
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[] = []
) => (identifier: ts.Expression) =>
  pipe(
    () => identifier,
    addPropertyAccessToIdentifier(ts.factory.createIdentifier(methodName)),
    createCall([], [])
  )();

export const findRootIdentifier = (identifier: ts.Identifier, checker: ts.TypeChecker): ts.Identifier => {
  const symbol = checker.getSymbolAtLocation(identifier)
  debugger;
  const declaration = symbol.declarations[0]

  if(ts.isTypeAliasDeclaration(declaration)) {
    if(ts.isTypeReferenceNode(declaration.type) && ts.isIdentifier(declaration.type.typeName)) {
      return findRootIdentifier(declaration.type.typeName, checker)
    }
    return declaration.name
  }
  if(ts.isVariableDeclaration(declaration)) {
    const initializer = declaration.initializer
    if(!initializer) {
      return identifier
    }
     if(ts.isIdentifier(initializer)) {
      return findRootIdentifier(initializer, checker)
    }
  }
  if(ts.isInterfaceDeclaration(declaration)) {
    return declaration.name
  }
  return identifier
}