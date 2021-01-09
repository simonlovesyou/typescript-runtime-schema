declare module '@typescript-runtime-schema/is' {
  // TODO: Restrict T
  export default function is<T>(value: any): value is T
}