import { unlinkSync, readFileSync } from "fs";
import * as path from "path";
import { execSync } from "child_process";
import globby from "globby";
import replaceInFile from "replace-in-file";
import * as R from "ramda";
import * as tmp from "tmp-promise";

/**
 * @internal
 */
const incrementHeadings = (levels: number, markdown: string): string =>
  markdown
    .split("\n")
    .reduce(
      (acc, line) =>
        acc + "\n" + line.replace(/^(#+)( .*)/, `$1${"#".repeat(levels)}$2`),
      ""
    );

/**
 * @internal
 */
const handleApiSymbol = (
  sourceDirectories: string[],
  excludedSourceDirectories: string[],
  headingLevel: number
) => {
  const outputDirectory = tmp.dirSync().name;

  const resultA = execSync(
    [
      path.resolve(__dirname, "../../node_modules/.bin/typedoc"),
      "--out",
      outputDirectory,
      `--exclude **/*.spec.ts`,
      "--excludeNotExported",
      "--excludePrivate",
      "--excludeProtected",
      "--stripInternal",
      `--tsconfig ${process.cwd()}/tsconfig.json`,
      "--mode modules",
      "--plugin typedoc-plugin-markdown",
      excludedSourceDirectories.length > 0 &&
        `--exclude ${excludedSourceDirectories}`,
      sourceDirectories.join(" "),
    ]
      .filter((arg: string | undefined) => arg)
      .join(" ")
  );

  let files = globby.sync(path.join(outputDirectory, "modules"));

  files.forEach((file) => {
    const content = readFileSync(file, "utf8");

    if (content.split("\n").length === 6) {
      //File is "empty"
      unlinkSync(file);
    }
  });

  files = globby.sync(path.join(outputDirectory, "modules"));

  if (files.length > 1) {
    throw new Error("Not supported: Multiple files");
  }

  const { base: fullFileName } = path.parse(files[0]);

  replaceInFile.sync({
    files: files[0],
    from: new RegExp(fullFileName, "g"),
    to: "README.md",
  });

  const apiFile = readFileSync(files[0], "utf8");

  return (
    `${"#".repeat(headingLevel)} API\n\n` +
    incrementHeadings(
      headingLevel - 1,
      R.slice(6, Infinity)(apiFile.trim().split("\n")).join("\n")
    ) +
    "\n"
  );
};

export default handleApiSymbol;
