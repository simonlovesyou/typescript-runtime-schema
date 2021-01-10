# @typescript-runtime-schema/compiler-utilities ![version](https://badgen.net/badge/version/0.1.1/blue)
A collection of Typescript compiler utilities

## Installation
Using npm:
```
npm install @typescript-runtime-schema/compiler-utilities
```
Using yarn:
```
yarn add @typescript-runtime-schema/compiler-utilities
```
## API


### Index

#### Functions

* [convertTypeToTypeNode](README.md#converttypetotypenode)
* [createArrayLiteralFrom](README.md#createarrayliteralfrom)
* [createObjectLiteralFrom](README.md#createobjectliteralfrom)
* [findRootIdentifier](README.md#findrootidentifier)
* [isKeyword](README.md#iskeyword)
* [isNode](README.md#isnode)
* [isTypeNodeAssignableToTypeNode](README.md#istypenodeassignabletotypenode)
* [mergeObjectLiteralsRecursivelyLeft](README.md#mergeobjectliteralsrecursivelyleft)
* [nodeEquals](README.md#nodeequals)

### Functions

#### convertTypeToTypeNode

▸ `Const`**convertTypeToTypeNode**(`type`: Type): TypeNode

*Defined in [src/index.ts:104](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L104)*

**`beta`** 

##### Parameters:

Name | Type |
------ | ------ |
`type` | Type |

**Returns:** TypeNode

___

#### createArrayLiteralFrom

▸ `Const`**createArrayLiteralFrom**\<T>(`array`: T[], `multiLine?`: boolean): ArrayLiteralExpression

*Defined in [src/index.ts:220](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L220)*

Creates a typescript array literal from a javascript "native" array.
Any typescript nodes in the provided array will be carried over as is to the created array literal

##### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array we should base the array literal on |
`multiLine?` | boolean | Whether or not the created array literal should be multiline |

**Returns:** ArrayLiteralExpression

___

#### createObjectLiteralFrom

▸ `Const`**createObjectLiteralFrom**(`object`: Record\<string, unknown>, `multiLine?`: boolean): ObjectLiteralExpression

*Defined in [src/index.ts:251](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L251)*

Creates a typescript object literal from a javascript "native" object.
Any typescript nodes in the provided object will be carried over as is to the created object literal

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`object` | Record\<string, unknown> | - |
`multiLine?` | boolean | Whether or not the created array literal should be multiline |

**Returns:** ObjectLiteralExpression

___

#### findRootIdentifier

▸ `Const`**findRootIdentifier**(`identifier`: Identifier, `checker`: TypeChecker, `options?`: { includeImports?: boolean  }, `stopCondition?`: (node: Node) => boolean): Identifier

*Defined in [src/index.ts:134](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L134)*

Traverse declarations given an identifier to the root identifier.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`identifier` | Identifier | - | The leaf identifier |
`checker` | TypeChecker | - | [ts.TypeChecker](https://github.com/microsoft/TypeScript/blob/master/src/compiler/checker.ts) |
`options` | { includeImports?: boolean  } | { includeImports: true } | Function options |
`stopCondition` | (node: Node) => boolean | () => false | Callback to check if we should stop traversing, for whatever reason |

**Returns:** Identifier

The root identifer

___

#### isKeyword

▸ `Const`**isKeyword**(`node`: Node): boolean

*Defined in [src/index.ts:349](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L349)*

Checks whether the typescript node is a "keyword"

##### Parameters:

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** boolean

___

#### isNode

▸ `Const`**isNode**(`node`: unknown): node is Node

*Defined in [src/index.ts:290](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L290)*

Naively check whether or not ⋆.ೃ࿔*:･something✧˖*°࿐ is a Typescript node

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | unknown | Whatever we're checking if it's a ts.Node |

**Returns:** node is Node

___

#### isTypeNodeAssignableToTypeNode

▸ `Const`**isTypeNodeAssignableToTypeNode**(`source`: TypeNode, `target`: TypeNode): boolean

*Defined in [src/index.ts:307](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L307)*

Check whether or not source can be assigned to target

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`source` | TypeNode | The TypeNode we're checking whether or not it can be assigned to target |
`target` | TypeNode | The TypeNode we're checking assignment against |

**Returns:** boolean

___

#### mergeObjectLiteralsRecursivelyLeft

▸ `Const`**mergeObjectLiteralsRecursivelyLeft**(`objectLiteralA`: ObjectLiteralExpression, `objectLiteralB`: ObjectLiteralExpression): ObjectLiteralExpression

*Defined in [src/index.ts:24](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L24)*

Merge two object literals recursively into one, with properties from left taking precedence.

Unique properties will be carried over to the new object literal.
If a key value pair exists in both provided object literals then second object literal will take precedence.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`objectLiteralA` | ObjectLiteralExpression | The first object literal. |
`objectLiteralB` | ObjectLiteralExpression | The second object literal that's merged left into objectLiteralA. |

**Returns:** ObjectLiteralExpression

The merged object literal from objectLiteralA & objectLiteralB

___

#### nodeEquals

▸ `Const`**nodeEquals**(`nodeA`: Node, `nodeB`: Node): function

*Defined in [src/index.ts:338](https://github.com/simonlovesyou/typescript-schema/blob/f9dfaf9/packages/compiler-utilities/src/index.ts#L338)*

Checks whether or not two typescript nodes are equal

##### Parameters:

Name | Type |
------ | ------ |
`nodeA` | Node |
`nodeB` | Node |

**Returns:** function

## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.