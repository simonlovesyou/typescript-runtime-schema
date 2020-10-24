import transformer from ".";
import "@typescript-runtime-schema/expect-to-be-transformed-to";

import * as ts from "typescript";

describe("transform", () => {
  describe("string", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const name = "Morpheus"

const surelyName = is<string>(name);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var name = "Morpheus";
var surelyName = library_1.default(name, Joi.string());`.trim()
        );
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const name = "Morpheus"

type Name = string

const surelyName = is<Name>(name);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var name = "Morpheus";
var surelyName = library_1.default(name, Joi.string());`.trim()
        );
      });
    });
  });

  describe("number", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const name = 10

const surelyName = is<number>(name);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var name = 10;
var surelyName = library_1.default(name, Joi.number());`.trim()
        );
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const num = 10

type Num = number

const surelyName = is<Num>(name);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var num = 10;
var surelyName = library_1.default(name, Joi.number());`.trim()
        );
      });
    });
  });
});
