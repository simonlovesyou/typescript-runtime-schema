import { readFileSync } from "fs";
import * as path from "path";
import { execSync } from "child_process";
import markdownTable from "markdown-table";
import { PackageJson } from "type-fest";

interface Package {
  name: string;
  version: string;
  private: boolean;
  location: string;
}

interface EnrichedPackage extends Package {
  meta: PackageJson;
}

/**
 * @internal
 */
const handleLernaPackagesSymbol = (headingLevel: number) => {
  const result = execSync(
    [
      path.resolve(process.cwd(), "./node_modules/.bin/lerna"),
      "ls -la --json",
    ].join(" ")
  );

  const parsedResult = JSON.parse(result.toString()) as Package[];

  const packages = parsedResult.map((pkg): EnrichedPackage => ({
    ...pkg,
    meta: JSON.parse(
      readFileSync(path.join(pkg.location, "package.json")).toString()
    ),
  }));

  const content = markdownTable([
    ["Package", "Status", "Description"],
    ...packages
      .filter(({ private: packagePrivate }) => !packagePrivate)
      .map(({ name, version, meta, location }) => [
        `[${name}](${location.replace(process.cwd(), '')})`,
        `![version: ${version}](https://badgen.net/badge/version/${version}/blue)`,
        meta.description,
      ]),
  ]);

  return `${"#".repeat(headingLevel)} Packages\n\n` + content + "\n";
};

export default handleLernaPackagesSymbol;
