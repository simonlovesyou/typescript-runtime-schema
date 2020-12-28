# @typescript-runtime-schema/factory
A wrapper for the typescript factory that provide sensible currying to the API

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

* [createIdentifier](README.md#createidentifier)
* [createLoopVariable](README.md#createloopvariable)

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
* [createNumericLiteral](README.md#createnumericliteral)
* [createObjectLiteralExpression](README.md#createobjectliteralexpression)
* [createPropertyAccessExpression](README.md#createpropertyaccessexpression)
* [createPropertyAssignment](README.md#createpropertyassignment)
* [createStringLiteral](README.md#createstringliteral)
* [updateCallExpression](README.md#updatecallexpression)

### Variables

#### createIdentifier

• `Const` **createIdentifier**: createIdentifier = ts.factory.createIdentifier

*Defined in [src/index.ts:34](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L34)*

___

#### createLoopVariable

• `Const` **createLoopVariable**: createLoopVariable = ts.factory.createLoopVariable

*Defined in [src/index.ts:69](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L69)*

### Functions

#### createAdd

▸ `Const`**createAdd**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:73](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L73)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createArrayLiteralExpression

▸ `Const`**createArrayLiteralExpression**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:52](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L52)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createArrowFunction

▸ `Const`**createArrowFunction**(`body`: ts.ConciseBody): (Anonymous function)

*Defined in [src/index.ts:78](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L78)*

##### Parameters:

Name | Type |
------ | ------ |
`body` | ts.ConciseBody |

**Returns:** (Anonymous function)

___

#### createAsExpression

▸ `Const`**createAsExpression**(`type`: TypeNode): (Anonymous function)

*Defined in [src/index.ts:96](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L96)*

##### Parameters:

Name | Type |
------ | ------ |
`type` | TypeNode |

**Returns:** (Anonymous function)

___

#### createAssignment

▸ `Const`**createAssignment**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:102](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L102)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBinaryExpression

▸ `Const`**createBinaryExpression**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:108](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L108)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBindingElement

▸ `Const`**createBindingElement**(`dotDotDotToken`: ts.DotDotDotToken \| undefined, `propertyName`: string \| ts.PropertyName \| undefined, `name`: string \| ts.BindingName): (Anonymous function)

*Defined in [src/index.ts:115](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L115)*

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

*Defined in [src/index.ts:129](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L129)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBitwiseOr

▸ `Const`**createBitwiseOr**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:135](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L135)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBitwiseXor

▸ `Const`**createBitwiseXor**(`right`: Expression): (Anonymous function)

*Defined in [src/index.ts:141](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L141)*

##### Parameters:

Name | Type |
------ | ------ |
`right` | Expression |

**Returns:** (Anonymous function)

___

#### createBlock

▸ `Const`**createBlock**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:147](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L147)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createBundle

▸ `Const`**createBundle**(`prepends?`: readonly (UnparsedSource \| InputFiles)[]): (Anonymous function)

*Defined in [src/index.ts:153](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L153)*

##### Parameters:

Name | Type |
------ | ------ |
`prepends?` | readonly (UnparsedSource \| InputFiles)[] |

**Returns:** (Anonymous function)

___

#### createCallChain

▸ `Const`**createCallChain**(`questionDotToken`: ts.QuestionDotToken \| undefined, `typeArguments`: readonly TypeNode[] \| undefined, `argumentsArray`: readonly Expression[] \| undefined): (Anonymous function)

*Defined in [src/index.ts:160](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L160)*

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

*Defined in [src/index.ts:176](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L176)*

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeArguments` | readonly TypeNode[] \| undefined | Read only Type Arguments for the call ts.Expression |
`argumentsArray` | readonly Expression[] \| undefined | Array of arguments for the call ts.Expression |

**Returns:** (Anonymous function)

___

#### createNumericLiteral

▸ `Const`**createNumericLiteral**(`numericLiteralFlags?`: TokenFlags): (Anonymous function)

*Defined in [src/index.ts:63](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L63)*

##### Parameters:

Name | Type |
------ | ------ |
`numericLiteralFlags?` | TokenFlags |

**Returns:** (Anonymous function)

___

#### createObjectLiteralExpression

▸ `Const`**createObjectLiteralExpression**(`multiLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:15](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L15)*

##### Parameters:

Name | Type |
------ | ------ |
`multiLine?` | boolean |

**Returns:** (Anonymous function)

___

#### createPropertyAccessExpression

▸ `Const`**createPropertyAccessExpression**(`name`: string \| Identifier \| PrivateIdentifier): (Anonymous function)

*Defined in [src/index.ts:7](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L7)*

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string \| Identifier \| PrivateIdentifier | The name of the property |

**Returns:** (Anonymous function)

___

#### createPropertyAssignment

▸ `Const`**createPropertyAssignment**(`name`: string \| Identifier \| PrivateIdentifier \| StringLiteral \| NumericLiteral \| ComputedPropertyName): (Anonymous function)

*Defined in [src/index.ts:21](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L21)*

##### Parameters:

Name | Type |
------ | ------ |
`name` | string \| Identifier \| PrivateIdentifier \| StringLiteral \| NumericLiteral \| ComputedPropertyName |

**Returns:** (Anonymous function)

___

#### createStringLiteral

▸ `Const`**createStringLiteral**(`singleLine?`: boolean): (Anonymous function)

*Defined in [src/index.ts:58](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L58)*

##### Parameters:

Name | Type |
------ | ------ |
`singleLine?` | boolean |

**Returns:** (Anonymous function)

___

#### updateCallExpression

▸ `Const`**updateCallExpression**(`identifier?`: string \| Identifier, `typeArguments?`: readonly TypeNode[], `argumentsArray?`: readonly Expression[]): (Anonymous function)

*Defined in [src/index.ts:38](https://github.com/simonlovesyou/typescript-schema/blob/29dd6cc/packages/factory/src/index.ts#L38)*

##### Parameters:

Name | Type |
------ | ------ |
`identifier?` | string \| Identifier |
`typeArguments?` | readonly TypeNode[] |
`argumentsArray?` | readonly Expression[] |

**Returns:** (Anonymous function)

## License
MIT License Copyright (c) 2020 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.