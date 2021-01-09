import { addHeading, wrapWithCodeBlock } from "./utils";

/**
 * @internal
 */
const npmInstallation = (packageName: string) => `
Using npm:
${wrapWithCodeBlock(`npm install ${packageName}`)}`.trim();

/**
 * @internal
 */
const yarnInstallation = (packageName: string) => `
Using yarn:
${wrapWithCodeBlock(`yarn add ${packageName}`)}`.trim();

/**
 * @internal
 */
const handleInstallationSymbol = (
  packageName: string,
  headingLevel: number,
  yarn: boolean,
  npm: boolean
): string =>
  addHeading(
    headingLevel,
    "Installation"
  )(`${npm && npmInstallation(packageName)}
${yarn && yarnInstallation(packageName)}`);

export default handleInstallationSymbol;
