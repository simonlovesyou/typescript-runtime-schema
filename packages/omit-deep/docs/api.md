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