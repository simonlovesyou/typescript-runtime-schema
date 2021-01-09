import expandTemplate from "expand-template";
import licenses from "@ovyerus/licenses/full";
import { findLicense } from "license";
import { addHeading, wrapWithCodeBlock } from "./utils";

/**
 * @internal
 */
const handleLicenseSymbol = (
  license: string,
  author: string,
  email: string,
  year: string,
  headingLevel: number
): string => {
  const correspondingLicense = findLicense(license, true);

  const licenseBody = expandTemplate({ sep: "<>" })(
    licenses[correspondingLicense[0]].licenseText,
    {
      email,
      year,
      author,
    }
  );

  return addHeading(headingLevel, 'License')(licenseBody)
};

export default handleLicenseSymbol