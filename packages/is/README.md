# @typescript-runtime-schema/is ![version](https://badgen.net/badge/version/0.1.1/blue)
`is` function to type guard against given type. To be used in conjunction with `@typescript-runtime-schema/transform`

## Installation
Using npm:
```
npm install @typescript-runtime-schema/is
```
Using yarn:
```
yarn add @typescript-runtime-schema/is
```
### Notes
For this library to work the intended way you also need to add the transform function as a dependency and use it.
```bash
npm install @typescript-runtime-schema/transform -D
```

For how to use & setup the typescript transformer, please see Usage section of @typescript-runtime-schema/transform
## Usage
Use the default exported `is` function to validate that a certain value conforms to a certain type.

The `is` functions accepts a generic type as a type parameter and will type guard the value provided

### Examples
```ts
// Basic example
import is from '@typescript-runtime-schema/library'

if(is<string>("Any human can tell this is a string, but a mere compiler won't know because it is cast" as any)) {
  console.log('Safe string zone')
} else {
  console.log('Report issues at https://github.com/simonlovesyou/typescript-runtime-schema/issues')
}
```

It supports all type primitives (except `unknown` & `never`, because it wouldn't really make sense):
* boolean
* number
* string
* array
* tuple
* any
* void
* null
* undefined
* object

The library supports heritage, intersections & unions

```ts
import is from '@typescript-runtime-schema/library'

type Animal = { type: 'vertebrates' | 'invertebrates' } & { cute: boolean }

interface Human extends Animal {
  name: string
  age: number
  handedness: 'left' | 'right' | 'ambidextrous'
}

type Alien = { numberOfTentacles: number }

const person = {
  name: 'Simon',
  age: 28,
  handedness: 'right',
  // cute: true /* Cuteness is in the eye of the beholder */ 
}

if(is<Alien | Human>(person as any)) {
  console.log("Alien or Human")
} else {
  console.log("Not a Human or Alien")
}
```
## API
### is
Default export.

#### Signature
`function is<T>(value: any) => value is T;`

#### Type Parameters
Name | Constraint | Default value | Description |
------ | ------ | ------ | ------ |
`T` | N/A | N/A | The type we are type guarding against. Must be a serializeable value |

#### Parameters
Name | Constraint | Default value | Description |
------ | ------ | ------ | ------ |
`value` | N/A | N/A | The value we are type guarding

#### Returns
boolean: `value` is `T`


## License
MIT License Copyright (c) 2021 Simon Johansson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.