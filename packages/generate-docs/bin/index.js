#!/usr/bin/env node
const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const lib = require("../dist").default;
const fs = require("fs");

const HELP_OPTION = {
  name: "help",
  alias: "h",
  type: Boolean,
};

const optionDefinitions = [
  {
    name: "index-file-path",
    type: String,
    description:
      "Relative path to the index file from current working directory",
  },
  {
    name: "entry-file-path",
    type: String,
    description:
      "Relative path to the entry file from current working directory",
  },
  {
    name: "ts-config-path",
    type: String,
    description:
      "Relative path to the tsconfig.json file from current working directory",
  },
  {
    name: "output",
    type: String,
    alias: "o",
    description: `Specifies the location the documentation should be written to. If omitted the documentation will be written to stdout.`,
  },
];

if (commandLineArgs([HELP_OPTION], { partial: true }).help) {
  console.log(
    commandLineUsage([
      {
        header: "generate-docs",
        content: "Automatically generate documentation for typescript packages",
      },
      {
        header: "Options",
        optionList: [...optionDefinitions, HELP_OPTION],
      },
    ])
  );
  return process.exit(0);
}

const options = commandLineArgs(optionDefinitions, { partial: true });

(async () => {
  const result = await lib({
    documentationIndexFilePath: options["index-file-path"],
    tsConfigFile: options["ts-config-path"],
    entryFile: options["entry-file-path"],
  });
  options["output"] ? fs.writeFileSync(options["output"], result) : console.log(result);
})();
