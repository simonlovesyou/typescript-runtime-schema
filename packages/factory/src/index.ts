import * as ts from "typescript";

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

export const createArrayBindingPattern = ts.factory.createArrayBindingPattern
export const createArrayTypeNode = ts.factory.createArrayTypeNode
export const createAwaitExpression = ts.factory.createAwaitExpression
export const createBigIntLiteral = ts.factory.createBigIntLiteral
export const createBitwiseNot = ts.factory.createBitwiseNot
export const createBreakStatement = ts.factory.createBreakStatement
export const createCaseBlock = ts.factory.createCaseBlock
export const createCommaListExpression = ts.factory.createCommaListExpression
export const createComputedPropertyName = ts.factory.createComputedPropertyName
export const createContinueStatement = ts.factory.createContinueStatement
export const createDebuggerStatement = ts.factory.createDebuggerStatement
export const createDecorator = ts.factory.createDecorator
export const createDefaultClause = ts.factory.createDefaultClause
export const createDeleteExpression = ts.factory.createDeleteExpression
export const createEmptyStatement = ts.factory.createEmptyStatement
export const createExportDefault = ts.factory.createExportDefault
export const createExpressionStatement = ts.factory.createExpressionStatement
export const createExternalModuleExport = ts.factory.createExternalModuleExport
export const createExternalModuleReference = ts.factory.createExternalModuleReference
export const createFalse = ts.factory.createFalse
export const createIdentifier = ts.factory.createIdentifier
// export const createImmediatelyInvokedArrowFunction = ts.factory.createImmediatelyInvokedArrowFunction
// export const createImmediatelyInvokedFunctionExpression = ts.factory.createImmediatelyInvokedFunctionExpression
export const createInferTypeNode = ts.factory.createInferTypeNode
export const createIntersectionTypeNode = ts.factory.createIntersectionTypeNode
export const createJSDocAllType = ts.factory.createJSDocAllType
export const createJSDocNamepathType = ts.factory.createJSDocNamepathType
export const createJSDocNonNullableType = ts.factory.createJSDocNonNullableType
export const createJSDocNullableType = ts.factory.createJSDocNullableType
export const createJSDocOptionalType = ts.factory.createJSDocOptionalType
export const createJSDocTypeExpression = ts.factory.createJSDocTypeExpression
export const createJSDocUnknownType = ts.factory.createJSDocUnknownType
export const createJSDocVariadicType = ts.factory.createJSDocVariadicType
export const createJsxAttributes = ts.factory.createJsxAttributes
export const createJsxClosingElement = ts.factory.createJsxClosingElement
export const createJsxJsxClosingFragment = ts.factory.createJsxJsxClosingFragment
export const createJsxOpeningFragment = ts.factory.createJsxOpeningFragment
export const createJsxSpreadAttribute = ts.factory.createJsxSpreadAttribute
export const createKeywordTypeNode = ts.factory.createKeywordTypeNode
export const createLogicalNot = ts.factory.createLogicalNot
export const createLoopVariable = ts.factory.createLoopVariable
export const createModifier = ts.factory.createModifier
export const createModifiersFromModifierFlags = ts.factory.createModifiersFromModifierFlags
export const createModuleBlock = ts.factory.createModuleBlock
export const createNamedExports = ts.factory.createNamedExports
export const createNamedImports = ts.factory.createNamedImports
export const createNamespaceExport = ts.factory.createNamespaceExport
export const createNamespaceExportDeclaration = ts.factory.createNamespaceExportDeclaration
export const createNamespaceImport = ts.factory.createNamespaceImport
export const createNonNullChain = ts.factory.createNonNullChain
export const createNonNullExpression = ts.factory.createNonNullExpression
export const createNotEmittedStatement = ts.factory.createNotEmittedStatement
export const createNull = ts.factory.createNull
export const createObjectBindingPattern = ts.factory.createObjectBindingPattern
export const createOmittedExpression = ts.factory.createOmittedExpression
export const createOptionalTypeNode = ts.factory.createOptionalTypeNode
export const createParenthesizedExpression = ts.factory.createParenthesizedExpression
export const createParenthesizedType = ts.factory.createParenthesizedType
export const createPostfixDecrement = ts.factory.createPostfixDecrement
export const createPostfixIncrement = ts.factory.createPostfixIncrement
export const createPrefixDecrement = ts.factory.createPrefixDecrement
export const createPrefixIncrement = ts.factory.createPrefixIncrement
export const createPrefixMinus = ts.factory.createPrefixMinus
export const createPrefixPlus = ts.factory.createPrefixPlus
export const createPrivateIdentifier = ts.factory.createPrivateIdentifier
export const createRegularExpressionLiteral = ts.factory.createRegularExpressionLiteral
export const createRestTypeNode = ts.factory.createRestTypeNode
export const createReturnStatement = ts.factory.createReturnStatement
export const createSemicolonClassElement = ts.factory.createSemicolonClassElement
export const createSpreadAssignment = ts.factory.createSpreadAssignment
export const createSpreadElement = ts.factory.createSpreadElement
export const createSuper = ts.factory.createSuper
export const createThis = ts.factory.createThis
export const createThisTypeNode = ts.factory.createThisTypeNode
export const createThrowStatement = ts.factory.createThrowStatement
export const createToken = ts.factory.createToken
export const createTrue = ts.factory.createTrue
export const createTypeLiteralNode = ts.factory.createTypeLiteralNode
export const createTypeOfExpression = ts.factory.createTypeOfExpression
export const createTypeQueryNode = ts.factory.createTypeQueryNode
export const createUnionTypeNode = ts.factory.createUnionTypeNode
export const createVoidExpression = ts.factory.createVoidExpression
export const createVoidZero = ts.factory.createVoidZero
export const getGeneratedNameForNode = ts.factory.getGeneratedNameForNode
export const createAdd = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createAdd(left, right)
export const createArrayLiteralExpression = (multiLine?: boolean) => (elements: readonly ts.Expression[]): ts.ArrayLiteralExpression => ts.factory.createArrayLiteralExpression(elements, multiLine)
export const createAsExpression = (type: ts.TypeNode) => (expression: ts.Expression): ts.AsExpression => ts.factory.createAsExpression(expression, type)
export function createAssignment(right: ts.Expression): (left: ts.Expression) => ts.AssignmentExpression<ts.EqualsToken>
export function createAssignment(right: ts.Expression): (left: ts.ObjectLiteralExpression | ts.ArrayLiteralExpression) => ts.DestructuringAssignment
export function createAssignment(right: ts.Expression): (left: ts.ObjectLiteralExpression | ts.ArrayLiteralExpression | ts.Expression) => ts.DestructuringAssignment | ts.AssignmentExpression<ts.EqualsToken> {
  return (left: ts.ObjectLiteralExpression | ts.ArrayLiteralExpression | ts.Expression) => {
    if(ts.isObjectLiteralExpression(left) || ts.isArrayLiteralExpression(left)) {
      return ts.factory.createAssignment(left, right)
    }
    return ts.factory.createAssignment(left, right)
  }
}
export const createBitwiseAnd = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createBitwiseAnd(left, right)
export const createBitwiseOr = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createBitwiseOr(left, right)
export const createBitwiseXor = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createBitwiseXor(left, right)
export const createBlock = (multiLine?: boolean) => (statements: readonly ts.Statement[]): ts.Block => ts.factory.createBlock(statements, multiLine)
export const createCaseClause = (statements: readonly ts.Statement[]) => (expression: ts.Expression): ts.CaseClause => ts.factory.createCaseClause(expression, statements)
export const createCatchClause = (block: ts.Block) => (variableDeclaration: string | ts.VariableDeclaration | undefined): ts.CatchClause => ts.factory.createCatchClause(variableDeclaration, block)
export const createComma = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createComma(left, right)
export const createDivide = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createDivide(left, right)
export const createDoStatement = (expression: ts.Expression) => (statement: ts.Statement): ts.DoStatement => ts.factory.createDoStatement(statement, expression)
export const createElementAccessExpression = (index: number | ts.Expression) => (expression: ts.Expression): ts.ElementAccessExpression => ts.factory.createElementAccessExpression(expression, index)
export const createEnumMember = (initializer: ts.Expression) => (name: string | ts.PropertyName): ts.EnumMember => ts.factory.createEnumMember(name, initializer)
export const createEquality = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createEquality(left, right)
export const createExponent = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createExponent(left, right)
export const createExportSpecifier = (name: string | ts.Identifier) => (propertyName: string | ts.Identifier | undefined): ts.ExportSpecifier => ts.factory.createExportSpecifier(propertyName, name)
export const createExpressionWithTypeArguments = (typeArguments: readonly ts.TypeNode[] | undefined) => (expression: ts.Expression): ts.ExpressionWithTypeArguments => ts.factory.createExpressionWithTypeArguments(expression, typeArguments)
export const createGreaterThan = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createGreaterThan(left, right)
export const createGreaterThanEquals = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createGreaterThanEquals(left, right)
export const createImportSpecifier = (name: ts.Identifier) => (propertyName: ts.Identifier | undefined): ts.ImportSpecifier => ts.factory.createImportSpecifier(propertyName, name)
export const createIndexedAccessTypeNode = (indexType: ts.TypeNode) => (objectType: ts.TypeNode): ts.IndexedAccessTypeNode => ts.factory.createIndexedAccessTypeNode(objectType, indexType)
export const createInequality = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createInequality(left, right)
export const createJSDocAuthorTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocAuthorTag => ts.factory.createJSDocAuthorTag(tagName, comment)
export const createJSDocClassTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocClassTag => ts.factory.createJSDocClassTag(tagName, comment)
export const createJSDocComment = (tags: readonly ts.JSDocTag[] | undefined) => (comment?: string | undefined): ts.JSDoc => ts.factory.createJSDocComment(comment, tags)
export const createJSDocDeprecatedTag = (comment?: string) => (tagName: ts.Identifier): ts.JSDocDeprecatedTag => ts.factory.createJSDocDeprecatedTag(tagName, comment)
export const createJSDocFunctionType = (type: ts.TypeNode | undefined) => (parameters: readonly ts.ParameterDeclaration[]): ts.JSDocFunctionType => ts.factory.createJSDocFunctionType(parameters, type)
export const createJSDocPrivateTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocPrivateTag => ts.factory.createJSDocPrivateTag(tagName, comment)
export const createJSDocProtectedTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocProtectedTag => ts.factory.createJSDocProtectedTag(tagName, comment)
export const createJSDocPublicTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocPublicTag => ts.factory.createJSDocPublicTag(tagName, comment)
export const createJSDocReadonlyTag = (comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocReadonlyTag => ts.factory.createJSDocReadonlyTag(tagName, comment)
export const createJSDocTypeLiteral = (isArrayType: boolean) => (jsDocPropertyTags: readonly ts.JSDocPropertyLikeTag[]): ts.JSDocTypeLiteral => ts.factory.createJSDocTypeLiteral(jsDocPropertyTags, isArrayType)
export const createJSDocUnknownTag = (comment?: string) => (tagName: ts.Identifier): ts.JSDocUnknownTag => ts.factory.createJSDocUnknownTag(tagName, comment)
export const createJsxAttribute = (initializer: ts.StringLiteral | ts.JsxExpression | undefined) => (name: ts.Identifier): ts.JsxAttribute => ts.factory.createJsxAttribute(name, initializer)
export const createJsxExpression = (expression: ts.Expression | undefined) => (dotDotDotToken: ts.DotDotDotToken | undefined): ts.JsxExpression => ts.factory.createJsxExpression(dotDotDotToken, expression)
export const createJsxText = (containsOnlyTriviaWhiteSpaces: boolean) => (text: string): ts.JsxText => ts.factory.createJsxText(text, containsOnlyTriviaWhiteSpaces)
export const createLabeledStatement = (statement: ts.Statement) => (label: string | ts.Identifier): ts.LabeledStatement => ts.factory.createLabeledStatement(label, statement)
export const createLeftShift = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createLeftShift(left, right)
export const createLessThan = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createLessThan(left, right)
export const createLessThanEquals = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createLessThanEquals(left, right)
export const createLogicalAnd = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createLogicalAnd(left, right)
export const createLogicalOr = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createLogicalOr(left, right)
export const createModulo = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createModulo(left, right)
export const createMultiply = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createMultiply(left, right)
export const createNodeArray = <T extends ts.Node>(hasTrailingComma: boolean) => (elements: readonly T[]): ts.NodeArray<T> => ts.factory.createNodeArray(elements, hasTrailingComma)
// export const createNoSubstitutionTemplateLiteral = (rawText: string) => (text: string | undefined): ts.NoSubstitutionTemplateLiteral => ts.factory.createNoSubstitutionTemplateLiteral(text, rawText)
// export const createNoSubstitutionTemplateLiteral = (rawText: string) => (text: string): ts.NoSubstitutionTemplateLiteral => ts.factory.createNoSubstitutionTemplateLiteral(text, rawText)
export const createNumericLiteral = (numericLiteralFlags?: ts.TokenFlags) => (value: string | number): ts.NumericLiteral => ts.factory.createNumericLiteral(value, numericLiteralFlags)
export const createObjectLiteralExpression = (multiLine?: boolean) => (properties: readonly ts.ObjectLiteralElementLike[]): ts.ObjectLiteralExpression => ts.factory.createObjectLiteralExpression(properties, multiLine)
export const createPartiallyEmittedExpression = (original: ts.Node) => (expression: ts.Expression): ts.PartiallyEmittedExpression => ts.factory.createPartiallyEmittedExpression(expression, original)
export const createPostfixUnaryExpression = (operator: ts.PostfixUnaryOperator) => (operand: ts.Expression): ts.PostfixUnaryExpression => ts.factory.createPostfixUnaryExpression(operand, operator)
export const createPrefixUnaryExpression = (operand: ts.Expression) => (operator: ts.PrefixUnaryOperator): ts.PrefixUnaryExpression => ts.factory.createPrefixUnaryExpression(operator, operand)
export const createPropertyAccessExpression = (name: string | ts.Identifier | ts.PrivateIdentifier) => (expression: ts.Expression): ts.PropertyAccessExpression => ts.factory.createPropertyAccessExpression(expression, name)
/**
 * This curried function, compared to most other functions, contains the original argument order to the TypeScript factory API
 */
export const createPropertyAssignment = (name: string | ts.PropertyName) => (initializer: ts.Expression): ts.PropertyAssignment => ts.factory.createPropertyAssignment(name, initializer)
export const createQualifiedName = (right: string | ts.Identifier) => (left: ts.EntityName): ts.QualifiedName => ts.factory.createQualifiedName(left, right)
export const createRightShift = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createRightShift(left, right)
export const createShorthandPropertyAssignment = (objectAssignmentInitializer: ts.Expression) => (name: string | ts.Identifier): ts.ShorthandPropertyAssignment => ts.factory.createShorthandPropertyAssignment(name, objectAssignmentInitializer)
export const createStrictEquality = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createStrictEquality(left, right)
export const createStrictInequality = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createStrictInequality(left, right)
export const createStringLiteral = (isSingleQuote?: boolean) => (text: string): ts.StringLiteral => ts.factory.createStringLiteral(text, isSingleQuote)
export const createStringLiteralFromNode = (isSingleQuote?: boolean) => (sourceNode: ts.PropertyNameLiteral): ts.StringLiteral => ts.factory.createStringLiteralFromNode(sourceNode, isSingleQuote)
export const createSubtract = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createSubtract(left, right)
export const createSwitchStatement = (caseBlock: ts.CaseBlock) => (expression: ts.Expression): ts.SwitchStatement => ts.factory.createSwitchStatement(expression, caseBlock)
export const createTemplateExpression = (templateSpans: readonly ts.TemplateSpan[]) => (head: ts.TemplateHead): ts.TemplateExpression => ts.factory.createTemplateExpression(head, templateSpans)
export const createTemplateSpan = (literal: ts.TemplateMiddle | ts.TemplateTail) => (expression: ts.Expression): ts.TemplateSpan => ts.factory.createTemplateSpan(expression, literal)
export const createTypeAssertion = (expression: ts.Expression) => (type: ts.TypeNode): ts.TypeAssertion => ts.factory.createTypeAssertion(type, expression)
export const createTypeOperatorNode = (type: ts.TypeNode) => (operator: ts.SyntaxKind.KeyOfKeyword | ts.SyntaxKind.UniqueKeyword | ts.SyntaxKind.ReadonlyKeyword): ts.TypeOperatorNode => ts.factory.createTypeOperatorNode(operator, type)
export const createTypeReferenceNode = (typeArguments: readonly ts.TypeNode[]) => (typeName: string | ts.EntityName): ts.TypeReferenceNode => ts.factory.createTypeReferenceNode(typeName, typeArguments)
export const createUniqueName = (flags?: ts.GeneratedIdentifierFlags) => (text: string): ts.Identifier => ts.factory.createUniqueName(text, flags)
export const createUnsignedRightShift = (right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createUnsignedRightShift(left, right)
export const createVariableDeclarationList = (flags: ts.NodeFlags) => (declarations: readonly ts.VariableDeclaration[]): ts.VariableDeclarationList => ts.factory.createVariableDeclarationList(declarations, flags)
export const createVariableStatement = (declarationList: ts.VariableDeclarationList | readonly ts.VariableDeclaration[]) => (modifiers: readonly ts.Modifier[] | undefined): ts.VariableStatement => ts.factory.createVariableStatement(modifiers, declarationList)
export const createWhileStatement = (statement: ts.Statement) => (expression: ts.Expression): ts.WhileStatement => ts.factory.createWhileStatement(expression, statement)
export const createWithStatement = (statement: ts.Statement) => (expression: ts.Expression): ts.WithStatement => ts.factory.createWithStatement(expression, statement)
// export const createYieldExpression = (expression: ts.Expression | undefined) => (asteriskToken: undefined): ts.YieldExpression => ts.factory.createYieldExpression(asteriskToken, expression)
// export const createYieldExpression = (expression: ts.Expression) => (asteriskToken: ts.AsteriskToken): ts.YieldExpression => ts.factory.createYieldExpression(asteriskToken, expression)
export const updateArrayBindingPattern = (elements: readonly ts.ArrayBindingElement[]) => (node: ts.ArrayBindingPattern): ts.ArrayBindingPattern => ts.factory.updateArrayBindingPattern(node, elements)
export const updateArrayLiteralExpression = (elements: readonly ts.Expression[]) => (node: ts.ArrayLiteralExpression): ts.ArrayLiteralExpression => ts.factory.updateArrayLiteralExpression(node, elements)
export const updateArrayTypeNode = (elementType: ts.TypeNode) => (node: ts.ArrayTypeNode): ts.ArrayTypeNode => ts.factory.updateArrayTypeNode(node, elementType)
export const updateAwaitExpression = (expression: ts.Expression) => (node: ts.AwaitExpression): ts.AwaitExpression => ts.factory.updateAwaitExpression(node, expression)
export const updateBlock = (statements: readonly ts.Statement[]) => (node: ts.Block): ts.Block => ts.factory.updateBlock(node, statements)
export const updateBreakStatement = (label: ts.Identifier | undefined) => (node: ts.BreakStatement): ts.BreakStatement => ts.factory.updateBreakStatement(node, label)
export const updateCaseBlock = (clauses: readonly ts.CaseOrDefaultClause[]) => (node: ts.CaseBlock): ts.CaseBlock => ts.factory.updateCaseBlock(node, clauses)
export const updateCommaListExpression = (elements: readonly ts.Expression[]) => (node: ts.CommaListExpression): ts.CommaListExpression => ts.factory.updateCommaListExpression(node, elements)
export const updateComputedPropertyName = (expression: ts.Expression) => (node: ts.ComputedPropertyName): ts.ComputedPropertyName => ts.factory.updateComputedPropertyName(node, expression)
export const updateContinueStatement = (label: ts.Identifier | undefined) => (node: ts.ContinueStatement): ts.ContinueStatement => ts.factory.updateContinueStatement(node, label)
export const updateDecorator = (expression: ts.Expression) => (node: ts.Decorator): ts.Decorator => ts.factory.updateDecorator(node, expression)
export const updateDefaultClause = (statements: readonly ts.Statement[]) => (node: ts.DefaultClause): ts.DefaultClause => ts.factory.updateDefaultClause(node, statements)
export const updateDeleteExpression = (expression: ts.Expression) => (node: ts.DeleteExpression): ts.DeleteExpression => ts.factory.updateDeleteExpression(node, expression)
export const updateExpressionStatement = (expression: ts.Expression) => (node: ts.ExpressionStatement): ts.ExpressionStatement => ts.factory.updateExpressionStatement(node, expression)
export const updateExternalModuleReference = (expression: ts.Expression) => (node: ts.ExternalModuleReference): ts.ExternalModuleReference => ts.factory.updateExternalModuleReference(node, expression)
export const updateHeritageClause = (types: readonly ts.ExpressionWithTypeArguments[]) => (node: ts.HeritageClause): ts.HeritageClause => ts.factory.updateHeritageClause(node, types)
export const updateInferTypeNode = (typeParameter: ts.TypeParameterDeclaration) => (node: ts.InferTypeNode): ts.InferTypeNode => ts.factory.updateInferTypeNode(node, typeParameter)
export const updateIntersectionTypeNode = (types: ts.NodeArray<ts.TypeNode>) => (node: ts.IntersectionTypeNode): ts.IntersectionTypeNode => ts.factory.updateIntersectionTypeNode(node, types)
export const updateJSDocNamepathType = (type: ts.TypeNode) => (node: ts.JSDocNamepathType): ts.JSDocNamepathType => ts.factory.updateJSDocNamepathType(node, type)
export const updateJSDocNonNullableType = (type: ts.TypeNode) => (node: ts.JSDocNonNullableType): ts.JSDocNonNullableType => ts.factory.updateJSDocNonNullableType(node, type)
export const updateJSDocNullableType = (type: ts.TypeNode) => (node: ts.JSDocNullableType): ts.JSDocNullableType => ts.factory.updateJSDocNullableType(node, type)
export const updateJSDocOptionalType = (type: ts.TypeNode) => (node: ts.JSDocOptionalType): ts.JSDocOptionalType => ts.factory.updateJSDocOptionalType(node, type)
export const updateJSDocTypeExpression = (type: ts.TypeNode) => (node: ts.JSDocTypeExpression): ts.JSDocTypeExpression => ts.factory.updateJSDocTypeExpression(node, type)
export const updateJSDocVariadicType = (type: ts.TypeNode) => (node: ts.JSDocVariadicType): ts.JSDocVariadicType => ts.factory.updateJSDocVariadicType(node, type)
export const updateJsxAttributes = (properties: readonly ts.JsxAttributeLike[]) => (node: ts.JsxAttributes): ts.JsxAttributes => ts.factory.updateJsxAttributes(node, properties)
export const updateJsxClosingElement = (tagName: ts.JsxTagNameExpression) => (node: ts.JsxClosingElement): ts.JsxClosingElement => ts.factory.updateJsxClosingElement(node, tagName)
export const updateJsxExpression = (expression: ts.Expression | undefined) => (node: ts.JsxExpression): ts.JsxExpression => ts.factory.updateJsxExpression(node, expression)
export const updateJsxSpreadAttribute = (expression: ts.Expression) => (node: ts.JsxSpreadAttribute): ts.JsxSpreadAttribute => ts.factory.updateJsxSpreadAttribute(node, expression)
export const updateLiteralTypeNode = (literal: ts.LiteralTypeNode["literal"]) => (node: ts.LiteralTypeNode): ts.LiteralTypeNode => ts.factory.updateLiteralTypeNode(node, literal)
export const updateMetaProperty = (name: ts.Identifier) => (node: ts.MetaProperty): ts.MetaProperty => ts.factory.updateMetaProperty(node, name)
export const updateModuleBlock = (statements: readonly ts.Statement[]) => (node: ts.ModuleBlock): ts.ModuleBlock => ts.factory.updateModuleBlock(node, statements)
export const updateNamedExports = (elements: readonly ts.ExportSpecifier[]) => (node: ts.NamedExports): ts.NamedExports => ts.factory.updateNamedExports(node, elements)
export const updateNamedImports = (elements: readonly ts.ImportSpecifier[]) => (node: ts.NamedImports): ts.NamedImports => ts.factory.updateNamedImports(node, elements)
export const updateNamespaceExport = (name: ts.Identifier) => (node: ts.NamespaceExport): ts.NamespaceExport => ts.factory.updateNamespaceExport(node, name)
export const updateNamespaceExportDeclaration = (name: ts.Identifier) => (node: ts.NamespaceExportDeclaration): ts.NamespaceExportDeclaration => ts.factory.updateNamespaceExportDeclaration(node, name)
export const updateNamespaceImport = (name: ts.Identifier) => (node: ts.NamespaceImport): ts.NamespaceImport => ts.factory.updateNamespaceImport(node, name)
export const updateNonNullChain = (expression: ts.Expression) => (node: ts.NonNullChain): ts.NonNullChain => ts.factory.updateNonNullChain(node, expression)
export const updateNonNullExpression = (expression: ts.Expression) => (node: ts.NonNullExpression): ts.NonNullExpression => ts.factory.updateNonNullExpression(node, expression)
export const updateObjectBindingPattern = (elements: readonly ts.BindingElement[]) => (node: ts.ObjectBindingPattern): ts.ObjectBindingPattern => ts.factory.updateObjectBindingPattern(node, elements)
export const updateObjectLiteralExpression = (properties: readonly ts.ObjectLiteralElementLike[]) => (node: ts.ObjectLiteralExpression): ts.ObjectLiteralExpression => ts.factory.updateObjectLiteralExpression(node, properties)
export const updateOptionalTypeNode = (type: ts.TypeNode) => (node: ts.OptionalTypeNode): ts.OptionalTypeNode => ts.factory.updateOptionalTypeNode(node, type)
export const updateParenthesizedExpression = (expression: ts.Expression) => (node: ts.ParenthesizedExpression): ts.ParenthesizedExpression => ts.factory.updateParenthesizedExpression(node, expression)
export const updateParenthesizedType = (type: ts.TypeNode) => (node: ts.ParenthesizedTypeNode): ts.ParenthesizedTypeNode => ts.factory.updateParenthesizedType(node, type)
export const updatePartiallyEmittedExpression = (expression: ts.Expression) => (node: ts.PartiallyEmittedExpression): ts.PartiallyEmittedExpression => ts.factory.updatePartiallyEmittedExpression(node, expression)
export const updatePostfixUnaryExpression = (operand: ts.Expression) => (node: ts.PostfixUnaryExpression): ts.PostfixUnaryExpression => ts.factory.updatePostfixUnaryExpression(node, operand)
export const updatePrefixUnaryExpression = (operand: ts.Expression) => (node: ts.PrefixUnaryExpression): ts.PrefixUnaryExpression => ts.factory.updatePrefixUnaryExpression(node, operand)
export const updateRestTypeNode = (type: ts.TypeNode) => (node: ts.RestTypeNode): ts.RestTypeNode => ts.factory.updateRestTypeNode(node, type)
export const updateReturnStatement = (expression: ts.Expression | undefined) => (node: ts.ReturnStatement): ts.ReturnStatement => ts.factory.updateReturnStatement(node, expression)
export const updateSpreadAssignment = (expression: ts.Expression) => (node: ts.SpreadAssignment): ts.SpreadAssignment => ts.factory.updateSpreadAssignment(node, expression)
export const updateSpreadElement = (expression: ts.Expression) => (node: ts.SpreadElement): ts.SpreadElement => ts.factory.updateSpreadElement(node, expression)
export const updateThrowStatement = (expression: ts.Expression) => (node: ts.ThrowStatement): ts.ThrowStatement => ts.factory.updateThrowStatement(node, expression)
export const updateTypeLiteralNode = (members: ts.NodeArray<ts.TypeElement>) => (node: ts.TypeLiteralNode): ts.TypeLiteralNode => ts.factory.updateTypeLiteralNode(node, members)
export const updateTypeOfExpression = (expression: ts.Expression) => (node: ts.TypeOfExpression): ts.TypeOfExpression => ts.factory.updateTypeOfExpression(node, expression)
export const updateTypeOperatorNode = (type: ts.TypeNode) => (node: ts.TypeOperatorNode): ts.TypeOperatorNode => ts.factory.updateTypeOperatorNode(node, type)
export const updateTypeQueryNode = (exprName: ts.EntityName) => (node: ts.TypeQueryNode): ts.TypeQueryNode => ts.factory.updateTypeQueryNode(node, exprName)
export const updateUnionTypeNode = (types: ts.NodeArray<ts.TypeNode>) => (node: ts.UnionTypeNode): ts.UnionTypeNode => ts.factory.updateUnionTypeNode(node, types)
export const updateVariableDeclarationList = (declarations: readonly ts.VariableDeclaration[]) => (node: ts.VariableDeclarationList): ts.VariableDeclarationList => ts.factory.updateVariableDeclarationList(node, declarations)
export const updateVoidExpression = (expression: ts.Expression) => (node: ts.VoidExpression): ts.VoidExpression => ts.factory.updateVoidExpression(node, expression)
export const createBinaryExpression = (operator: ts.BinaryOperator | ts.BinaryOperatorToken, right: ts.Expression) => (left: ts.Expression): ts.BinaryExpression => ts.factory.createBinaryExpression(left, operator, right)
export const createCallExpression = (typeArguments: readonly ts.TypeNode[] | undefined, argumentsArray: readonly ts.Expression[] | undefined) => (expression: ts.Expression): ts.CallExpression => ts.factory.createCallExpression(expression, typeArguments, argumentsArray)
export const createCallSignature = (parameters: readonly ts.ParameterDeclaration[], type: ts.TypeNode | undefined) => (typeParameters: readonly ts.TypeParameterDeclaration[] | undefined): ts.CallSignatureDeclaration => ts.factory.createCallSignature(typeParameters, parameters, type)
export const createConstructorTypeNode = (parameters: readonly ts.ParameterDeclaration[], type: ts.TypeNode) => (typeParameters: readonly ts.TypeParameterDeclaration[] | undefined): ts.ConstructorTypeNode => ts.factory.createConstructorTypeNode(typeParameters, parameters, type)
export const createConstructSignature = (parameters: readonly ts.ParameterDeclaration[], type: ts.TypeNode | undefined) => (typeParameters: readonly ts.TypeParameterDeclaration[] | undefined): ts.ConstructSignatureDeclaration => ts.factory.createConstructSignature(typeParameters, parameters, type)
export const createElementAccessChain = (questionDotToken: ts.QuestionDotToken | undefined, index: number | ts.Expression) => (expression: ts.Expression): ts.ElementAccessChain => ts.factory.createElementAccessChain(expression, questionDotToken, index)
export const createForInStatement = (expression: ts.Expression, statement: ts.Statement) => (initializer: ts.ForInitializer): ts.ForInStatement => ts.factory.createForInStatement(initializer, expression, statement)
export const createFunctionTypeNode = (parameters: readonly ts.ParameterDeclaration[], type: ts.TypeNode) => (typeParameters: readonly ts.TypeParameterDeclaration[] | undefined): ts.FunctionTypeNode => ts.factory.createFunctionTypeNode(typeParameters, parameters, type)
export const createIfStatement = (thenStatement: ts.Statement, elseStatement: ts.Statement) => (expression: ts.Expression): ts.IfStatement => ts.factory.createIfStatement(expression, thenStatement, elseStatement)
export const createImmediatelyInvokedArrowFunction = (param: ts.ParameterDeclaration | undefined, paramValue: ts.Expression | undefined) =>  (statements: readonly ts.Statement[] | undefined): ts.CallExpression => ts.factory.createImmediatelyInvokedArrowFunction(statements, param, paramValue)
export const createImmediatelyInvokedFunctionExpression = (param: ts.ParameterDeclaration, paramValue: ts.Expression) => (statements: readonly ts.Statement[]): ts.CallExpression => ts.factory.createImmediatelyInvokedFunctionExpression(statements, param, paramValue)
export const createImportClause = (name: ts.Identifier | undefined, namedBindings: ts.NamedImportBindings | undefined) => (isTypeOnly: boolean): ts.ImportClause => ts.factory.createImportClause(isTypeOnly, name, namedBindings)
export const createJSDocEnumTag = (typeExpression: ts.JSDocTypeExpression, comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocEnumTag => ts.factory.createJSDocEnumTag(tagName, typeExpression, comment)
export const createJSDocReturnTag = (typeExpression: ts.JSDocTypeExpression, comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocReturnTag => ts.factory.createJSDocReturnTag(tagName, typeExpression, comment)
export const createJSDocSignature = (parameters: readonly ts.JSDocParameterTag[], type: ts.JSDocReturnTag) => (typeParameters: readonly ts.JSDocTemplateTag[] | undefined): ts.JSDocSignature => ts.factory.createJSDocSignature(typeParameters, parameters, type)
export const createJSDocThisTag = (typeExpression: ts.JSDocTypeExpression, comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocThisTag => ts.factory.createJSDocThisTag(tagName, typeExpression, comment)
export const createJSDocTypeTag = (typeExpression: ts.JSDocTypeExpression, comment?: string) => (tagName: ts.Identifier | undefined): ts.JSDocTypeTag => ts.factory.createJSDocTypeTag(tagName, typeExpression, comment)
export const createJsxElement = (children: readonly ts.JsxChild[], closingElement: ts.JsxClosingElement) => (openingElement: ts.JsxOpeningElement): ts.JsxElement => ts.factory.createJsxElement(openingElement, children, closingElement)
export const createJsxFragment = (children: readonly ts.JsxChild[], closingFragment: ts.JsxClosingFragment) => (openingFragment: ts.JsxOpeningFragment): ts.JsxFragment => ts.factory.createJsxFragment(openingFragment, children, closingFragment)
export const createJsxOpeningElement = (typeArguments: readonly ts.TypeNode[] | undefined, attributes: ts.JsxAttributes) => (tagName: ts.JsxTagNameExpression): ts.JsxOpeningElement => ts.factory.createJsxOpeningElement(tagName, typeArguments, attributes)
export const createJsxSelfClosingElement = (typeArguments: readonly ts.TypeNode[] | undefined, attributes: ts.JsxAttributes) => (tagName: ts.JsxTagNameExpression): ts.JsxSelfClosingElement => ts.factory.createJsxSelfClosingElement(tagName, typeArguments, attributes)
export const createNewExpression = (typeArguments: readonly ts.TypeNode[] | undefined, argumentsArray: readonly ts.Expression[] | undefined) => (expression: ts.Expression): ts.NewExpression => ts.factory.createNewExpression(expression, typeArguments, argumentsArray)
export const createPropertyAccessChain = (questionDotToken: ts.QuestionDotToken | undefined, name: string | ts.Identifier | ts.PrivateIdentifier) => (expression: ts.Expression): ts.PropertyAccessChain => ts.factory.createPropertyAccessChain(expression, questionDotToken, name)
export const createSourceFile = (endOfFileToken: ts.EndOfFileToken, flags: ts.NodeFlags) => (statements: readonly ts.Statement[]): ts.SourceFile => ts.factory.createSourceFile(statements, endOfFileToken, flags)
export const createTaggedTemplateExpression = (typeArguments: readonly ts.TypeNode[] | undefined, template: ts.TemplateLiteral) => (tag: ts.Expression): ts.TaggedTemplateExpression => ts.factory.createTaggedTemplateExpression(tag, typeArguments, template)
export function createTemplateHead(rawText: string, templateFlags: ts.TokenFlags): (text: string | undefined) => ts.TemplateHead;
export function createTemplateHead(rawText: string, templateFlags: ts.TokenFlags): (text: undefined) => ts.TemplateHead;
export function createTemplateHead(rawText: string, templateFlags: ts.TokenFlags): (text: string | undefined) => ts.TemplateHead {
  return (text: string | undefined) => {
    if(text === undefined) {
      return ts.factory.createTemplateHead(text, rawText, templateFlags)
    }
    return ts.factory.createTemplateHead(text, rawText, templateFlags)
  }
}
// export const createTemplateMiddle = (rawText: string, templateFlags: ts.TokenFlags) => (text: string | undefined): ts.TemplateMiddle => ts.factory.createTemplateMiddle(text, rawText, templateFlags)
// export const createTemplateMiddle = (rawText: string, templateFlags: ts.TokenFlags) => (text: string): ts.TemplateMiddle => ts.factory.createTemplateMiddle(text, rawText, templateFlags)
// export const createTemplateTail = (rawText: string, templateFlags: ts.TokenFlags) => (text: string | undefined): ts.TemplateTail => ts.factory.createTemplateTail(text, rawText, templateFlags)
// export const createTemplateTail = (rawText: string, templateFlags: ts.TokenFlags) => (text: string): ts.TemplateTail => ts.factory.createTemplateTail(text, rawText, templateFlags)
export const createTryStatement = (catchClause: ts.CatchClause | undefined, finallyBlock: ts.Block | undefined) => (tryBlock: ts.Block): ts.TryStatement => ts.factory.createTryStatement(tryBlock, catchClause, finallyBlock)
export const createTypeParameterDeclaration = (constraint: ts.TypeNode, defaultType: ts.TypeNode) => (name: string | ts.Identifier): ts.TypeParameterDeclaration => ts.factory.createTypeParameterDeclaration(name, constraint, defaultType)
export const createTypePredicateNode = (parameterName: ts.Identifier | ts.ThisTypeNode | string, type: ts.TypeNode | undefined) => (assertsModifier: ts.AssertsKeyword | undefined): ts.TypePredicateNode => ts.factory.createTypePredicateNode(assertsModifier, parameterName, type)
export const restoreOuterExpressions = (innerExpression: ts.Expression, kinds: ts.OuterExpressionKinds) => (outerExpression: ts.Expression | undefined): ts.Expression => ts.factory.restoreOuterExpressions(outerExpression, innerExpression, kinds)
export const updateAsExpression = (expression: ts.Expression, type: ts.TypeNode) => (node: ts.AsExpression): ts.AsExpression => ts.factory.updateAsExpression(node, expression, type)
export const updateCaseClause = (expression: ts.Expression, statements: readonly ts.Statement[]) => (node: ts.CaseClause): ts.CaseClause => ts.factory.updateCaseClause(node, expression, statements)
export const updateCatchClause = (variableDeclaration: ts.VariableDeclaration | undefined, block: ts.Block) => (node: ts.CatchClause): ts.CatchClause => ts.factory.updateCatchClause(node, variableDeclaration, block)
export const updateDoStatement = (statement: ts.Statement, expression: ts.Expression) => (node: ts.DoStatement): ts.DoStatement => ts.factory.updateDoStatement(node, statement, expression)
export const updateElementAccessExpression = (expression: ts.Expression, argumentExpression: ts.Expression) => (node: ts.ElementAccessExpression): ts.ElementAccessExpression => ts.factory.updateElementAccessExpression(node, expression, argumentExpression)
export const updateEnumMember = (name: ts.PropertyName, initializer: ts.Expression | undefined) => (node: ts.EnumMember): ts.EnumMember => ts.factory.updateEnumMember(node, name, initializer)
export const updateExportSpecifier = (propertyName: ts.Identifier | undefined, name: ts.Identifier) => (node: ts.ExportSpecifier): ts.ExportSpecifier => ts.factory.updateExportSpecifier(node, propertyName, name)
export const updateExpressionWithTypeArguments = (expression: ts.Expression, typeArguments: readonly ts.TypeNode[] | undefined) => (node: ts.ExpressionWithTypeArguments): ts.ExpressionWithTypeArguments => ts.factory.updateExpressionWithTypeArguments(node, expression, typeArguments)
export const updateImportSpecifier = (propertyName: ts.Identifier | undefined, name: ts.Identifier) => (node: ts.ImportSpecifier): ts.ImportSpecifier => ts.factory.updateImportSpecifier(node, propertyName, name)
export const updateIndexedAccessTypeNode = (objectType: ts.TypeNode, indexType: ts.TypeNode) => (node: ts.IndexedAccessTypeNode): ts.IndexedAccessTypeNode => ts.factory.updateIndexedAccessTypeNode(node, objectType, indexType)
export const updateJSDocAuthorTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocAuthorTag): ts.JSDocAuthorTag => ts.factory.updateJSDocAuthorTag(node, tagName, comment)
export const updateJSDocClassTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocClassTag): ts.JSDocClassTag => ts.factory.updateJSDocClassTag(node, tagName, comment)
export const updateJSDocComment = (comment?: string | undefined, tags?: readonly ts.JSDocTag[] | undefined) => (node: ts.JSDoc): ts.JSDoc => ts.factory.updateJSDocComment(node, comment, tags)
export const updateJSDocDeprecatedTag = (tagName: ts.Identifier, comment?: string) => (node: ts.JSDocDeprecatedTag): ts.JSDocDeprecatedTag => ts.factory.updateJSDocDeprecatedTag(node, tagName, comment)
export const updateJSDocFunctionType = (parameters: readonly ts.ParameterDeclaration[], type: ts.TypeNode | undefined) => (node: ts.JSDocFunctionType): ts.JSDocFunctionType => ts.factory.updateJSDocFunctionType(node, parameters, type)
export const updateJSDocPrivateTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocPrivateTag): ts.JSDocPrivateTag => ts.factory.updateJSDocPrivateTag(node, tagName, comment)
export const updateJSDocProtectedTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocProtectedTag): ts.JSDocProtectedTag => ts.factory.updateJSDocProtectedTag(node, tagName, comment)
export const updateJSDocPublicTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocPublicTag): ts.JSDocPublicTag => ts.factory.updateJSDocPublicTag(node, tagName, comment)
export const updateJSDocReadonlyTag = (tagName: ts.Identifier | undefined, comment?: string | undefined) => (node: ts.JSDocReadonlyTag): ts.JSDocReadonlyTag => ts.factory.updateJSDocReadonlyTag(node, tagName, comment)
export const updateJSDocTypeLiteral = (jsDocPropertyTags: readonly ts.JSDocPropertyLikeTag[] | undefined, isArrayType: boolean | undefined) => (node: ts.JSDocTypeLiteral): ts.JSDocTypeLiteral => ts.factory.updateJSDocTypeLiteral(node, jsDocPropertyTags, isArrayType)
export const updateJSDocUnknownTag = (tagName: ts.Identifier, comment?: string | undefined) => (node: ts.JSDocUnknownTag): ts.JSDocUnknownTag => ts.factory.updateJSDocUnknownTag(node, tagName, comment)
export const updateJsxAttribute = (name: ts.Identifier, initializer: ts.StringLiteral | ts.JsxExpression | undefined) => (node: ts.JsxAttribute): ts.JsxAttribute => ts.factory.updateJsxAttribute(node, name, initializer)
export const updateJsxText = (text: string, containsOnlyTriviaWhiteSpaces: boolean) => (node: ts.JsxText): ts.JsxText => ts.factory.updateJsxText(node, text, containsOnlyTriviaWhiteSpaces)
export const updateLabeledStatement = (label: ts.Identifier, statement: ts.Statement) => (node: ts.LabeledStatement): ts.LabeledStatement => ts.factory.updateLabeledStatement(node, label, statement)
export const updatePropertyAccessExpression = (expression: ts.Expression, name: ts.Identifier | ts.PrivateIdentifier) => (node: ts.PropertyAccessExpression): ts.PropertyAccessExpression => ts.factory.updatePropertyAccessExpression(node, expression, name)
export const updatePropertyAssignment = (name: ts.PropertyName, initializer: ts.Expression) => (node: ts.PropertyAssignment): ts.PropertyAssignment => ts.factory.updatePropertyAssignment(node, name, initializer)
export const updateQualifiedName = (left: ts.EntityName, right: ts.Identifier) => (node: ts.QualifiedName): ts.QualifiedName => ts.factory.updateQualifiedName(node, left, right)
export const updateShorthandPropertyAssignment = (name: ts.Identifier, objectAssignmentInitializer: ts.Expression | undefined) => (node: ts.ShorthandPropertyAssignment): ts.ShorthandPropertyAssignment => ts.factory.updateShorthandPropertyAssignment(node, name, objectAssignmentInitializer)
export const updateSwitchStatement = (expression: ts.Expression, caseBlock: ts.CaseBlock) => (node: ts.SwitchStatement): ts.SwitchStatement => ts.factory.updateSwitchStatement(node, expression, caseBlock)
export const updateTemplateExpression = (head: ts.TemplateHead, templateSpans: readonly ts.TemplateSpan[]) => (node: ts.TemplateExpression): ts.TemplateExpression => ts.factory.updateTemplateExpression(node, head, templateSpans)
export const updateTemplateSpan = (expression: ts.Expression, literal: ts.TemplateMiddle | ts.TemplateTail) => (node: ts.TemplateSpan): ts.TemplateSpan => ts.factory.updateTemplateSpan(node, expression, literal)
export const updateTypeAssertion = (type: ts.TypeNode, expression: ts.Expression) => (node: ts.TypeAssertion): ts.TypeAssertion => ts.factory.updateTypeAssertion(node, type, expression)
export const updateTypeReferenceNode = (typeName: ts.EntityName, typeArguments: ts.NodeArray<ts.TypeNode> | undefined) => (node: ts.TypeReferenceNode): ts.TypeReferenceNode => ts.factory.updateTypeReferenceNode(node, typeName, typeArguments)
export const updateVariableStatement = (modifiers: readonly ts.Modifier[] | undefined, declarationList: ts.VariableDeclarationList) => (node: ts.VariableStatement): ts.VariableStatement => ts.factory.updateVariableStatement(node, modifiers, declarationList)
export const updateWhileStatement = (expression: ts.Expression, statement: ts.Statement) => (node: ts.WhileStatement): ts.WhileStatement => ts.factory.updateWhileStatement(node, expression, statement)
export const updateWithStatement = (expression: ts.Expression, statement: ts.Statement) => (node: ts.WithStatement): ts.WithStatement => ts.factory.updateWithStatement(node, expression, statement)
export const updateYieldExpression = (asteriskToken: ts.AsteriskToken | undefined, expression: ts.Expression | undefined) => (node: ts.YieldExpression): ts.YieldExpression => ts.factory.updateYieldExpression(node, asteriskToken, expression)