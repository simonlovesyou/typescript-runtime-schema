declare module "read-package-json" {
  function readPackageJson(
    path: string,
    log?: (...args: unknown[]) => void,
    strict?: boolean,
    callback?: (error: Error, data: Record<string, unknown>) => void
  ): void;

  export default readPackageJson;
}
