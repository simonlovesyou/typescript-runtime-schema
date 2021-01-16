## API
### is
Default export.

#### Signature
`function is<T extends Serializable>(value: any) => value is T;`

#### Type Parameters
Name | Constraint | Default value | Description |
------ | ------ | ------ | ------ |
`T` | `Serializeable` | N/A | The type we are type guarding against. Must be a serializeable value |

##### `Serializeable`
`type Serializeable = string | number | boolean | null | Record<string, Serializeable> | Serializeable[];`

#### Parameters
Name | Constraint | Default value | Description |
------ | ------ | ------ | ------ |
`value` | N/A | N/A | The value we are type guarding

#### Returns
boolean: `value` is `T`

