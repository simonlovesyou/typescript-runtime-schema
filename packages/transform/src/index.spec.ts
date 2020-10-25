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
var surelyName = library_1.default(name, { type: "string" });`.trim()
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
var surelyName = library_1.default("Morpheus", { type: "string" });`.trim()
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
var surelyName = library_1.default(name, { type: "string" });`.trim()
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
var surelyName = library_1.default("Morpheus", { type: "string" });`.trim()
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
var surelyAge = library_1.default(age, { type: "number" });`.trim()
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
var surelyAge = library_1.default(21, { type: "number" });`.trim()
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
var surelyAge = library_1.default(num, { type: "number" });`.trim()
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
var surelyAge = library_1.default(21, { type: "number" });`.trim()
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
var definitelyOn = library_1.default(on, { type: "boolean" });`.trim()
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
var definitelyOn = library_1.default(true, { type: "boolean" });`.trim()
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
var definitelyOn = library_1.default(on, { type: "boolean" });`.trim()
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
var definitelyOn = library_1.default(true, { type: "boolean" });`.trim()
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
var surelyAge = library_1.default(age, [{ type: "number" }, { type: "string" }]);`.trim()
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
var surelyAge = library_1.default('21', [{ type: "number" }, { type: "string" }]);`.trim()
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
var surelyAge = library_1.default(age, [{ type: "number" }, { type: "string" }]);`.trim()
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
var surelyAge = library_1.default('21', [{ type: "number" }, { type: "string" }]);`.trim()
          );
        });
      });
    });
  });
  describe("any", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const age = '21'

const whatever = is<any>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var age = '21';
var whatever = library_1.default(age, { type: "any" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const whatever = is<any>('21');`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var whatever = library_1.default('21', { type: "any" });`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const age = '21'

type Any = any

const whatever = is<Any>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var age = '21';
var whatever = library_1.default(age, { type: "any" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Any = any

const whatever = is<Any>('21');`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var whatever = library_1.default('21', { type: "any" });`.trim()
          );
        });
      });
    });
  });
  describe("object", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const person = { name: 'Kim' }

const object = is<object>(person);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var person = { name: 'Kim' };
var object = library_1.default(person, { type: "object" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const object = is<object>({ name: 'Kim' });`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var object = library_1.default({ name: 'Kim' }, { type: "object" });`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const person = { name: 'Kim' }

type Obj = object

const object = is<Obj>(age);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var person = { name: 'Kim' };
var object = library_1.default(age, { type: "object" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Obj = object

const object = is<Obj>({ name: 'Kim' });`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var object = library_1.default({ name: 'Kim' }, { type: "object" });`.trim()
          );
        });
      });
    });
  });
  describe("undefined", () => {
    describe("inline type", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const undef = undefined

const definitelyUndefined = is<undefined>(undef);`;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var undef = undefined;
var definitelyUndefined = library_1.default(undef, { type: "undefined" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

const definitelyUndefined = is<undefined>(undefined);`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var definitelyUndefined = library_1.default(undefined, { type: "undefined" });`.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = `
import is from "@typescript-runtime-schema/library";

const undef = undefined

type Undef = undefined

const definitelyUndefined = is<Undef>(undef);
      `;
      it("should transform correctly", () => {
        expect(sourceCode).toBeTransformedTo(
          transformer,
          `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var undef = undefined;
var definitelyUndefined = library_1.default(undef, { type: "undefined" });`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = `
import is from "@typescript-runtime-schema/library";

type Undef = undefined

const definitelyUndefined = is<Undef>(undefined);`;
        it("should transform correctly", () => {
          expect(sourceCode).toBeTransformedTo(
            transformer,
            `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("@typescript-runtime-schema/library");
var definitelyUndefined = library_1.default(undefined, { type: "undefined" });`.trim()
          );
        });
      });
    });
  });
});
