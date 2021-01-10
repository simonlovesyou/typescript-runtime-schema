# @typescript-runtime-schema/omit-deep ![version](https://badgen.net/badge/version/1.0.2/blue)
Recursively omit the specified keys from an object. Function signature inspired by ramda.

## Installation
Using npm:
```
npm install @typescript-runtime-schema/omit-deep
```
Using yarn:
```
yarn add @typescript-runtime-schema/omit-deep
```
## API
Default export. The function is curried i.e. if `keys` is provided as single argument it will return a function that accepts the `object` parameter

### Parameters:
Name | Type |
------ | ------ |
`keys` | string[] |
`object` | Record<any, any> |

**Returns:** object

### Example
```ts
import omitDeep from '@typescript-runtime-schema/omit-deep'

const obj = {
  foo: {
    bar: 'bar'
  },
  bar: 'bar'
}

const result = omitDeep(['bar'], obj) // or omitDeep(['bar'])(obj)

result /*{
  foo: {},
}*/
```
## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.