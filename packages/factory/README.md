# @typescript-runtime-schema/factory ![version](https://badgen.net/badge/version/1.0.6/blue)
A wrapper for the typescript factory that provide sensible currying to the API. Built specifically for the @typescript-runtime-schema, so your mileage may vary in terms of API coverage

## Installation
Using npm:
```
npm install @typescript-runtime-schema/factory
```
Using yarn:
```
yarn add @typescript-runtime-schema/factory
```
## API


### Index

#### Variables

* [createArrayBindingPattern](README.md#createarraybindingpattern)
* [createArrayTypeNode](README.md#createarraytypenode)
* [createAwaitExpression](README.md#createawaitexpression)
* [createBigIntLiteral](README.md#createbigintliteral)
* [createBitwiseNot](README.md#createbitwisenot)
* [createBreakStatement](README.md#createbreakstatement)
* [createCaseBlock](README.md#createcaseblock)
* [createCommaListExpression](README.md#createcommalistexpression)
* [createComputedPropertyName](README.md#createcomputedpropertyname)
* [createContinueStatement](README.md#createcontinuestatement)
* [createDebuggerStatement](README.md#createdebuggerstatement)
* [createDecorator](README.md#createdecorator)
* [createDefaultClause](README.md#createdefaultclause)
* [createDeleteExpression](README.md#createdeleteexpression)
* [createEmptyStatement](README.md#createemptystatement)
* [createExportDefault](README.md#createexportdefault)
* [createExpressionStatement](README.md#createexpressionstatement)
* [createExternalModuleExport](README.md#createexternalmoduleexport)
* [createExternalModuleReference](README.md#createexternalmodulereference)
* [createFalse](README.md#createfalse)
* [createIdentifier](README.md#createidentifier)
* [createInferTypeNode](README.md#createinfertypenode)
* [createIntersectionTypeNode](README.md#createintersectiontypenode)
* [createJSDocAllType](README.md#createjsdocalltype)
* [createJSDocNamepathType](README.md#createjsdocnamepathtype)
* [createJSDocNonNullableType](README.md#createjsdocnonnullabletype)
* [createJSDocNullableType](README.md#createjsdocnullabletype)
* [createJSDocOptionalType](README.md#createjsdocoptionaltype)
* [createJSDocTypeExpression](README.md#createjsdoctypeexpression)
* [createJSDocUnknownType](README.md#createjsdocunknowntype)
* [createJSDocVariadicType](README.md#createjsdocvariadictype)
* [createJsxAttributes](README.md#createjsxattributes)
* [createJsxClosingElement](README.md#createjsxclosingelement)
* [createJsxJsxClosingFragment](README.md#createjsxjsxclosingfragment)
* [createJsxOpeningFragment](README.md#createjsxopeningfragment)
* [createJsxSpreadAttribute](README.md#createjsxspreadattribute)
* [createKeywordTypeNode](README.md#createkeywordtypenode)
* [createLogicalNot](README.md#createlogicalnot)
* [createLoopVariable](README.md#createloopvariable)
* [createModifier](README.md#createmodifier)
* [createModifiersFromModifierFlags](README.md#createmodifiersfrommodifierflags)
* [createModuleBlock](README.md#createmoduleblock)
* [createNamedExports](README.md#createnamedexports)
* [createNamedImports](README.md#createnamedimports)
* [createNamespaceExport](README.md#createnamespaceexport)
* [createNamespaceExportDeclaration](README.md#createnamespaceexportdeclaration)
* [createNamespaceImport](README.md#createnamespaceimport)
* [createNonNullChain](README.md#createnonnullchain)
* [createNonNullExpression](README.md#createnonnullexpression)
* [createNotEmittedStatement](README.md#createnotemittedstatement)
* [createNull](README.md#createnull)
* [createObjectBindingPattern](README.md#createobjectbindingpattern)
* [createOmittedExpression](README.md#createomittedexpression)
* [createOptionalTypeNode](README.md#createoptionaltypenode)
* [createParenthesizedExpression](README.md#createparenthesizedexpression)
* [createParenthesizedType](README.md#createparenthesizedtype)
* [createPostfixDecrement](README.md#createpostfixdecrement)
* [createPostfixIncrement](README.md#createpostfixincrement)
* [createPrefixDecrement](README.md#createprefixdecrement)
* [createPrefixIncrement](README.md#createprefixincrement)
* [createPrefixMinus](README.md#createprefixminus)
* [createPrefixPlus](README.md#createprefixplus)
* [createPrivateIdentifier](README.md#createprivateidentifier)
* [createRegularExpressionLiteral](README.md#createregularexpressionliteral)
* [createRestTypeNode](README.md#createresttypenode)
* [createReturnStatement](README.md#createreturnstatement)
* [createSemicolonClassElement](README.md#createsemicolonclasselement)
* [createSpreadAssignment](README.md#createspreadassignment)
* [createSpreadElement](README.md#createspreadelement)
* [createSuper](README.md#createsuper)
* [createThis](README.md#createthis)
* [createThisTypeNode](README.md#createthistypenode)
* [createThrowStatement](README.md#createthrowstatement)
* [createToken](README.md#createtoken)
* [createTrue](README.md#createtrue)
* [createTypeLiteralNode](README.md#createtypeliteralnode)
* [createTypeOfExpression](README.md#createtypeofexpression)
* [createTypeQueryNode](README.md#createtypequerynode)
* [createUnionTypeNode](README.md#createuniontypenode)
* [createVoidExpression](README.md#createvoidexpression)
* [createVoidZero](README.md#createvoidzero)
* [getGeneratedNameForNode](README.md#getgeneratednamefornode)

#### Functions

* [createAdd](README.md#createadd)
* [createArrayLiteralExpression](README.md#createarrayliteralexpression)
* [createArrowFunction](README.md#createarrowfunction)
* [createAsExpression](README.md#createasexpression)
* [createAssignment](README.md#createassignment)
* [createBinaryExpression](README.md#createbinaryexpression)
* [createBindingElement](README.md#createbindingelement)
* [createBitwiseAnd](README.md#createbitwiseand)
* [createBitwiseOr](README.md#createbitwiseor)
* [createBitwiseXor](README.md#createbitwisexor)
* [createBlock](README.md#createblock)
* [createBundle](README.md#createbundle)
* [createCallChain](README.md#createcallchain)
* [createCallExpression](README.md#createcallexpression)
* [createCallSignature](README.md#createcallsignature)
* [createCaseClause](README.md#createcaseclause)
* [createCatchClause](README.md#createcatchclause)
* [createComma](README.md#createcomma)
* [createConstructSignature](README.md#createconstructsignature)
* [createConstructorTypeNode](README.md#createconstructortypenode)
* [createDivide](README.md#createdivide)
* [createDoStatement](README.md#createdostatement)
* [createElementAccessChain](README.md#createelementaccesschain)
* [createElementAccessExpression](README.md#createelementaccessexpression)
* [createEnumMember](README.md#createenummember)
* [createEquality](README.md#createequality)
* [createExponent](README.md#createexponent)
* [createExportSpecifier](README.md#createexportspecifier)
* [createExpressionWithTypeArguments](README.md#createexpressionwithtypearguments)
* [createForInStatement](README.md#createforinstatement)
* [createFunctionTypeNode](README.md#createfunctiontypenode)
* [createGreaterThan](README.md#creategreaterthan)
* [createGreaterThanEquals](README.md#creategreaterthanequals)
* [createIfStatement](README.md#createifstatement)
* [createImmediatelyInvokedArrowFunction](README.md#createimmediatelyinvokedarrowfunction)
* [createImmediatelyInvokedFunctionExpression](README.md#createimmediatelyinvokedfunctionexpression)
* [createImportClause](README.md#createimportclause)
* [createImportSpecifier](README.md#createimportspecifier)
* [createIndexedAccessTypeNode](README.md#createindexedaccesstypenode)
* [createInequality](README.md#createinequality)
* [createJSDocAuthorTag](README.md#createjsdocauthortag)
* [createJSDocClassTag](README.md#createjsdocclasstag)
* [createJSDocComment](README.md#createjsdoccomment)
* [createJSDocDeprecatedTag](README.md#createjsdocdeprecatedtag)
* [createJSDocEnumTag](README.md#createjsdocenumtag)
* [createJSDocFunctionType](README.md#createjsdocfunctiontype)
* [createJSDocPrivateTag](README.md#createjsdocprivatetag)
* [createJSDocProtectedTag](README.md#createjsdocprotectedtag)
* [createJSDocPublicTag](README.md#createjsdocpublictag)
* [createJSDocReadonlyTag](README.md#createjsdocreadonlytag)
* [createJSDocReturnTag](README.md#createjsdocreturntag)
* [createJSDocSignature](README.md#createjsdocsignature)
* [createJSDocThisTag](README.md#createjsdocthistag)
* [createJSDocTypeLiteral](README.md#createjsdoctypeliteral)
* [createJSDocTypeTag](README.md#createjsdoctypetag)
* [createJSDocUnknownTag](README.md#createjsdocunknowntag)
* [createJsxAttribute](README.md#createjsxattribute)
* [createJsxElement](README.md#createjsxelement)
* [createJsxExpression](README.md#createjsxexpression)
* [createJsxFragment](README.md#createjsxfragment)
* [createJsxOpeningElement](README.md#createjsxopeningelement)
* [createJsxSelfClosingElement](README.md#createjsxselfclosingelement)
* [createJsxText](README.md#createjsxtext)
* [createLabeledStatement](README.md#createlabeledstatement)
* [createLeftShift](README.md#createleftshift)
* [createLessThan](README.md#createlessthan)
* [createLessThanEquals](README.md#createlessthanequals)
* [createLogicalAnd](README.md#createlogicaland)
* [createLogicalOr](README.md#createlogicalor)
* [createModulo](README.md#createmodulo)
* [createMultiply](README.md#createmultiply)
* [createNewExpression](README.md#createnewexpression)
* [createNodeArray](README.md#createnodearray)
* [createNumericLiteral](README.md#createnumericliteral)
* [createObjectLiteralExpression](README.md#createobjectliteralexpression)
* [createPartiallyEmittedExpression](README.md#createpartiallyemittedexpression)
* [createPostfixUnaryExpression](README.md#createpostfixunaryexpression)
* [createPrefixUnaryExpression](README.md#createprefixunaryexpression)
* [createPropertyAccessChain](README.md#createpropertyaccesschain)
* [createPropertyAccessExpression](README.md#createpropertyaccessexpression)
* [createPropertyAssignment](README.md#createpropertyassignment)
* [createQualifiedName](README.md#createqualifiedname)
* [createRightShift](README.md#createrightshift)
* [createShorthandPropertyAssignment](README.md#createshorthandpropertyassignment)
* [createSourceFile](README.md#createsourcefile)
* [createStrictEquality](README.md#createstrictequality)
* [createStrictInequality](README.md#createstrictinequality)
* [createStringLiteral](README.md#createstringliteral)
* [createStringLiteralFromNode](README.md#createstringliteralfromnode)
* [createSubtract](README.md#createsubtract)
* [createSwitchStatement](README.md#createswitchstatement)
* [createTaggedTemplateExpression](README.md#createtaggedtemplateexpression)
* [createTemplateExpression](README.md#createtemplateexpression)
* [createTemplateHead](README.md#createtemplatehead)
* [createTemplateSpan](README.md#createtemplatespan)
* [createTryStatement](README.md#createtrystatement)
* [createTypeAssertion](README.md#createtypeassertion)
* [createTypeOperatorNode](README.md#createtypeoperatornode)
* [createTypeParameterDeclaration](README.md#createtypeparameterdeclaration)
* [createTypePredicateNode](README.md#createtypepredicatenode)
* [createTypeReferenceNode](README.md#createtypereferencenode)
* [createUniqueName](README.md#createuniquename)
* [createUnsignedRightShift](README.md#createunsignedrightshift)
* [createVariableDeclarationList](README.md#createvariabledeclarationlist)
* [createVariableStatement](README.md#createvariablestatement)
* [createWhileStatement](README.md#createwhilestatement)
* [createWithStatement](README.md#createwithstatement)
* [restoreOuterExpressions](README.md#restoreouterexpressions)
* [updateArrayBindingPattern](README.md#updatearraybindingpattern)
* [updateArrayLiteralExpression](README.md#updatearrayliteralexpression)
* [updateArrayTypeNode](README.md#updatearraytypenode)
* [updateAsExpression](README.md#updateasexpression)
* [updateAwaitExpression](README.md#updateawaitexpression)
* [updateBlock](README.md#updateblock)
* [updateBreakStatement](README.md#updatebreakstatement)
* [updateCallExpression](README.md#updatecallexpression)
* [updateCaseBlock](README.md#updatecaseblock)
* [updateCaseClause](README.md#updatecaseclause)
* [updateCatchClause](README.md#updatecatchclause)
* [updateCommaListExpression](README.md#updatecommalistexpression)
* [updateComputedPropertyName](README.md#updatecomputedpropertyname)
* [updateContinueStatement](README.md#updatecontinuestatement)
* [updateDecorator](README.md#updatedecorator)
* [updateDefaultClause](README.md#updatedefaultclause)
* [updateDeleteExpression](README.md#updatedeleteexpression)
* [updateDoStatement](README.md#updatedostatement)
* [updateElementAccessExpression](README.md#updateelementaccessexpression)
* [updateEnumMember](README.md#updateenummember)
* [updateExportSpecifier](README.md#updateexportspecifier)
* [updateExpressionStatement](README.md#updateexpressionstatement)
* [updateExpressionWithTypeArguments](README.md#updateexpressionwithtypearguments)
* [updateExternalModuleReference](README.md#updateexternalmodulereference)
* [updateHeritageClause](README.md#updateheritageclause)
* [updateImportSpecifier](README.md#updateimportspecifier)
* [updateIndexedAccessTypeNode](README.md#updateindexedaccesstypenode)
* [updateInferTypeNode](README.md#updateinfertypenode)
* [updateIntersectionTypeNode](README.md#updateintersectiontypenode)
* [updateJSDocAuthorTag](README.md#updatejsdocauthortag)
* [updateJSDocClassTag](README.md#updatejsdocclasstag)
* [updateJSDocComment](README.md#updatejsdoccomment)
* [updateJSDocDeprecatedTag](README.md#updatejsdocdeprecatedtag)
* [updateJSDocFunctionType](README.md#updatejsdocfunctiontype)
* [updateJSDocNamepathType](README.md#updatejsdocnamepathtype)
* [updateJSDocNonNullableType](README.md#updatejsdocnonnullabletype)
* [updateJSDocNullableType](README.md#updatejsdocnullabletype)
* [updateJSDocOptionalType](README.md#updatejsdocoptionaltype)
* [updateJSDocPrivateTag](README.md#updatejsdocprivatetag)
* [updateJSDocProtectedTag](README.md#updatejsdocprotectedtag)
* [updateJSDocPublicTag](README.md#updatejsdocpublictag)
* [updateJSDocReadonlyTag](README.md#updatejsdocreadonlytag)
* [updateJSDocTypeExpression](README.md#updatejsdoctypeexpression)
* [updateJSDocTypeLiteral](README.md#updatejsdoctypeliteral)
* [updateJSDocUnknownTag](README.md#updatejsdocunknowntag)
* [updateJSDocVariadicType](README.md#updatejsdocvariadictype)
* [updateJsxAttribute](README.md#updatejsxattribute)
* [updateJsxAttributes](README.md#updatejsxattributes)
* [updateJsxClosingElement](README.md#updatejsxclosingelement)
* [updateJsxExpression](README.md#updatejsxexpression)
* [updateJsxSpreadAttribute](README.md#updatejsxspreadattribute)
* [updateJsxText](README.md#updatejsxtext)
* [updateLabeledStatement](README.md#updatelabeledstatement)
* [updateLiteralTypeNode](README.md#updateliteraltypenode)
* [updateMetaProperty](README.md#updatemetaproperty)
* [updateModuleBlock](README.md#updatemoduleblock)
* [updateNamedExports](README.md#updatenamedexports)
* [updateNamedImports](README.md#updatenamedimports)
* [updateNamespaceExport](README.md#updatenamespaceexport)
* [updateNamespaceExportDeclaration](README.md#updatenamespaceexportdeclaration)
* [updateNamespaceImport](README.md#updatenamespaceimport)
* [updateNonNullChain](README.md#updatenonnullchain)
* [updateNonNullExpression](README.md#updatenonnullexpression)
* [updateObjectBindingPattern](README.md#updateobjectbindingpattern)
* [updateObjectLiteralExpression](README.md#updateobjectliteralexpression)
* [updateOptionalTypeNode](README.md#updateoptionaltypenode)
* [updateParenthesizedExpression](README.md#updateparenthesizedexpression)
* [updateParenthesizedType](README.md#updateparenthesizedtype)
* [updatePartiallyEmittedExpression](README.md#updatepartiallyemittedexpression)
* [updatePostfixUnaryExpression](README.md#updatepostfixunaryexpression)
* [updatePrefixUnaryExpression](README.md#updateprefixunaryexpression)
* [updatePropertyAccessExpression](README.md#updatepropertyaccessexpression)
* [updatePropertyAssignment](README.md#updatepropertyassignment)
* [updateQualifiedName](README.md#updatequalifiedname)
* [updateRestTypeNode](README.md#updateresttypenode)
* [updateReturnStatement](README.md#updatereturnstatement)
* [updateShorthandPropertyAssignment](README.md#updateshorthandpropertyassignment)
* [updateSpreadAssignment](README.md#updatespreadassignment)
* [updateSpreadElement](README.md#updatespreadelement)
* [updateSwitchStatement](README.md#updateswitchstatement)
* [updateTemplateExpression](README.md#updatetemplateexpression)
* [updateTemplateSpan](README.md#updatetemplatespan)
* [updateThrowStatement](README.md#updatethrowstatement)
* [updateTypeAssertion](README.md#updatetypeassertion)
* [updateTypeLiteralNode](README.md#updatetypeliteralnode)
* [updateTypeOfExpression](README.md#updatetypeofexpression)
* [updateTypeOperatorNode](README.md#updatetypeoperatornode)
* [updateTypeQueryNode](README.md#updatetypequerynode)
* [updateTypeReferenceNode](README.md#updatetypereferencenode)
* [updateUnionTypeNode](README.md#updateuniontypenode)
* [updateVariableDeclarationList](README.md#updatevariabledeclarationlist)
* [updateVariableStatement](README.md#updatevariablestatement)
* [updateVoidExpression](README.md#updatevoidexpression)
* [updateWhileStatement](README.md#updatewhilestatement)
* [updateWithStatement](README.md#updatewithstatement)
* [updateYieldExpression](README.md#updateyieldexpression)

### Variables

#### createArrayBindingPattern

• `Const` **createArrayBindingPattern**: createArrayBindingPattern = ts.factory.createArrayBindingPattern

*Defined in [src/index.ts:71](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L71)*

___

#### createArrayTypeNode

• `Const` **createArrayTypeNode**: createArrayTypeNode = ts.factory.createArrayTypeNode

*Defined in [src/index.ts:72](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L72)*

___

#### createAwaitExpression

• `Const` **createAwaitExpression**: createAwaitExpression = ts.factory.createAwaitExpression

*Defined in [src/index.ts:73](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L73)*

___

#### createBigIntLiteral

• `Const` **createBigIntLiteral**: createBigIntLiteral = ts.factory.createBigIntLiteral

*Defined in [src/index.ts:74](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L74)*

___

#### createBitwiseNot

• `Const` **createBitwiseNot**: createBitwiseNot = ts.factory.createBitwiseNot

*Defined in [src/index.ts:75](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L75)*

___

#### createBreakStatement

• `Const` **createBreakStatement**: createBreakStatement = ts.factory.createBreakStatement

*Defined in [src/index.ts:76](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L76)*

___

#### createCaseBlock

• `Const` **createCaseBlock**: createCaseBlock = ts.factory.createCaseBlock

*Defined in [src/index.ts:77](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L77)*

___

#### createCommaListExpression

• `Const` **createCommaListExpression**: createCommaListExpression = ts.factory.createCommaListExpression

*Defined in [src/index.ts:78](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L78)*

___

#### createComputedPropertyName

• `Const` **createComputedPropertyName**: createComputedPropertyName = ts.factory.createComputedPropertyName

*Defined in [src/index.ts:79](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L79)*

___

#### createContinueStatement

• `Const` **createContinueStatement**: createContinueStatement = ts.factory.createContinueStatement

*Defined in [src/index.ts:80](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L80)*

___

#### createDebuggerStatement

• `Const` **createDebuggerStatement**: createDebuggerStatement = ts.factory.createDebuggerStatement

*Defined in [src/index.ts:81](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L81)*

___

#### createDecorator

• `Const` **createDecorator**: createDecorator = ts.factory.createDecorator

*Defined in [src/index.ts:82](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L82)*

___

#### createDefaultClause

• `Const` **createDefaultClause**: createDefaultClause = ts.factory.createDefaultClause

*Defined in [src/index.ts:83](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L83)*

___

#### createDeleteExpression

• `Const` **createDeleteExpression**: createDeleteExpression = ts.factory.createDeleteExpression

*Defined in [src/index.ts:84](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L84)*

___

#### createEmptyStatement

• `Const` **createEmptyStatement**: createEmptyStatement = ts.factory.createEmptyStatement

*Defined in [src/index.ts:85](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L85)*

___

#### createExportDefault

• `Const` **createExportDefault**: createExportDefault = ts.factory.createExportDefault

*Defined in [src/index.ts:86](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L86)*

___

#### createExpressionStatement

• `Const` **createExpressionStatement**: createExpressionStatement = ts.factory.createExpressionStatement

*Defined in [src/index.ts:87](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L87)*

___

#### createExternalModuleExport

• `Const` **createExternalModuleExport**: createExternalModuleExport = ts.factory.createExternalModuleExport

*Defined in [src/index.ts:88](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L88)*

___

#### createExternalModuleReference

• `Const` **createExternalModuleReference**: createExternalModuleReference = ts.factory.createExternalModuleReference

*Defined in [src/index.ts:89](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L89)*

___

#### createFalse

• `Const` **createFalse**: createFalse = ts.factory.createFalse

*Defined in [src/index.ts:90](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L90)*

___

#### createIdentifier

• `Const` **createIdentifier**: createIdentifier = ts.factory.createIdentifier

*Defined in [src/index.ts:91](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L91)*

___

#### createInferTypeNode

• `Const` **createInferTypeNode**: createInferTypeNode = ts.factory.createInferTypeNode

*Defined in [src/index.ts:94](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L94)*

___

#### createIntersectionTypeNode

• `Const` **createIntersectionTypeNode**: createIntersectionTypeNode = ts.factory.createIntersectionTypeNode

*Defined in [src/index.ts:95](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L95)*

___

#### createJSDocAllType

• `Const` **createJSDocAllType**: createJSDocAllType = ts.factory.createJSDocAllType

*Defined in [src/index.ts:96](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L96)*

___

#### createJSDocNamepathType

• `Const` **createJSDocNamepathType**: createJSDocNamepathType = ts.factory.createJSDocNamepathType

*Defined in [src/index.ts:97](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L97)*

___

#### createJSDocNonNullableType

• `Const` **createJSDocNonNullableType**: createJSDocNonNullableType = ts.factory.createJSDocNonNullableType

*Defined in [src/index.ts:98](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L98)*

___

#### createJSDocNullableType

• `Const` **createJSDocNullableType**: createJSDocNullableType = ts.factory.createJSDocNullableType

*Defined in [src/index.ts:99](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L99)*

___

#### createJSDocOptionalType

• `Const` **createJSDocOptionalType**: createJSDocOptionalType = ts.factory.createJSDocOptionalType

*Defined in [src/index.ts:100](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L100)*

___

#### createJSDocTypeExpression

• `Const` **createJSDocTypeExpression**: createJSDocTypeExpression = ts.factory.createJSDocTypeExpression

*Defined in [src/index.ts:101](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L101)*

___

#### createJSDocUnknownType

• `Const` **createJSDocUnknownType**: createJSDocUnknownType = ts.factory.createJSDocUnknownType

*Defined in [src/index.ts:102](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L102)*

___

#### createJSDocVariadicType

• `Const` **createJSDocVariadicType**: createJSDocVariadicType = ts.factory.createJSDocVariadicType

*Defined in [src/index.ts:103](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L103)*

___

#### createJsxAttributes

• `Const` **createJsxAttributes**: createJsxAttributes = ts.factory.createJsxAttributes

*Defined in [src/index.ts:104](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L104)*

___

#### createJsxClosingElement

• `Const` **createJsxClosingElement**: createJsxClosingElement = ts.factory.createJsxClosingElement

*Defined in [src/index.ts:105](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L105)*

___

#### createJsxJsxClosingFragment

• `Const` **createJsxJsxClosingFragment**: createJsxJsxClosingFragment = ts.factory.createJsxJsxClosingFragment

*Defined in [src/index.ts:106](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L106)*

___

#### createJsxOpeningFragment

• `Const` **createJsxOpeningFragment**: createJsxOpeningFragment = ts.factory.createJsxOpeningFragment

*Defined in [src/index.ts:107](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L107)*

___

#### createJsxSpreadAttribute

• `Const` **createJsxSpreadAttribute**: createJsxSpreadAttribute = ts.factory.createJsxSpreadAttribute

*Defined in [src/index.ts:108](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L108)*

___

#### createKeywordTypeNode

• `Const` **createKeywordTypeNode**: createKeywordTypeNode = ts.factory.createKeywordTypeNode

*Defined in [src/index.ts:109](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L109)*

___

#### createLogicalNot

• `Const` **createLogicalNot**: createLogicalNot = ts.factory.createLogicalNot

*Defined in [src/index.ts:110](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L110)*

___

#### createLoopVariable

• `Const` **createLoopVariable**: createLoopVariable = ts.factory.createLoopVariable

*Defined in [src/index.ts:111](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L111)*

___

#### createModifier

• `Const` **createModifier**: createModifier = ts.factory.createModifier

*Defined in [src/index.ts:112](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L112)*

___

#### createModifiersFromModifierFlags

• `Const` **createModifiersFromModifierFlags**: createModifiersFromModifierFlags = ts.factory.createModifiersFromModifierFlags

*Defined in [src/index.ts:113](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L113)*

___

#### createModuleBlock

• `Const` **createModuleBlock**: createModuleBlock = ts.factory.createModuleBlock

*Defined in [src/index.ts:114](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L114)*

___

#### createNamedExports

• `Const` **createNamedExports**: createNamedExports = ts.factory.createNamedExports

*Defined in [src/index.ts:115](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L115)*

___

#### createNamedImports

• `Const` **createNamedImports**: createNamedImports = ts.factory.createNamedImports

*Defined in [src/index.ts:116](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L116)*

___

#### createNamespaceExport

• `Const` **createNamespaceExport**: createNamespaceExport = ts.factory.createNamespaceExport

*Defined in [src/index.ts:117](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L117)*

___

#### createNamespaceExportDeclaration

• `Const` **createNamespaceExportDeclaration**: createNamespaceExportDeclaration = ts.factory.createNamespaceExportDeclaration

*Defined in [src/index.ts:118](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L118)*

___

#### createNamespaceImport

• `Const` **createNamespaceImport**: createNamespaceImport = ts.factory.createNamespaceImport

*Defined in [src/index.ts:119](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L119)*

___

#### createNonNullChain

• `Const` **createNonNullChain**: createNonNullChain = ts.factory.createNonNullChain

*Defined in [src/index.ts:120](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L120)*

___

#### createNonNullExpression

• `Const` **createNonNullExpression**: createNonNullExpression = ts.factory.createNonNullExpression

*Defined in [src/index.ts:121](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L121)*

___

#### createNotEmittedStatement

• `Const` **createNotEmittedStatement**: createNotEmittedStatement = ts.factory.createNotEmittedStatement

*Defined in [src/index.ts:122](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L122)*

___

#### createNull

• `Const` **createNull**: createNull = ts.factory.createNull

*Defined in [src/index.ts:123](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L123)*

___

#### createObjectBindingPattern

• `Const` **createObjectBindingPattern**: createObjectBindingPattern = ts.factory.createObjectBindingPattern

*Defined in [src/index.ts:124](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L124)*

___

#### createOmittedExpression

• `Const` **createOmittedExpression**: createOmittedExpression = ts.factory.createOmittedExpression

*Defined in [src/index.ts:125](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L125)*

___

#### createOptionalTypeNode

• `Const` **createOptionalTypeNode**: createOptionalTypeNode = ts.factory.createOptionalTypeNode

*Defined in [src/index.ts:126](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L126)*

___

#### createParenthesizedExpression

• `Const` **createParenthesizedExpression**: createParenthesizedExpression = ts.factory.createParenthesizedExpression

*Defined in [src/index.ts:127](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L127)*

___

#### createParenthesizedType

• `Const` **createParenthesizedType**: createParenthesizedType = ts.factory.createParenthesizedType

*Defined in [src/index.ts:128](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L128)*

___

#### createPostfixDecrement

• `Const` **createPostfixDecrement**: createPostfixDecrement = ts.factory.createPostfixDecrement

*Defined in [src/index.ts:129](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L129)*

___

#### createPostfixIncrement

• `Const` **createPostfixIncrement**: createPostfixIncrement = ts.factory.createPostfixIncrement

*Defined in [src/index.ts:130](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L130)*

___

#### createPrefixDecrement

• `Const` **createPrefixDecrement**: createPrefixDecrement = ts.factory.createPrefixDecrement

*Defined in [src/index.ts:131](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L131)*

___

#### createPrefixIncrement

• `Const` **createPrefixIncrement**: createPrefixIncrement = ts.factory.createPrefixIncrement

*Defined in [src/index.ts:132](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L132)*

___

#### createPrefixMinus

• `Const` **createPrefixMinus**: createPrefixMinus = ts.factory.createPrefixMinus

*Defined in [src/index.ts:133](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L133)*

___

#### createPrefixPlus

• `Const` **createPrefixPlus**: createPrefixPlus = ts.factory.createPrefixPlus

*Defined in [src/index.ts:134](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L134)*

___

#### createPrivateIdentifier

• `Const` **createPrivateIdentifier**: createPrivateIdentifier = ts.factory.createPrivateIdentifier

*Defined in [src/index.ts:135](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L135)*

___

#### createRegularExpressionLiteral

• `Const` **createRegularExpressionLiteral**: createRegularExpressionLiteral = ts.factory.createRegularExpressionLiteral

*Defined in [src/index.ts:136](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L136)*

___

#### createRestTypeNode

• `Const` **createRestTypeNode**: createRestTypeNode = ts.factory.createRestTypeNode

*Defined in [src/index.ts:137](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L137)*

___

#### createReturnStatement

• `Const` **createReturnStatement**: createReturnStatement = ts.factory.createReturnStatement

*Defined in [src/index.ts:138](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L138)*

___

#### createSemicolonClassElement

• `Const` **createSemicolonClassElement**: createSemicolonClassElement = ts.factory.createSemicolonClassElement

*Defined in [src/index.ts:139](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L139)*

___

#### createSpreadAssignment

• `Const` **createSpreadAssignment**: createSpreadAssignment = ts.factory.createSpreadAssignment

*Defined in [src/index.ts:140](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L140)*

___

#### createSpreadElement

• `Const` **createSpreadElement**: createSpreadElement = ts.factory.createSpreadElement

*Defined in [src/index.ts:141](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L141)*

___

#### createSuper

• `Const` **createSuper**: createSuper = ts.factory.createSuper

*Defined in [src/index.ts:142](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L142)*

___

#### createThis

• `Const` **createThis**: createThis = ts.factory.createThis

*Defined in [src/index.ts:143](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L143)*

___

#### createThisTypeNode

• `Const` **createThisTypeNode**: createThisTypeNode = ts.factory.createThisTypeNode

*Defined in [src/index.ts:144](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L144)*

___

#### createThrowStatement

• `Const` **createThrowStatement**: createThrowStatement = ts.factory.createThrowStatement

*Defined in [src/index.ts:145](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L145)*

___

#### createToken

• `Const` **createToken**: createToken = ts.factory.createToken

*Defined in [src/index.ts:146](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L146)*

___

#### createTrue

• `Const` **createTrue**: createTrue = ts.factory.createTrue

*Defined in [src/index.ts:147](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L147)*

___

#### createTypeLiteralNode

• `Const` **createTypeLiteralNode**: createTypeLiteralNode = ts.factory.createTypeLiteralNode

*Defined in [src/index.ts:148](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L148)*

___

#### createTypeOfExpression

• `Const` **createTypeOfExpression**: createTypeOfExpression = ts.factory.createTypeOfExpression

*Defined in [src/index.ts:149](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L149)*

___

#### createTypeQueryNode

• `Const` **createTypeQueryNode**: createTypeQueryNode = ts.factory.createTypeQueryNode

*Defined in [src/index.ts:150](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L150)*

___

#### createUnionTypeNode

• `Const` **createUnionTypeNode**: createUnionTypeNode = ts.factory.createUnionTypeNode

*Defined in [src/index.ts:151](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L151)*

___

#### createVoidExpression

• `Const` **createVoidExpression**: createVoidExpression = ts.factory.createVoidExpression

*Defined in [src/index.ts:152](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L152)*

___

#### createVoidZero

• `Const` **createVoidZero**: createVoidZero = ts.factory.createVoidZero

*Defined in [src/index.ts:153](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L153)*

___

#### getGeneratedNameForNode

• `Const` **getGeneratedNameForNode**: getGeneratedNameForNode = ts.factory.getGeneratedNameForNode

*Defined in [src/index.ts:154](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L154)*

### Functions

#### createAdd

▸ `Const`**createAdd**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:155](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L155)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createArrayLiteralExpression

▸ `Const`**createArrayLiteralExpression**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:156](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L156)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createArrowFunction

▸ `Const`**createArrowFunction**(`body`: ts.ConciseBody): (Anonymous function)

*Defined in [src/index.ts:20](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L20)*

##### Parameters:

Name | Type |
------ | ------ |
`body` | ts.ConciseBody |

**Returns:** (Anonymous function)

___

#### createAsExpression

▸ `Const`**createAsExpression**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:157](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L157)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### createAssignment

▸ **createAssignment**(`right`: Expression): function

*Defined in [src/index.ts:158](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L158)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** function

▸ **createAssignment**(`right`: Expression): function

*Defined in [src/index.ts:159](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L159)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** function

___

#### createBinaryExpression

▸ `Const`**createBinaryExpression**(`operator`: ts.BinaryOperator \| ts.BinaryOperatorToken, `right`: Expression): (Anonymous function)

*Defined in [src/index.ts:303](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L303)*

##### Parameters:

Name | Type |
------ | ------ |
`operator` | ts.BinaryOperator \| ts.BinaryOperatorToken |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBindingElement

▸ `Const`**createBindingElement**(`dotDotDotToken`: ts.DotDotDotToken \| undefined, `propertyName`: string \| ts.PropertyName \| undefined, `name`: string \| ts.BindingName): (Anonymous function)

*Defined in [src/index.ts:38](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L38)*

##### Parameters:

Name | Type |
------ | ------ |
`dotDotDotToken` | ts.DotDotDotToken \| undefined |
`propertyName` | string \| ts.PropertyName \| undefined |
`name` | string \| ts.BindingName |

**Returns:** (Anonymous function)

___

#### createBitwiseAnd

▸ `Const`**createBitwiseAnd**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:168](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L168)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBitwiseOr

▸ `Const`**createBitwiseOr**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:169](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L169)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBitwiseXor

▸ `Const`**createBitwiseXor**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:170](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L170)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBlock

▸ `Const`**createBlock**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:171](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L171)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createBundle

▸ `Const`**createBundle**(`prepends?`: readonly (UnparsedSource \| InputFiles)[]): (Anonymous function)

*Defined in [src/index.ts:52](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L52)*

##### Parameters:

Name | Type |
------ | ------ |
`prepends?` | readonly (UnparsedSource \| InputFiles)[] |

**Returns:** (Anonymous function)

___

#### createCallChain

▸ `Const`**createCallChain**(`questionDotToken`: ts.QuestionDotToken \| undefined, `typeArguments`: readonly TypeNode[] \| undefined, `argumentsArray`: readonly Expression[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:59](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L59)*

##### Parameters:

Name | Type |
------ | ------ |
`questionDotToken` | ts.QuestionDotToken \| undefined |
`typeArguments` | readonly TypeNode[] \| undefined |
`argumentsArray` | readonly Expression[] \| undefined |

**Returns:** (Anonymous function)

___

#### createCallExpression

▸ `Const`**createCallExpression**(`typeArguments`: readonly TypeNode[] \| undefined, `argumentsArray`: readonly Expression[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:304](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L304)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |
`argumentsArray` | readonly Expression[] \| undefined |

**Returns:** (Anonymous function)

___

#### createCallSignature

▸ `Const`**createCallSignature**(`parameters`: readonly ParameterDeclaration[], `type`: TypeNode \| undefined): (Anonymous function)

*Defined in [src/index.ts:305](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L305)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly ParameterDeclaration[] |
`type` | TypeNode \| undefined |

**Returns:** (Anonymous function)

___

#### createCaseClause

▸ `Const`**createCaseClause**(`statements`: readonly Statement[]): (Anonymous function)

*Defined in [src/index.ts:172](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L172)*

##### Parameters:

Name | Type |
------ | ------ |
`statements` | readonly Statement[] |

**Returns:** (Anonymous function)

___

#### createCatchClause

▸ `Const`**createCatchClause**(`block`: Block): (Anonymous function)

*Defined in [src/index.ts:173](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L173)*

##### Parameters:

Name | Type |
------ | ------ |
`block` | Block |

**Returns:** (Anonymous function)

___

#### createComma

▸ `Const`**createComma**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:174](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L174)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createConstructSignature

▸ `Const`**createConstructSignature**(`parameters`: readonly ParameterDeclaration[], `type`: TypeNode \| undefined): (Anonymous function)

*Defined in [src/index.ts:307](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L307)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly ParameterDeclaration[] |
`type` | TypeNode \| undefined |

**Returns:** (Anonymous function)

___

#### createConstructorTypeNode

▸ `Const`**createConstructorTypeNode**(`parameters`: readonly ParameterDeclaration[], `type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:306](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L306)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly ParameterDeclaration[] |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### createDivide

▸ `Const`**createDivide**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:175](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L175)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createDoStatement

▸ `Const`**createDoStatement**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:176](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L176)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### createElementAccessChain

▸ `Const`**createElementAccessChain**(`questionDotToken`: ts.QuestionDotToken \| undefined, `index`: number \| Expression): (Anonymous function)

*Defined in [src/index.ts:308](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L308)*

##### Parameters:

Name | Type |
------ | ------ |
`questionDotToken` | ts.QuestionDotToken \| undefined |
`index` | number \| Expression |

**Returns:** (Anonymous function)

___

#### createElementAccessExpression

▸ `Const`**createElementAccessExpression**(`index`: number \| Expression): (Anonymous function)

*Defined in [src/index.ts:177](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L177)*

##### Parameters:

Name | Type |
------ | ------ |
`index` | number \| Expression |

**Returns:** (Anonymous function)

___

#### createEnumMember

▸ `Const`**createEnumMember**(`initializer`: Expression): (Anonymous function)

*Defined in [src/index.ts:178](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L178)*

##### Parameters:

Name | Type |
------ | ------ |
`initializer` | Expression |

**Returns:** (Anonymous function)

___

#### createEquality

▸ `Const`**createEquality**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:179](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L179)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createExponent

▸ `Const`**createExponent**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:180](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L180)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createExportSpecifier

▸ `Const`**createExportSpecifier**(`name`: string \| Identifier): (Anonymous function)

*Defined in [src/index.ts:181](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L181)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | string \| Identifier |

**Returns:** (Anonymous function)

___

#### createExpressionWithTypeArguments

▸ `Const`**createExpressionWithTypeArguments**(`typeArguments`: readonly TypeNode[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:182](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L182)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |

**Returns:** (Anonymous function)

___

#### createForInStatement

▸ `Const`**createForInStatement**(`expression`: Expression, `statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:309](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L309)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### createFunctionTypeNode

▸ `Const`**createFunctionTypeNode**(`parameters`: readonly ParameterDeclaration[], `type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:310](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L310)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly ParameterDeclaration[] |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### createGreaterThan

▸ `Const`**createGreaterThan**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:183](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L183)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createGreaterThanEquals

▸ `Const`**createGreaterThanEquals**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:184](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L184)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createIfStatement

▸ `Const`**createIfStatement**(`thenStatement`: Statement, `elseStatement`: Statement): (Anonymous function)

*Defined in [src/index.ts:311](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L311)*

##### Parameters:

Name | Type |
------ | ------ |
`thenStatement` | Statement |
`elseStatement` | Statement |

**Returns:** (Anonymous function)

___

#### createImmediatelyInvokedArrowFunction

▸ `Const`**createImmediatelyInvokedArrowFunction**(`param`: ParameterDeclaration \| undefined, `paramValue`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:312](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L312)*

##### Parameters:

Name | Type |
------ | ------ |
`param` | ParameterDeclaration \| undefined |
`paramValue` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### createImmediatelyInvokedFunctionExpression

▸ `Const`**createImmediatelyInvokedFunctionExpression**(`param`: ParameterDeclaration, `paramValue`: Expression): (Anonymous function)

*Defined in [src/index.ts:313](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L313)*

##### Parameters:

Name | Type |
------ | ------ |
`param` | ParameterDeclaration |
`paramValue` | Expression |

**Returns:** (Anonymous function)

___

#### createImportClause

▸ `Const`**createImportClause**(`name`: Identifier \| undefined, `namedBindings`: ts.NamedImportBindings \| undefined): (Anonymous function)

*Defined in [src/index.ts:314](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L314)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier \| undefined |
`namedBindings` | ts.NamedImportBindings \| undefined |

**Returns:** (Anonymous function)

___

#### createImportSpecifier

▸ `Const`**createImportSpecifier**(`name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:185](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L185)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### createIndexedAccessTypeNode

▸ `Const`**createIndexedAccessTypeNode**(`indexType`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:186](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L186)*

##### Parameters:

Name | Type |
------ | ------ |
`indexType` | TypeNode |

**Returns:** (Anonymous function)

___

#### createInequality

▸ `Const`**createInequality**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:187](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L187)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createJSDocAuthorTag

▸ `Const`**createJSDocAuthorTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:188](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L188)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocClassTag

▸ `Const`**createJSDocClassTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:189](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L189)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocComment

▸ `Const`**createJSDocComment**(`tags`: readonly JSDocTag[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:190](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L190)*

##### Parameters:

Name | Type |
------ | ------ |
`tags` | readonly JSDocTag[] \| undefined |

**Returns:** (Anonymous function)

___

#### createJSDocDeprecatedTag

▸ `Const`**createJSDocDeprecatedTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:191](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L191)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocEnumTag

▸ `Const`**createJSDocEnumTag**(`typeExpression`: JSDocTypeExpression, `comment?`: string): (Anonymous function)

*Defined in [src/index.ts:315](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L315)*

##### Parameters:

Name | Type |
------ | ------ |
`typeExpression` | JSDocTypeExpression |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocFunctionType

▸ `Const`**createJSDocFunctionType**(`type`: TypeNode \| undefined): (Anonymous function)

*Defined in [src/index.ts:192](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L192)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode \| undefined |

**Returns:** (Anonymous function)

___

#### createJSDocPrivateTag

▸ `Const`**createJSDocPrivateTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:193](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L193)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocProtectedTag

▸ `Const`**createJSDocProtectedTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:194](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L194)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocPublicTag

▸ `Const`**createJSDocPublicTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:195](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L195)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocReadonlyTag

▸ `Const`**createJSDocReadonlyTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:196](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L196)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocReturnTag

▸ `Const`**createJSDocReturnTag**(`typeExpression`: JSDocTypeExpression, `comment?`: string): (Anonymous function)

*Defined in [src/index.ts:316](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L316)*

##### Parameters:

Name | Type |
------ | ------ |
`typeExpression` | JSDocTypeExpression |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocSignature

▸ `Const`**createJSDocSignature**(`parameters`: readonly JSDocParameterTag[], `type`: JSDocReturnTag): (Anonymous function)

*Defined in [src/index.ts:317](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L317)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly JSDocParameterTag[] |
`type` | JSDocReturnTag |

**Returns:** (Anonymous function)

___

#### createJSDocThisTag

▸ `Const`**createJSDocThisTag**(`typeExpression`: JSDocTypeExpression, `comment?`: string): (Anonymous function)

*Defined in [src/index.ts:318](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L318)*

##### Parameters:

Name | Type |
------ | ------ |
`typeExpression` | JSDocTypeExpression |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocTypeLiteral

▸ `Const`**createJSDocTypeLiteral**(`isArrayType`: boolean): (Anonymous function)

*Defined in [src/index.ts:197](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L197)*

##### Parameters:

Name | Type |
------ | ------ |
`isArrayType` | boolean |

**Returns:** (Anonymous function)

___

#### createJSDocTypeTag

▸ `Const`**createJSDocTypeTag**(`typeExpression`: JSDocTypeExpression, `comment?`: string): (Anonymous function)

*Defined in [src/index.ts:319](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L319)*

##### Parameters:

Name | Type |
------ | ------ |
`typeExpression` | JSDocTypeExpression |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJSDocUnknownTag

▸ `Const`**createJSDocUnknownTag**(`comment?`: string): (Anonymous function)

*Defined in [src/index.ts:198](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L198)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### createJsxAttribute

▸ `Const`**createJsxAttribute**(`initializer`: StringLiteral \| JsxExpression \| undefined): (Anonymous function)

*Defined in [src/index.ts:199](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L199)*

##### Parameters:

Name | Type |
------ | ------ |
`initializer` | StringLiteral \| JsxExpression \| undefined |

**Returns:** (Anonymous function)

___

#### createJsxElement

▸ `Const`**createJsxElement**(`children`: readonly ts.JsxChild[], `closingElement`: JsxClosingElement): (Anonymous function)

*Defined in [src/index.ts:320](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L320)*

##### Parameters:

Name | Type |
------ | ------ |
`children` | readonly ts.JsxChild[] |
`closingElement` | JsxClosingElement |

**Returns:** (Anonymous function)

___

#### createJsxExpression

▸ `Const`**createJsxExpression**(`expression`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:200](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L200)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### createJsxFragment

▸ `Const`**createJsxFragment**(`children`: readonly ts.JsxChild[], `closingFragment`: JsxClosingFragment): (Anonymous function)

*Defined in [src/index.ts:321](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L321)*

##### Parameters:

Name | Type |
------ | ------ |
`children` | readonly ts.JsxChild[] |
`closingFragment` | JsxClosingFragment |

**Returns:** (Anonymous function)

___

#### createJsxOpeningElement

▸ `Const`**createJsxOpeningElement**(`typeArguments`: readonly TypeNode[] \| undefined, `attributes`: JsxAttributes): (Anonymous function)

*Defined in [src/index.ts:322](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L322)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |
`attributes` | JsxAttributes |

**Returns:** (Anonymous function)

___

#### createJsxSelfClosingElement

▸ `Const`**createJsxSelfClosingElement**(`typeArguments`: readonly TypeNode[] \| undefined, `attributes`: JsxAttributes): (Anonymous function)

*Defined in [src/index.ts:323](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L323)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |
`attributes` | JsxAttributes |

**Returns:** (Anonymous function)

___

#### createJsxText

▸ `Const`**createJsxText**(`containsOnlyTriviaWhiteSpaces`: boolean): (Anonymous function)

*Defined in [src/index.ts:201](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L201)*

##### Parameters:

Name | Type |
------ | ------ |
`containsOnlyTriviaWhiteSpaces` | boolean |

**Returns:** (Anonymous function)

___

#### createLabeledStatement

▸ `Const`**createLabeledStatement**(`statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:202](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L202)*

##### Parameters:

Name | Type |
------ | ------ |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### createLeftShift

▸ `Const`**createLeftShift**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:203](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L203)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createLessThan

▸ `Const`**createLessThan**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:204](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L204)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createLessThanEquals

▸ `Const`**createLessThanEquals**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:205](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L205)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createLogicalAnd

▸ `Const`**createLogicalAnd**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:206](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L206)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createLogicalOr

▸ `Const`**createLogicalOr**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:207](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L207)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createModulo

▸ `Const`**createModulo**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:208](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L208)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createMultiply

▸ `Const`**createMultiply**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:209](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L209)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createNewExpression

▸ `Const`**createNewExpression**(`typeArguments`: readonly TypeNode[] \| undefined, `argumentsArray`: readonly Expression[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:324](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L324)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |
`argumentsArray` | readonly Expression[] \| undefined |

**Returns:** (Anonymous function)

___

#### createNodeArray

▸ `Const`**createNodeArray**\<T>(`hasTrailingComma`: boolean): (Anonymous function)

*Defined in [src/index.ts:210](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L210)*

##### Type parameters:

Name | Type |
------ | ------ |
`T` | Node |

##### Parameters:

Name | Type |
------ | ------ |
`hasTrailingComma` | boolean |

**Returns:** (Anonymous function)

___

#### createNumericLiteral

▸ `Const`**createNumericLiteral**(`numericLiteralFlags?`: TokenFlags): (Anonymous function)

*Defined in [src/index.ts:213](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L213)*

##### Parameters:

Name | Type |
------ | ------ |
`numericLiteralFlags?` | TokenFlags |

**Returns:** (Anonymous function)

___

#### createObjectLiteralExpression

▸ `Const`**createObjectLiteralExpression**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:214](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L214)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createPartiallyEmittedExpression

▸ `Const`**createPartiallyEmittedExpression**(`original`: Node): (Anonymous function)

*Defined in [src/index.ts:215](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L215)*

##### Parameters:

Name | Type |
------ | ------ |
`original` | Node |

**Returns:** (Anonymous function)

___

#### createPostfixUnaryExpression

▸ `Const`**createPostfixUnaryExpression**(`operator`: ts.PostfixUnaryOperator): (Anonymous function)

*Defined in [src/index.ts:216](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L216)*

##### Parameters:

Name | Type |
------ | ------ |
`operator` | ts.PostfixUnaryOperator |

**Returns:** (Anonymous function)

___

#### createPrefixUnaryExpression

▸ `Const`**createPrefixUnaryExpression**(`operand`: Expression): (Anonymous function)

*Defined in [src/index.ts:217](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L217)*

##### Parameters:

Name | Type |
------ | ------ |
`operand` | Expression |

**Returns:** (Anonymous function)

___

#### createPropertyAccessChain

▸ `Const`**createPropertyAccessChain**(`questionDotToken`: ts.QuestionDotToken \| undefined, `name`: string \| Identifier \| PrivateIdentifier): (Anonymous function)

*Defined in [src/index.ts:325](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L325)*

##### Parameters:

Name | Type |
------ | ------ |
`questionDotToken` | ts.QuestionDotToken \| undefined |
`name` | string \| Identifier \| PrivateIdentifier |

**Returns:** (Anonymous function)

___

#### createPropertyAccessExpression

▸ `Const`**createPropertyAccessExpression**(`name`: string \| Identifier \| PrivateIdentifier): (Anonymous function)

*Defined in [src/index.ts:218](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L218)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | string \| Identifier \| PrivateIdentifier |

**Returns:** (Anonymous function)

___

#### createPropertyAssignment

▸ `Const`**createPropertyAssignment**(`name`: string \| ts.PropertyName): (Anonymous function)

*Defined in [src/index.ts:222](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L222)*

This curried function, compared to most other functions, contains the original argument order to the TypeScript factory API

##### Parameters:

Name | Type |
------ | ------ |
`name` | string \| ts.PropertyName |

**Returns:** (Anonymous function)

___

#### createQualifiedName

▸ `Const`**createQualifiedName**(`right`: string \| Identifier): (Anonymous function)

*Defined in [src/index.ts:223](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L223)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | string \| Identifier |

**Returns:** (Anonymous function)

___

#### createRightShift

▸ `Const`**createRightShift**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:224](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L224)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createShorthandPropertyAssignment

▸ `Const`**createShorthandPropertyAssignment**(`objectAssignmentInitializer`: Expression): (Anonymous function)

*Defined in [src/index.ts:225](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L225)*

##### Parameters:

Name | Type |
------ | ------ |
`objectAssignmentInitializer` | Expression |

**Returns:** (Anonymous function)

___

#### createSourceFile

▸ `Const`**createSourceFile**(`endOfFileToken`: ts.EndOfFileToken, `flags`: NodeFlags): (Anonymous function)

*Defined in [src/index.ts:326](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L326)*

##### Parameters:

Name | Type |
------ | ------ |
`endOfFileToken` | ts.EndOfFileToken |
`flags` | NodeFlags |

**Returns:** (Anonymous function)

___

#### createStrictEquality

▸ `Const`**createStrictEquality**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:226](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L226)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createStrictInequality

▸ `Const`**createStrictInequality**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:227](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L227)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createStringLiteral

▸ `Const`**createStringLiteral**(`isSingleQuote?`: boolean): (Anonymous function)

*Defined in [src/index.ts:228](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L228)*

##### Parameters:

Name | Type |
------ | ------ |
`isSingleQuote?` | boolean |

**Returns:** (Anonymous function)

___

#### createStringLiteralFromNode

▸ `Const`**createStringLiteralFromNode**(`isSingleQuote?`: boolean): (Anonymous function)

*Defined in [src/index.ts:229](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L229)*

##### Parameters:

Name | Type |
------ | ------ |
`isSingleQuote?` | boolean |

**Returns:** (Anonymous function)

___

#### createSubtract

▸ `Const`**createSubtract**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:230](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L230)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createSwitchStatement

▸ `Const`**createSwitchStatement**(`caseBlock`: CaseBlock): (Anonymous function)

*Defined in [src/index.ts:231](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L231)*

##### Parameters:

Name | Type |
------ | ------ |
`caseBlock` | CaseBlock |

**Returns:** (Anonymous function)

___

#### createTaggedTemplateExpression

▸ `Const`**createTaggedTemplateExpression**(`typeArguments`: readonly TypeNode[] \| undefined, `template`: ts.TemplateLiteral): (Anonymous function)

*Defined in [src/index.ts:327](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L327)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined |
`template` | ts.TemplateLiteral |

**Returns:** (Anonymous function)

___

#### createTemplateExpression

▸ `Const`**createTemplateExpression**(`templateSpans`: readonly TemplateSpan[]): (Anonymous function)

*Defined in [src/index.ts:232](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L232)*

##### Parameters:

Name | Type |
------ | ------ |
`templateSpans` | readonly TemplateSpan[] |

**Returns:** (Anonymous function)

___

#### createTemplateHead

▸ **createTemplateHead**(`rawText`: string, `templateFlags`: TokenFlags): function

*Defined in [src/index.ts:328](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L328)*

##### Parameters:

Name | Type |
------ | ------ |
`rawText` | string |
`templateFlags` | TokenFlags |

**Returns:** function

▸ **createTemplateHead**(`rawText`: string, `templateFlags`: TokenFlags): function

*Defined in [src/index.ts:329](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L329)*

##### Parameters:

Name | Type |
------ | ------ |
`rawText` | string |
`templateFlags` | TokenFlags |

**Returns:** function

___

#### createTemplateSpan

▸ `Const`**createTemplateSpan**(`literal`: TemplateMiddle \| TemplateTail): (Anonymous function)

*Defined in [src/index.ts:233](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L233)*

##### Parameters:

Name | Type |
------ | ------ |
`literal` | TemplateMiddle \| TemplateTail |

**Returns:** (Anonymous function)

___

#### createTryStatement

▸ `Const`**createTryStatement**(`catchClause`: CatchClause \| undefined, `finallyBlock`: Block \| undefined): (Anonymous function)

*Defined in [src/index.ts:342](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L342)*

##### Parameters:

Name | Type |
------ | ------ |
`catchClause` | CatchClause \| undefined |
`finallyBlock` | Block \| undefined |

**Returns:** (Anonymous function)

___

#### createTypeAssertion

▸ `Const`**createTypeAssertion**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:234](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L234)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### createTypeOperatorNode

▸ `Const`**createTypeOperatorNode**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:235](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L235)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### createTypeParameterDeclaration

▸ `Const`**createTypeParameterDeclaration**(`constraint`: TypeNode, `defaultType`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:343](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L343)*

##### Parameters:

Name | Type |
------ | ------ |
`constraint` | TypeNode |
`defaultType` | TypeNode |

**Returns:** (Anonymous function)

___

#### createTypePredicateNode

▸ `Const`**createTypePredicateNode**(`parameterName`: Identifier \| ThisTypeNode \| string, `type`: TypeNode \| undefined): (Anonymous function)

*Defined in [src/index.ts:344](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L344)*

##### Parameters:

Name | Type |
------ | ------ |
`parameterName` | Identifier \| ThisTypeNode \| string |
`type` | TypeNode \| undefined |

**Returns:** (Anonymous function)

___

#### createTypeReferenceNode

▸ `Const`**createTypeReferenceNode**(`typeArguments`: readonly TypeNode[]): (Anonymous function)

*Defined in [src/index.ts:236](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L236)*

##### Parameters:

Name | Type |
------ | ------ |
`typeArguments` | readonly TypeNode[] |

**Returns:** (Anonymous function)

___

#### createUniqueName

▸ `Const`**createUniqueName**(`flags?`: GeneratedIdentifierFlags): (Anonymous function)

*Defined in [src/index.ts:237](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L237)*

##### Parameters:

Name | Type |
------ | ------ |
`flags?` | GeneratedIdentifierFlags |

**Returns:** (Anonymous function)

___

#### createUnsignedRightShift

▸ `Const`**createUnsignedRightShift**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:238](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L238)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createVariableDeclarationList

▸ `Const`**createVariableDeclarationList**(`flags`: NodeFlags): (Anonymous function)

*Defined in [src/index.ts:239](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L239)*

##### Parameters:

Name | Type |
------ | ------ |
`flags` | NodeFlags |

**Returns:** (Anonymous function)

___

#### createVariableStatement

▸ `Const`**createVariableStatement**(`declarationList`: VariableDeclarationList \| readonly VariableDeclaration[]): (Anonymous function)

*Defined in [src/index.ts:240](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L240)*

##### Parameters:

Name | Type |
------ | ------ |
`declarationList` | VariableDeclarationList \| readonly VariableDeclaration[] |

**Returns:** (Anonymous function)

___

#### createWhileStatement

▸ `Const`**createWhileStatement**(`statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:241](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L241)*

##### Parameters:

Name | Type |
------ | ------ |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### createWithStatement

▸ `Const`**createWithStatement**(`statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:242](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L242)*

##### Parameters:

Name | Type |
------ | ------ |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### restoreOuterExpressions

▸ `Const`**restoreOuterExpressions**(`innerExpression`: Expression, `kinds`: OuterExpressionKinds): (Anonymous function)

*Defined in [src/index.ts:345](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L345)*

##### Parameters:

Name | Type |
------ | ------ |
`innerExpression` | Expression |
`kinds` | OuterExpressionKinds |

**Returns:** (Anonymous function)

___

#### updateArrayBindingPattern

▸ `Const`**updateArrayBindingPattern**(`elements`: readonly ts.ArrayBindingElement[]): (Anonymous function)

*Defined in [src/index.ts:245](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L245)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly ts.ArrayBindingElement[] |

**Returns:** (Anonymous function)

___

#### updateArrayLiteralExpression

▸ `Const`**updateArrayLiteralExpression**(`elements`: readonly Expression[]): (Anonymous function)

*Defined in [src/index.ts:246](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L246)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly Expression[] |

**Returns:** (Anonymous function)

___

#### updateArrayTypeNode

▸ `Const`**updateArrayTypeNode**(`elementType`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:247](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L247)*

##### Parameters:

Name | Type |
------ | ------ |
`elementType` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateAsExpression

▸ `Const`**updateAsExpression**(`expression`: Expression, `type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:346](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L346)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateAwaitExpression

▸ `Const`**updateAwaitExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:248](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L248)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateBlock

▸ `Const`**updateBlock**(`statements`: readonly Statement[]): (Anonymous function)

*Defined in [src/index.ts:249](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L249)*

##### Parameters:

Name | Type |
------ | ------ |
`statements` | readonly Statement[] |

**Returns:** (Anonymous function)

___

#### updateBreakStatement

▸ `Const`**updateBreakStatement**(`label`: Identifier \| undefined): (Anonymous function)

*Defined in [src/index.ts:250](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L250)*

##### Parameters:

Name | Type |
------ | ------ |
`label` | Identifier \| undefined |

**Returns:** (Anonymous function)

___

#### updateCallExpression

▸ `Const`**updateCallExpression**(`expression?`: string \| Identifier \| Expression, `typeArguments?`: readonly TypeNode[], `argumentsArray?`: readonly Expression[]): (Anonymous function)

*Defined in [src/index.ts:6](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L6)*

##### Parameters:

Name | Type |
------ | ------ |
`expression?` | string \| Identifier \| Expression |
`typeArguments?` | readonly TypeNode[] |
`argumentsArray?` | readonly Expression[] |

**Returns:** (Anonymous function)

___

#### updateCaseBlock

▸ `Const`**updateCaseBlock**(`clauses`: readonly ts.CaseOrDefaultClause[]): (Anonymous function)

*Defined in [src/index.ts:251](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L251)*

##### Parameters:

Name | Type |
------ | ------ |
`clauses` | readonly ts.CaseOrDefaultClause[] |

**Returns:** (Anonymous function)

___

#### updateCaseClause

▸ `Const`**updateCaseClause**(`expression`: Expression, `statements`: readonly Statement[]): (Anonymous function)

*Defined in [src/index.ts:347](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L347)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`statements` | readonly Statement[] |

**Returns:** (Anonymous function)

___

#### updateCatchClause

▸ `Const`**updateCatchClause**(`variableDeclaration`: VariableDeclaration \| undefined, `block`: Block): (Anonymous function)

*Defined in [src/index.ts:348](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L348)*

##### Parameters:

Name | Type |
------ | ------ |
`variableDeclaration` | VariableDeclaration \| undefined |
`block` | Block |

**Returns:** (Anonymous function)

___

#### updateCommaListExpression

▸ `Const`**updateCommaListExpression**(`elements`: readonly Expression[]): (Anonymous function)

*Defined in [src/index.ts:252](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L252)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly Expression[] |

**Returns:** (Anonymous function)

___

#### updateComputedPropertyName

▸ `Const`**updateComputedPropertyName**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:253](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L253)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateContinueStatement

▸ `Const`**updateContinueStatement**(`label`: Identifier \| undefined): (Anonymous function)

*Defined in [src/index.ts:254](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L254)*

##### Parameters:

Name | Type |
------ | ------ |
`label` | Identifier \| undefined |

**Returns:** (Anonymous function)

___

#### updateDecorator

▸ `Const`**updateDecorator**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:255](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L255)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateDefaultClause

▸ `Const`**updateDefaultClause**(`statements`: readonly Statement[]): (Anonymous function)

*Defined in [src/index.ts:256](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L256)*

##### Parameters:

Name | Type |
------ | ------ |
`statements` | readonly Statement[] |

**Returns:** (Anonymous function)

___

#### updateDeleteExpression

▸ `Const`**updateDeleteExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:257](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L257)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateDoStatement

▸ `Const`**updateDoStatement**(`statement`: Statement, `expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:349](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L349)*

##### Parameters:

Name | Type |
------ | ------ |
`statement` | Statement |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateElementAccessExpression

▸ `Const`**updateElementAccessExpression**(`expression`: Expression, `argumentExpression`: Expression): (Anonymous function)

*Defined in [src/index.ts:350](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L350)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`argumentExpression` | Expression |

**Returns:** (Anonymous function)

___

#### updateEnumMember

▸ `Const`**updateEnumMember**(`name`: ts.PropertyName, `initializer`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:351](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L351)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | ts.PropertyName |
`initializer` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### updateExportSpecifier

▸ `Const`**updateExportSpecifier**(`propertyName`: Identifier \| undefined, `name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:352](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L352)*

##### Parameters:

Name | Type |
------ | ------ |
`propertyName` | Identifier \| undefined |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateExpressionStatement

▸ `Const`**updateExpressionStatement**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:258](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L258)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateExpressionWithTypeArguments

▸ `Const`**updateExpressionWithTypeArguments**(`expression`: Expression, `typeArguments`: readonly TypeNode[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:353](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L353)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`typeArguments` | readonly TypeNode[] \| undefined |

**Returns:** (Anonymous function)

___

#### updateExternalModuleReference

▸ `Const`**updateExternalModuleReference**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:259](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L259)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateHeritageClause

▸ `Const`**updateHeritageClause**(`types`: readonly ExpressionWithTypeArguments[]): (Anonymous function)

*Defined in [src/index.ts:260](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L260)*

##### Parameters:

Name | Type |
------ | ------ |
`types` | readonly ExpressionWithTypeArguments[] |

**Returns:** (Anonymous function)

___

#### updateImportSpecifier

▸ `Const`**updateImportSpecifier**(`propertyName`: Identifier \| undefined, `name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:354](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L354)*

##### Parameters:

Name | Type |
------ | ------ |
`propertyName` | Identifier \| undefined |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateIndexedAccessTypeNode

▸ `Const`**updateIndexedAccessTypeNode**(`objectType`: TypeNode, `indexType`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:355](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L355)*

##### Parameters:

Name | Type |
------ | ------ |
`objectType` | TypeNode |
`indexType` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateInferTypeNode

▸ `Const`**updateInferTypeNode**(`typeParameter`: TypeParameterDeclaration): (Anonymous function)

*Defined in [src/index.ts:261](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L261)*

##### Parameters:

Name | Type |
------ | ------ |
`typeParameter` | TypeParameterDeclaration |

**Returns:** (Anonymous function)

___

#### updateIntersectionTypeNode

▸ `Const`**updateIntersectionTypeNode**(`types`: NodeArray\<TypeNode>): (Anonymous function)

*Defined in [src/index.ts:262](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L262)*

##### Parameters:

Name | Type |
------ | ------ |
`types` | NodeArray\<TypeNode> |

**Returns:** (Anonymous function)

___

#### updateJSDocAuthorTag

▸ `Const`**updateJSDocAuthorTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:356](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L356)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocClassTag

▸ `Const`**updateJSDocClassTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:357](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L357)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocComment

▸ `Const`**updateJSDocComment**(`comment?`: string \| undefined, `tags?`: readonly JSDocTag[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:358](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L358)*

##### Parameters:

Name | Type |
------ | ------ |
`comment?` | string \| undefined |
`tags?` | readonly JSDocTag[] \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocDeprecatedTag

▸ `Const`**updateJSDocDeprecatedTag**(`tagName`: Identifier, `comment?`: string): (Anonymous function)

*Defined in [src/index.ts:359](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L359)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier |
`comment?` | string |

**Returns:** (Anonymous function)

___

#### updateJSDocFunctionType

▸ `Const`**updateJSDocFunctionType**(`parameters`: readonly ParameterDeclaration[], `type`: TypeNode \| undefined): (Anonymous function)

*Defined in [src/index.ts:360](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L360)*

##### Parameters:

Name | Type |
------ | ------ |
`parameters` | readonly ParameterDeclaration[] |
`type` | TypeNode \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocNamepathType

▸ `Const`**updateJSDocNamepathType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:263](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L263)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJSDocNonNullableType

▸ `Const`**updateJSDocNonNullableType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:264](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L264)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJSDocNullableType

▸ `Const`**updateJSDocNullableType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:265](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L265)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJSDocOptionalType

▸ `Const`**updateJSDocOptionalType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:266](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L266)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJSDocPrivateTag

▸ `Const`**updateJSDocPrivateTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:361](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L361)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocProtectedTag

▸ `Const`**updateJSDocProtectedTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:362](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L362)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocPublicTag

▸ `Const`**updateJSDocPublicTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:363](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L363)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocReadonlyTag

▸ `Const`**updateJSDocReadonlyTag**(`tagName`: Identifier \| undefined, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:364](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L364)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier \| undefined |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocTypeExpression

▸ `Const`**updateJSDocTypeExpression**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:267](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L267)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJSDocTypeLiteral

▸ `Const`**updateJSDocTypeLiteral**(`jsDocPropertyTags`: readonly JSDocPropertyLikeTag[] \| undefined, `isArrayType`: boolean \| undefined): (Anonymous function)

*Defined in [src/index.ts:365](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L365)*

##### Parameters:

Name | Type |
------ | ------ |
`jsDocPropertyTags` | readonly JSDocPropertyLikeTag[] \| undefined |
`isArrayType` | boolean \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocUnknownTag

▸ `Const`**updateJSDocUnknownTag**(`tagName`: Identifier, `comment?`: string \| undefined): (Anonymous function)

*Defined in [src/index.ts:366](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L366)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | Identifier |
`comment?` | string \| undefined |

**Returns:** (Anonymous function)

___

#### updateJSDocVariadicType

▸ `Const`**updateJSDocVariadicType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:268](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L268)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateJsxAttribute

▸ `Const`**updateJsxAttribute**(`name`: Identifier, `initializer`: StringLiteral \| JsxExpression \| undefined): (Anonymous function)

*Defined in [src/index.ts:367](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L367)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |
`initializer` | StringLiteral \| JsxExpression \| undefined |

**Returns:** (Anonymous function)

___

#### updateJsxAttributes

▸ `Const`**updateJsxAttributes**(`properties`: readonly ts.JsxAttributeLike[]): (Anonymous function)

*Defined in [src/index.ts:269](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L269)*

##### Parameters:

Name | Type |
------ | ------ |
`properties` | readonly ts.JsxAttributeLike[] |

**Returns:** (Anonymous function)

___

#### updateJsxClosingElement

▸ `Const`**updateJsxClosingElement**(`tagName`: ts.JsxTagNameExpression): (Anonymous function)

*Defined in [src/index.ts:270](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L270)*

##### Parameters:

Name | Type |
------ | ------ |
`tagName` | ts.JsxTagNameExpression |

**Returns:** (Anonymous function)

___

#### updateJsxExpression

▸ `Const`**updateJsxExpression**(`expression`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:271](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L271)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### updateJsxSpreadAttribute

▸ `Const`**updateJsxSpreadAttribute**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:272](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L272)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateJsxText

▸ `Const`**updateJsxText**(`text`: string, `containsOnlyTriviaWhiteSpaces`: boolean): (Anonymous function)

*Defined in [src/index.ts:368](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L368)*

##### Parameters:

Name | Type |
------ | ------ |
`text` | string |
`containsOnlyTriviaWhiteSpaces` | boolean |

**Returns:** (Anonymous function)

___

#### updateLabeledStatement

▸ `Const`**updateLabeledStatement**(`label`: Identifier, `statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:369](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L369)*

##### Parameters:

Name | Type |
------ | ------ |
`label` | Identifier |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### updateLiteralTypeNode

▸ `Const`**updateLiteralTypeNode**(`literal`: LiteralTypeNode[\"literal\"]): (Anonymous function)

*Defined in [src/index.ts:273](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L273)*

##### Parameters:

Name | Type |
------ | ------ |
`literal` | LiteralTypeNode[\"literal\"] |

**Returns:** (Anonymous function)

___

#### updateMetaProperty

▸ `Const`**updateMetaProperty**(`name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:274](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L274)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateModuleBlock

▸ `Const`**updateModuleBlock**(`statements`: readonly Statement[]): (Anonymous function)

*Defined in [src/index.ts:275](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L275)*

##### Parameters:

Name | Type |
------ | ------ |
`statements` | readonly Statement[] |

**Returns:** (Anonymous function)

___

#### updateNamedExports

▸ `Const`**updateNamedExports**(`elements`: readonly ExportSpecifier[]): (Anonymous function)

*Defined in [src/index.ts:276](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L276)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly ExportSpecifier[] |

**Returns:** (Anonymous function)

___

#### updateNamedImports

▸ `Const`**updateNamedImports**(`elements`: readonly ImportSpecifier[]): (Anonymous function)

*Defined in [src/index.ts:277](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L277)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly ImportSpecifier[] |

**Returns:** (Anonymous function)

___

#### updateNamespaceExport

▸ `Const`**updateNamespaceExport**(`name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:278](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L278)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateNamespaceExportDeclaration

▸ `Const`**updateNamespaceExportDeclaration**(`name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:279](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L279)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateNamespaceImport

▸ `Const`**updateNamespaceImport**(`name`: Identifier): (Anonymous function)

*Defined in [src/index.ts:280](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L280)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |

**Returns:** (Anonymous function)

___

#### updateNonNullChain

▸ `Const`**updateNonNullChain**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:281](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L281)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateNonNullExpression

▸ `Const`**updateNonNullExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:282](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L282)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateObjectBindingPattern

▸ `Const`**updateObjectBindingPattern**(`elements`: readonly BindingElement[]): (Anonymous function)

*Defined in [src/index.ts:283](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L283)*

##### Parameters:

Name | Type |
------ | ------ |
`elements` | readonly BindingElement[] |

**Returns:** (Anonymous function)

___

#### updateObjectLiteralExpression

▸ `Const`**updateObjectLiteralExpression**(`properties`: readonly ts.ObjectLiteralElementLike[]): (Anonymous function)

*Defined in [src/index.ts:284](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L284)*

##### Parameters:

Name | Type |
------ | ------ |
`properties` | readonly ts.ObjectLiteralElementLike[] |

**Returns:** (Anonymous function)

___

#### updateOptionalTypeNode

▸ `Const`**updateOptionalTypeNode**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:285](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L285)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateParenthesizedExpression

▸ `Const`**updateParenthesizedExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:286](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L286)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateParenthesizedType

▸ `Const`**updateParenthesizedType**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:287](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L287)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updatePartiallyEmittedExpression

▸ `Const`**updatePartiallyEmittedExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:288](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L288)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updatePostfixUnaryExpression

▸ `Const`**updatePostfixUnaryExpression**(`operand`: Expression): (Anonymous function)

*Defined in [src/index.ts:289](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L289)*

##### Parameters:

Name | Type |
------ | ------ |
`operand` | Expression |

**Returns:** (Anonymous function)

___

#### updatePrefixUnaryExpression

▸ `Const`**updatePrefixUnaryExpression**(`operand`: Expression): (Anonymous function)

*Defined in [src/index.ts:290](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L290)*

##### Parameters:

Name | Type |
------ | ------ |
`operand` | Expression |

**Returns:** (Anonymous function)

___

#### updatePropertyAccessExpression

▸ `Const`**updatePropertyAccessExpression**(`expression`: Expression, `name`: Identifier \| PrivateIdentifier): (Anonymous function)

*Defined in [src/index.ts:370](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L370)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`name` | Identifier \| PrivateIdentifier |

**Returns:** (Anonymous function)

___

#### updatePropertyAssignment

▸ `Const`**updatePropertyAssignment**(`name`: ts.PropertyName, `initializer`: Expression): (Anonymous function)

*Defined in [src/index.ts:371](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L371)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | ts.PropertyName |
`initializer` | Expression |

**Returns:** (Anonymous function)

___

#### updateQualifiedName

▸ `Const`**updateQualifiedName**(`left`: ts.EntityName, `right`: Identifier): (Anonymous function)

*Defined in [src/index.ts:372](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L372)*

##### Parameters:

Name | Type |
------ | ------ |
`left` | ts.EntityName |
`right` | Identifier |

**Returns:** (Anonymous function)

___

#### updateRestTypeNode

▸ `Const`**updateRestTypeNode**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:291](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L291)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateReturnStatement

▸ `Const`**updateReturnStatement**(`expression`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:292](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L292)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### updateShorthandPropertyAssignment

▸ `Const`**updateShorthandPropertyAssignment**(`name`: Identifier, `objectAssignmentInitializer`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:373](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L373)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | Identifier |
`objectAssignmentInitializer` | Expression \| undefined |

**Returns:** (Anonymous function)

___

#### updateSpreadAssignment

▸ `Const`**updateSpreadAssignment**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:293](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L293)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateSpreadElement

▸ `Const`**updateSpreadElement**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:294](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L294)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateSwitchStatement

▸ `Const`**updateSwitchStatement**(`expression`: Expression, `caseBlock`: CaseBlock): (Anonymous function)

*Defined in [src/index.ts:374](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L374)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`caseBlock` | CaseBlock |

**Returns:** (Anonymous function)

___

#### updateTemplateExpression

▸ `Const`**updateTemplateExpression**(`head`: TemplateHead, `templateSpans`: readonly TemplateSpan[]): (Anonymous function)

*Defined in [src/index.ts:375](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L375)*

##### Parameters:

Name | Type |
------ | ------ |
`head` | TemplateHead |
`templateSpans` | readonly TemplateSpan[] |

**Returns:** (Anonymous function)

___

#### updateTemplateSpan

▸ `Const`**updateTemplateSpan**(`expression`: Expression, `literal`: TemplateMiddle \| TemplateTail): (Anonymous function)

*Defined in [src/index.ts:376](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L376)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`literal` | TemplateMiddle \| TemplateTail |

**Returns:** (Anonymous function)

___

#### updateThrowStatement

▸ `Const`**updateThrowStatement**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:295](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L295)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateTypeAssertion

▸ `Const`**updateTypeAssertion**(`type`: TypeNode, `expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:377](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L377)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateTypeLiteralNode

▸ `Const`**updateTypeLiteralNode**(`members`: NodeArray\<TypeElement>): (Anonymous function)

*Defined in [src/index.ts:296](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L296)*

##### Parameters:

Name | Type |
------ | ------ |
`members` | NodeArray\<TypeElement> |

**Returns:** (Anonymous function)

___

#### updateTypeOfExpression

▸ `Const`**updateTypeOfExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:297](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L297)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateTypeOperatorNode

▸ `Const`**updateTypeOperatorNode**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:298](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L298)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### updateTypeQueryNode

▸ `Const`**updateTypeQueryNode**(`exprName`: ts.EntityName): (Anonymous function)

*Defined in [src/index.ts:299](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L299)*

##### Parameters:

Name | Type |
------ | ------ |
`exprName` | ts.EntityName |

**Returns:** (Anonymous function)

___

#### updateTypeReferenceNode

▸ `Const`**updateTypeReferenceNode**(`typeName`: ts.EntityName, `typeArguments`: NodeArray\<TypeNode> \| undefined): (Anonymous function)

*Defined in [src/index.ts:378](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L378)*

##### Parameters:

Name | Type |
------ | ------ |
`typeName` | ts.EntityName |
`typeArguments` | NodeArray\<TypeNode> \| undefined |

**Returns:** (Anonymous function)

___

#### updateUnionTypeNode

▸ `Const`**updateUnionTypeNode**(`types`: NodeArray\<TypeNode>): (Anonymous function)

*Defined in [src/index.ts:300](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L300)*

##### Parameters:

Name | Type |
------ | ------ |
`types` | NodeArray\<TypeNode> |

**Returns:** (Anonymous function)

___

#### updateVariableDeclarationList

▸ `Const`**updateVariableDeclarationList**(`declarations`: readonly VariableDeclaration[]): (Anonymous function)

*Defined in [src/index.ts:301](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L301)*

##### Parameters:

Name | Type |
------ | ------ |
`declarations` | readonly VariableDeclaration[] |

**Returns:** (Anonymous function)

___

#### updateVariableStatement

▸ `Const`**updateVariableStatement**(`modifiers`: readonly ts.Modifier[] \| undefined, `declarationList`: VariableDeclarationList): (Anonymous function)

*Defined in [src/index.ts:379](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L379)*

##### Parameters:

Name | Type |
------ | ------ |
`modifiers` | readonly ts.Modifier[] \| undefined |
`declarationList` | VariableDeclarationList |

**Returns:** (Anonymous function)

___

#### updateVoidExpression

▸ `Const`**updateVoidExpression**(`expression`: Expression): (Anonymous function)

*Defined in [src/index.ts:302](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L302)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |

**Returns:** (Anonymous function)

___

#### updateWhileStatement

▸ `Const`**updateWhileStatement**(`expression`: Expression, `statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:380](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L380)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### updateWithStatement

▸ `Const`**updateWithStatement**(`expression`: Expression, `statement`: Statement): (Anonymous function)

*Defined in [src/index.ts:381](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L381)*

##### Parameters:

Name | Type |
------ | ------ |
`expression` | Expression |
`statement` | Statement |

**Returns:** (Anonymous function)

___

#### updateYieldExpression

▸ `Const`**updateYieldExpression**(`asteriskToken`: ts.AsteriskToken \| undefined, `expression`: Expression \| undefined): (Anonymous function)

*Defined in [src/index.ts:382](https://github.com/simonlovesyou/typescript-schema/blob/011564b/packages/factory/src/index.ts#L382)*

##### Parameters:

Name | Type |
------ | ------ |
`asteriskToken` | ts.AsteriskToken \| undefined |
`expression` | Expression \| undefined |

**Returns:** (Anonymous function)

## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.