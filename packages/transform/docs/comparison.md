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