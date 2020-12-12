import { addHeading } from "./utils";

/**
 * @internal
 */
const handlePackageNameSymbol = (
  packageName: string,
  headingLevel: number
): string => addHeading(headingLevel, packageName)("");

export default handlePackageNameSymbol;
