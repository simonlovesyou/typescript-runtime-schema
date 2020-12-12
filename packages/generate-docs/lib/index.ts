import { readFile, readFileSync } from "fs";
import { promisify } from "util";
import readPackageJson from "read-package-json";
import { PackageJson } from "type-fest";
import * as symbols from "./symbols";
import * as path from "path";

const readFileAsync = promisify(readFile);

const loadPackageJson = (packagePath: string): Promise<PackageJson> =>
  new Promise((resolve, reject) =>
    readPackageJson(packagePath, undefined, false, (error, data) =>
      error ? reject(error) : resolve(data)
    )
  );

interface TsConfig {
  include?: string[];
  exclude?: string[];
}

const countCharacter = (char: string) => (str: string) =>
  str
    .split("")
    .reduce((acc, currentChar) => (currentChar === char ? acc + 1 : acc), 0);

const loadTypescriptConfigSync = (tsConfigPath: string): TsConfig =>
  JSON.parse(readFileSync(tsConfigPath, "utf8"));

/**
 * @beta
 */
export default async function generateDocs(options: {
  /** Relative path to the index file from current working directory */
  documentationIndexFilePath: string;
  /** Relative path to the source file from current working directory */
  tsConfigFile: string;
  /** Relative path to the entry file from current working directory */
  entryFile: string;
  /** Whether or not we should overwrite when outputting files */
  overwrite?: boolean;
}): Promise<string> {
  const packagePackageJson = await loadPackageJson(
    path.join(process.cwd(), "package.json")
  );

  const documentationIndexFile = await readFileAsync(
    path.relative(process.cwd(), options.documentationIndexFilePath),
    "utf8"
  );

  const author =
    typeof packagePackageJson.author === "string"
      ? {
          name: packagePackageJson.author.match(/(.*) <(.*)>/)[1],
          email: packagePackageJson.author.match(/(.*) <(.*)>/)[2],
        }
      : packagePackageJson.author;

  if(!author) {
    throw new Error('Missing author in package.json')
  }

  const resultingReadme = documentationIndexFile
    .split("\n")
    .reduce((acc, indexEntry: string) => {
      if (/^(#+? )?Installation/.test(indexEntry)) {
        const packageName = packagePackageJson.name;
        if (!packageName) {
          throw new Error(
            "Installation symbol cannot be used without a package name"
          );
        }
        return (
          acc +
          `\n` +
          symbols.installation(
            packageName,
            countCharacter("#")(indexEntry),
            true,
            true
          )
        );
      }
      if (/^(#+? )?API/.test(indexEntry)) {
        const result = symbols.api(
          loadTypescriptConfigSync(
            options.tsConfigFile || path.join(process.cwd(), "tsconfig.json")
          ).include,
          loadTypescriptConfigSync(path.join(process.cwd(), "tsconfig.json"))
            .exclude || [],
          countCharacter("#")(indexEntry)
        );
        return acc + "\n" + result;
      }
      if (/^(#+? )?License/.test(indexEntry)) {
        return (
          acc +
          `\n` +
          symbols.license(
            packagePackageJson.license,
            author.name,
            author.email,
            new Date().getFullYear().toString(),
            countCharacter("#")(indexEntry)
          )
        );
      }
      if (/^(#+? )?CLI/.test(indexEntry)) {
        return (
          acc +
          `\n` +
          symbols.cli(
            packagePackageJson.bin,
            countCharacter("#")(indexEntry)
          )
        );
      }
      if (/^(#+? )?PackageName/.test(indexEntry)) {
        return (
          acc +
          `\n` +
          symbols.packageName(
            packagePackageJson.name,
            countCharacter("#")(indexEntry)
          )
        );
      }
      if (/^(#+? )?Description/.test(indexEntry)) {
        return (
          acc +
          `\n` +
          symbols.description(
            packagePackageJson.description,
            countCharacter("#")(indexEntry)
          )
        );
      }
      return (
        acc +
        `\n` +
        readFileSync(
          path.resolve(
            path.dirname(options.documentationIndexFilePath),
            indexEntry
          ),
          "utf8"
        )
      );
    }, "");
  return resultingReadme.trim();
}
