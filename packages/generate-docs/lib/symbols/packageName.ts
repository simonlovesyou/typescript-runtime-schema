import { addHeading } from "./utils";

/**
 * @internal
 */
const handlePackageNameSymbol = (
  packageName: string,
  version: string,
  headingLevel: number
): string =>
  addHeading(
    headingLevel,
    packageName +
      (version
        ? ` ![version](https://badgen.net/badge/version/${version}/blue)`
        : "")
  )("");

export default handlePackageNameSymbol;
