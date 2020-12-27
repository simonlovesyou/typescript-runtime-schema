## How it works
It will compose the README according to the **documentation index file**. The index file describes the overall content of the README you wish to generate with either file references or symbols.

### Index file
The index file describes the format of the `README.md` to produce. For every new line in the index file it may only either include a, relative to the index file, file path to another markdown file to inline in the output or a symbol.

### Symbols
The index file supports a few symbols and if present will be automatically generated & added from the source files:
* PackageName
* Description
* Installation
* API
* CLI
* License

You can specify the heading level for the generated content by prefixing the heading level before the symbol, like so:
```
# PackageName
```

If you omit the heading level the heading will be entirely omitted in the output.

You can pass arguments to the symbols by declaring them space separated after the symbol, example:
```
Installation yarn <!-- Will only generate yarn installation instructions -->
```

For which arguments you can specify for each symbol, please see the specific symbol documentation below.

#### PackageName
The package name is generated based on the name of package in present in the package.json.

#### Description
The description is generated based on the name of package in present in the package.json.

#### Installation
The installation instructions are generated based on the package name in the package.json. It will output installation examples for both yarn & npm.

Arguments:
**yarn** - _Optional_: Generate documentation for how to install with yarn.
**npm** - _Optional_: Generate documentation for how to install with npm.

#### API
The API documentation is generated using [typedoc](https://typedoc.org/) into markdown using [typescript-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown). If the outputted markdown documentation only contains one file it will be inlined into markdown, otherwise each file will be moved to `<indexFileDirectory>/API/`

#### CLI
The CLI documentation is generated by parsing the `cli` package.json and executing the script with the `--help` command. If the script successfully exits it will use the output as the CLI documentation.

#### License
The License section is generated using the license field in the package.json or the passed in argument.

Arguments:
**{LICENSE_NAME}** - _Optional_: The name of the license to include in the README.