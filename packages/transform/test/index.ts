import is, { string } from "@typescript-runtime-schema/library";

type Name = string.Max<string, 50>;

const name = "hello";

const shortName = is<Name>(name);