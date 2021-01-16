declare module "@typescript-runtime-schema/is" {
  type Serializeable =
    | string
    | number
    | boolean
    | null
    | { [x: string]: Serializeable }
    | Serializeable[];
  export default function is<T extends Serializeable>(value: any): value is T;
}
