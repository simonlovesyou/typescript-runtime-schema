# @typescript-runtime-schema/javascript-template-tag ![version](https://badgen.net/badge/version/1.0.0/blue)
A javascript template tag for making sure the template string contains valid javascript

## Installation
Using npm:
```
npm install @typescript-runtime-schema/javascript-template-tag
```
Using yarn:
```
yarn add @typescript-runtime-schema/javascript-template-tag
```
## Usage
```ts
import jsCode from '@typescript-runtime-schema/javascript-template-tag'

const validCode = jsCode`
/* Whatever code we would like to assert is valid before we do stuff with it */
`
```

## API


### Index

#### Functions

* [javascriptTemplatetag](README.md#javascripttemplatetag)

### Functions

#### javascriptTemplatetag

▸ **javascriptTemplatetag**(`strings`: TemplateStringsArray): string

*Defined in [src/index.ts:8](https://github.com/simonlovesyou/typescript-schema/blob/d8a9a26/packages/javascript-template-tag/src/index.ts#L8)*

Attempt to parse the code in the provided template tag (Only accepts one for now)

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`strings` | TemplateStringsArray | TemplateStringsArray |

**Returns:** string

## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.