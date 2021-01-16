declare module '@typescript-runtime-schema/is' {
  type Serializeable =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[];
  export default function is<T extends Serializeable>(value: any): value is T
}