import * as ts from "typescript";

export const createCallExpression = (
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[]
) => (expression: ts.Expression) =>
  ts.factory.createCallExpression(expression, typeArguments, argumentsArray);

export const createPropertyAccessExpression = (
  name: string | ts.Identifier | ts.PrivateIdentifier
) => (expression: ts.Expression) => ts.factory.createPropertyAccessExpression(expression, name)

export const createObjectLiteralExpression = (
  multiLine?: boolean
) => (properties?: readonly ts.ObjectLiteralElementLike[]) => ts.factory.createObjectLiteralExpression(properties, multiLine)

export const createPropertyAssignment = (
  name: string | ts.Identifier | ts.PrivateIdentifier | ts.StringLiteral | ts.NumericLiteral | ts.ComputedPropertyName
) => (initializer: ts.Expression) => ts.factory.createPropertyAssignment(name, initializer)

export const updateCallExpression = (
  identifier?: string | ts.Identifier,
  typeArguments?: readonly ts.TypeNode[],
  argumentsArray?: readonly ts.Expression[]
) => (callExpression: ts.CallExpression) =>
  ts.factory.updateCallExpression(
    callExpression,
    typeof identifier === "string" ? createIdentifier(identifier) : identifier,
    typeArguments || [],
    argumentsArray || []
  );
