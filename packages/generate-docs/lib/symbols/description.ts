import { addHeading } from "./utils";

/**
 * @internal
 */
const handleDescriptionSymbol = (
  description: string,
  headingLevel: number
): string => addHeading(headingLevel, "Description")(description) + '\n';

export default handleDescriptionSymbol;
