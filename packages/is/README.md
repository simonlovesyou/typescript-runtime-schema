# @typescript-runtime-schema/library

Typescript library to validate given data to a typescript type. You could consider it to be the swiss knife of type guards.

## Installation
```bash
npm install @typescript-runtime-schema/library

# For this library to work the intended way you also need to add the transform function as a dependency and use it.
npm install @typescript-runtime-schema/transform -D
```

For how to use the custom typescript transformer, please see Usage section below

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
* array (via the `[]` operator, support for the Array operator type will come in future versions)
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

