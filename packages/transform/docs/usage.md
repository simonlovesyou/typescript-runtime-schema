# Usage

This package exposes a TypeScript transformer factory at `@typescript-runtime-schema/factory`

Custom typescript transformers is natively supported _internally_ in TypeScript, but is not publically exposed. The current recommended workaround is to replace your `typescript` compiler with [ttypescript](https://github.com/cevek/ttypescript) which is a TypeScript compiler wrapper that exposes the internal transformers API.

(Please [vote here](https://github.com/Microsoft/TypeScript/issues/14419) to support transformers out-of-the-box)

## `ttypescript`
_For `ttypescript` installation instructions, please see the [ttypescript repo](https://github.com/cevek/ttypescript)_

Add a `plugins` property to `compilerOptions` in your `tsconfig.json` and specify `@typescript-runtime-schema/transformer` as your transformer:

```json
{
    "compilerOptions": {
        "plugins": [
            { "transform": "@typescript-runtime-schema/transformer" }
        ]
    }
}
```

Build your typescript project like you previously would, but replace your usage of `tsc` with `ttsc`

```bash
## Examples:
npx ttsc
# or
./node_modules/.bin/ttsc --project .
```

### `ts-node`, `webpack`, `Rollup`
Please read the instructions of [ttypescript](https://github.com/cevek/ttypescript/blob/master/README.md) for information on how to use it in combination with `ts-node`, `webpack`, and `Rollup`.

Note: This will not work if `ts-loader` is configured with `transpileOnly: true`.

## Options

There are currently no options supported for this package. Options will be available and exposed in future version of the package.