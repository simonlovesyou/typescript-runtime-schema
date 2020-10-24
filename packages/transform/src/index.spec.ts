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
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const surelyName = is<string>("Morpheus");`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyName = library_1.default("Morpheus", Joi.string());`.trim()
          );
        });
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
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Name = string

const surelyName = is<Name>("Morpheus");`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyName = library_1.default("Morpheus", Joi.string());`.trim()
          );
        });
      });
    });
  });

  describe("number", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const age = 21 as any

const surelyAge = is<number>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var age = 21;
var surelyAge = library_1.default(age, Joi.number());`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
  import is from "@typescript-runtime-schema/library";
  
  const surelyAge = is<number>(21);`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyAge = library_1.default(21, Joi.number());`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const num = 21

type Age = number

const surelyAge = is<Age>(num);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var num = 21;
var surelyAge = library_1.default(num, Joi.number());`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Age = number

const surelyAge = is<Age>(21);`
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyAge = library_1.default(21, Joi.number());`.trim()
          );
        });
      });
    });
  });
  describe("boolean", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const on = true as any

const definitelyOn = is<boolean>(on);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var on = true;
var definitelyOn = library_1.default(on, Joi.boolean());`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const definitelyOn = is<boolean>(true);`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var definitelyOn = library_1.default(true, Joi.boolean());`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const on = true as any

type Bool = boolean

const definitelyOn = is<Bool>(on);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var on = true;
var definitelyOn = library_1.default(on, Joi.boolean());`.trim()
        );
      });
    });
    describe("inline value", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Bool = boolean

const definitelyOn = is<Bool>(true);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var definitelyOn = library_1.default(true, Joi.boolean());`.trim()
        );
      });
    });
  });
  describe("enum", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const age = '21'

const surelyAge = is<number | string>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var age = '21';
var surelyAge = library_1.default(age, Joi.alternatives().try(Joi.number(), Joi.string()));`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const surelyAge = is<number | string>('21');`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyAge = library_1.default('21', Joi.alternatives().try(Joi.number(), Joi.string()));`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const age = '21'

type Num = number
type Str = string

const surelyAge = is<Num | Str>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var age = '21';
var surelyAge = library_1.default(age, Joi.alternatives().try(Joi.number(), Joi.string()));`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Num = number
type Str = string

const surelyAge = is<Num | Str>('21');`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var surelyAge = library_1.default('21', Joi.alternatives().try(Joi.number(), Joi.string()));`.trim()
          );
        });
      });
    });
  });
});
