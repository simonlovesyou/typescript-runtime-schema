import transformer from ".";
import "@typescript-runtime-schema/expect-to-be-transformed-to";

import * as ts from "typescript";

describe("transform", () => {
  describe("inline type", () => {
    const sourceCode = `
      import is from "@typescript-runtime-schema/library";

      const name = "Morpheus"

      const surelyName = is<string>(name);
    `;
    it("should transform correctly", () => {
      expect(sourceCode).toBeTransformedTo(
        transformer,
        `
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var library_1 = require("@typescript-runtime-schema/library");
      var name = "Morpheus";
      var surelyName = is(name, Joi.string());`.trim()
      );
    });
  });

  it("should transform correctly", () => {
    expect(
      `
import is from "@typescript-runtime-schema/library";

const sa = is
let lol = sa
const hello = lol

interface Foo {
  name: string
}

const name = "hello";

const shortName = hello<Foo>(name);  
    `.trim()
    ).toBeTransformedTo(
      transformer,
      `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var name = "hello";
var shortName = library_1.default(name);`.trim()
    );
  });
});
