# @typescript-runtime-schema/transform ![version](https://badgen.net/badge/version/0.1.2/blue)
Typescript transform which enriches source code with runtime schema validation

## Comparison
There are other packages similar to this one, like [`typescript-is`](https://github.com/woutervh-/typescript-is). The intention of this package is to, in future version, support "schema like" identifiers that will tell the compiler that the runtime value should conform to some constraint so that you can provide contentful validation with your types. Example:
```ts
import { is } from '@typescript-runtime-schema/lib'
import { UUID, Maximum, Minimum, Email } from '@typescript-runtime-schema/lib/contentful'

type User = {
  id: string & UUID<'v4'>,
  name: string & Minimum<10> & Maximum<50>,
  email: string & Email
}

const validatePayloadAsUser = (something: any) => {
  return is<User>(something)
}
```

### Disclaimer
Please note that the above example is a draft of what the future API _may_ look like and is subject to change. The "contentful" utility types are not yet implemented as of this version of the package.
## Installation
Using npm:
```
npm install @typescript-runtime-schema/transform
```
Using yarn:
```
yarn add @typescript-runtime-schema/transform
```
# Usage

This package exposes a TypeScript transformer factory at `@typescript-runtime-schema/factory`

Custom typescript transformers is natively supported _internally_ in TypeScript, but is not publically exposed. The current recommended workaround is to replace your `typescript` compiler with [ttypescript](https://github.com/cevek/ttypescript) which is a TypeScript compiler wrapper that exposes the internal transformers API.

(Please [vote here](https://github.com/Microsoft/TypeScript/issues/14419) to support transformers out-of-the-box)

## `ttypescript`
_For `ttypescript` installation instructions, please see the [ttypescript repo](https://github.com/cevek/ttypescript)_

Add a `plugins` property to `compilerOptions` in your `tsconfig.json` and specify `@typescript-runtime-schema/transformer` as your transformer:

```json
{
    "compilerOptions": {
        "plugins": [
            { "transform": "@typescript-runtime-schema/transformer" }
        ]
    }
}
```

Build your typescript project like you previously would, but replace your usage of `tsc` with `ttsc`

```bash
## Examples:
npx ttsc
# or
./node_modules/.bin/ttsc --project .
```

### `ts-node`, `webpack`, `Rollup`
Please read the instructions of [ttypescript](https://github.com/cevek/ttypescript/blob/master/README.md) for information on how to use it in combination with `ts-node`, `webpack`, and `Rollup`.

Note: This will not work if `ts-loader` is configured with `transpileOnly: true`.

## Options

There are currently no options supported for this package. Options will be available and exposed in future version of the package.
## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.