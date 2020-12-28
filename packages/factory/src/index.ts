import * as ts from "typescript";

/**
 * @param name - The name of the property
 * @public
 */
export const createPropertyAccessExpression = (
  name: string | ts.Identifier | ts.PrivateIdentifier
) => (expression: ts.Expression) =>
  ts.factory.createPropertyAccessExpression(expression, name);

/**
 * @public
 */
export const createObjectLiteralExpression = (multiLine?: boolean) => (
  properties?: readonly ts.ObjectLiteralElementLike[]
) => ts.factory.createObjectLiteralExpression(properties, multiLine);
/**
 * @public
 */
export const createPropertyAssignment = (
  name:
    | string
    | ts.Identifier
    | ts.PrivateIdentifier
    | ts.StringLiteral
    | ts.NumericLiteral
    | ts.ComputedPropertyName
) => (initializer: ts.Expression) =>
  ts.factory.createPropertyAssignment(name, initializer);
/**
 * @public
 */
export const createIdentifier = ts.factory.createIdentifier;
/**
 * @public
 */
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
/**
 * @public
 */
export const createArrayLiteralExpression = (multiLine?: boolean) => (
  elements: readonly ts.Expression[]
) => ts.factory.createArrayLiteralExpression(elements, multiLine);
/**
 * @public
 */
export const createStringLiteral = (singleLine?: boolean) => (string: string) =>
  ts.factory.createStringLiteral(string, singleLine);
/**
 * @public
 */
export const createNumericLiteral = (numericLiteralFlags?: ts.TokenFlags) => (
  text: string
) => ts.factory.createNumericLiteral(Number(text), numericLiteralFlags);
/**
 * @public
 */
export const createLoopVariable = ts.factory.createLoopVariable;
/**
 * @public
 */
export const createAdd = (right: ts.Expression) => (left: ts.Expression) =>
  ts.factory.createAdd(left, right);
/**
 * @public
 */
export const createArrowFunction = (body: ts.ConciseBody) => (
  modifiers: readonly ts.Modifier[] | undefined,
  typeParameters: readonly ts.TypeParameterDeclaration[] | undefined,
  parameters: readonly ts.ParameterDeclaration[],
  type: ts.TypeNode | undefined,
  equalsGreaterThanToken: ts.EqualsGreaterThanToken | undefined
) =>
  ts.factory.createArrowFunction(
    modifiers,
    typeParameters,
    parameters,
    type,
    equalsGreaterThanToken,
    body
  );
/**
 * @public
 */
export const createAsExpression = (type: ts.TypeNode) => (
  expression: ts.Expression
) => ts.factory.createAsExpression(expression, type);
/**
 * @public
 */
export const createAssignment = (right: ts.Expression) => (
  left: ts.Expression | ts.ObjectLiteralExpression | ts.ArrayLiteralExpression
) => ts.factory.createAssignment(left, right);
/**
 * @public
 */
export const createBinaryExpression = (right: ts.Expression) => (
  left: ts.Expression,
  operator: ts.BinaryOperator | ts.BinaryOperatorToken
) => ts.factory.createBinaryExpression(left, operator, right);
/**
 * @public
 */
export const createBindingElement = (
  dotDotDotToken: ts.DotDotDotToken | undefined,
  propertyName: string | ts.PropertyName | undefined,
  name: string | ts.BindingName
) => (initializer?: ts.Expression) =>
  ts.factory.createBindingElement(
    dotDotDotToken,
    propertyName,
    name,
    initializer
  );
/**
 * @public
 */
export const createBitwiseAnd = (right: ts.Expression) => (
  left: ts.Expression
) => ts.factory.createBitwiseAnd(left, right);
/**
 * @public
 */
export const createBitwiseOr = (right: ts.Expression) => (
  left: ts.Expression
) => ts.factory.createBitwiseOr(left, right);
/**
 * @public
 */
export const createBitwiseXor = (right: ts.Expression) => (
  left: ts.Expression
) => ts.factory.createBitwiseXor(left, right);
/**
 * @public
 */
export const createBlock = (multiLine?: boolean) => (
  statements: readonly ts.Statement[]
) => ts.factory.createBlock(statements, multiLine);
/**
 * @public
 */
export const createBundle = (
  prepends?: readonly (ts.UnparsedSource | ts.InputFiles)[]
) => (sourceFiles: readonly ts.SourceFile[]) =>
  ts.factory.createBundle(sourceFiles, prepends);
/**
 * @public
 */
export const createCallChain = (
  questionDotToken: ts.QuestionDotToken | undefined,
  typeArguments: readonly ts.TypeNode[] | undefined,
  argumentsArray: readonly ts.Expression[] | undefined
) => (expression: ts.Expression) =>
  ts.factory.createCallChain(
    expression,
    questionDotToken,
    typeArguments,
    argumentsArray
  );
/**
 * @param typeArguments - Read only Type Arguments for the call ts.Expression
 * @param argumentsArray - Array of arguments for the call ts.Expression
 * @public
 */
export const createCallExpression = (
  typeArguments: readonly ts.TypeNode[] | undefined,
  argumentsArray: readonly ts.Expression[] | undefined
) => (expression: ts.Expression) =>
  ts.factory.createCallExpression(expression, typeArguments, argumentsArray);