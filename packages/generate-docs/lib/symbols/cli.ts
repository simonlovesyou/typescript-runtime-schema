import * as path from "path";
import { execSync } from "child_process";
import { addHeading, wrapWithCodeBlock } from "./utils";
import {toPairs} from 'ramda'

/**
 * @internal
 */
const handleCliSymbol = (cli: string | Record<string, string>, headingLevel: number) => {
  if(typeof cli === 'string') {
    const cliDocumentation = execSync(
      [path.resolve(process.cwd(), cli), "--help"].join(" ")
    );
    return addHeading(headingLevel, 'CLI')(wrapWithCodeBlock(cliDocumentation.toString().trim()))
  }
  const cliDocumentation = toPairs(cli).reduce((acc, [scriptName, scriptPath]) => {
    const result = execSync(
      [path.resolve(process.cwd(), scriptPath), "--help"].join(" ")
    );
  
    return acc + '\n' + addHeading(headingLevel + 1, scriptName)(wrapWithCodeBlock(result.toString().trim()))

  }, '')

  return addHeading(headingLevel, 'CLI')(cliDocumentation)
};

export default handleCliSymbol;
