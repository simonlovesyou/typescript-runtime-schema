import transformer from ".";
import "@typescript-runtime-schema/expect-transformer-to-transform-source-code";
import "@typescript-runtime-schema/expect-transformer-to-transform-program";
import js from "@typescript-runtime-schema/javascript-template-tag";
import tsTag from "@typescript-runtime-schema/typescript-template-tag";
import dedent from "dedent";

const jsCode = (strings: TemplateStringsArray) => {
  js(strings);
  return dedent(strings);
};

const tsCode = (strings: TemplateStringsArray) => {
  tsTag(strings);
  return dedent(strings);
};

describe("transform", () => {
  describe("string", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const name = "Morpheus"

        const surelyName = is<string>(name);`;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var name = "Morpheus";
            var surelyName = library_1.default({
                type: 'string'
            })(name);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const surelyName = is<string>("Morpheus");`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var surelyName = library_1.default({
                  type: 'string'
              })("Morpheus");
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const name = "Morpheus"

        type Name = string

        const surelyName = is<Name>(name);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var name = "Morpheus";
            var surelyName = library_1.default({
                type: 'string'
            })(name);`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Name = string

          const surelyName = is<Name>("Morpheus");
        `.trim();
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var surelyName = library_1.default({
                  type: 'string'
              })("Morpheus");
            `.trim()
          );
        });
      });
    });
    describe("import", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";
        import Str from './str'

        const name = "Morpheus" as any

        is<Str>(name);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformProgram(
          {
            "./lib.ts": sourceCode,
            "./str.ts": "type Str = string; export default Str",
          },
          {
            "./lib.js": jsCode`
              "use strict";
              exports.__esModule = true;
              var library_1 = require("@typescript-runtime-schema/library");
              var name = "Morpheus";
              library_1["default"]({
                  type: 'string'
              })(name);`.trim(),
          }
        );
      });
    });
  });

  describe("number", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const age = 21 as any

        const surelyAge = is<number>(age);
      `.trim();
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var age = 21;
            var surelyAge = library_1.default({
                type: 'number'
            })(age);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";
          
          const surelyAge = is<number>(21);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var surelyAge = library_1.default({
                  type: 'number'
              })(21);
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const num = 21

        type Age = number

        const surelyAge = is<Age>(num);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var num = 21;
            var surelyAge = library_1.default({
                type: 'number'
            })(num);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Age = number

          const surelyAge = is<Age>(21);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var surelyAge = library_1.default({
                  type: 'number'
              })(21);
            `.trim()
          );
        });
      });
    });
  });
  describe("boolean", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const on = true as any

        const definitelyOn = is<boolean>(on);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var on = true;
            var definitelyOn = library_1.default({
                type: 'boolean'
            })(on);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
import is from "@typescript-runtime-schema/library";

const definitelyOn = is<boolean>(true);`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyOn = library_1.default({
                  type: 'boolean'
              })(true);
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const on = true as any

        type Bool = boolean

        const definitelyOn = is<Bool>(on);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var on = true;
            var definitelyOn = library_1.default({
                type: 'boolean'
            })(on);
          `.trim()
        );
      });
    });
    describe("inline value", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Bool = boolean

        const definitelyOn = is<Bool>(true);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var definitelyOn = library_1.default({
                type: 'boolean'
            })(true);`.trim()
        );
      });
    });
  });
  describe("enum", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const age = '21'

        is<number | string>(age);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var age = '21';
            library_1.default({
                anyOf: [
                    {
                        type: 'number'
                    },
                    {
                        type: 'string'
                    }
                ]
            })(age);`.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          is<number | string>('21');
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              library_1.default({
                  anyOf: [
                      {
                          type: 'number'
                      },
                      {
                          type: 'string'
                      }
                  ]
              })('21');
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Num = number
        type Str = string

        is<Num | Str>(age);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            library_1.default({
                anyOf: [
                    {
                        type: 'number'
                    },
                    {
                        type: 'string'
                    }
                ]
            })(age);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Num = number
          type Str = string

          is<Num | Str>('21');
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              library_1.default({
                  anyOf: [
                      {
                          type: 'number'
                      },
                      {
                          type: 'string'
                      }
                  ]
              })('21');
            `.trim()
          );
        });
      });
    });
  });
  describe("any", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const age = '21'

        const whatever = is<any>(age);
      `.trim();
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var age = '21';
            var whatever = library_1.default({
                type: 'any'
            })(age);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const whatever = is<any>('21');
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var whatever = library_1.default({
                  type: 'any'
              })('21');
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const age = '21'

        type Any = any

        const whatever = is<Any>(age);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var age = '21';
            var whatever = library_1.default({
                type: 'any'
            })(age);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Any = any

          const whatever = is<Any>('21');
        `.trim();
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var whatever = library_1.default({
                  type: 'any'
              })('21');
            `.trim()
          );
        });
      });
    });
  });
  describe("object", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const person = { name: 'Kim' }

          const object = is<object>(person);
        `.trim();
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var person = { name: 'Kim' };
            var object = library_1.default({
                type: 'object'
            })(person);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const object = is<object>({ name: 'Kim' });
        `.trim();
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var object = library_1.default({
                  type: 'object'
              })({ name: 'Kim' });
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const person = { name: 'Kim' }

        type Obj = object

        const object = is<Obj>(age);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var person = { name: 'Kim' };
            var object = library_1.default({
                type: 'object'
            })(age);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Obj = object

          const object = is<Obj>({ name: 'Kim' });
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var object = library_1.default({
                  type: 'object'
              })({ name: 'Kim' });
            `.trim()
          );
        });
      });
    });
  });
  describe("undefined", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const undef = undefined

        const definitelyUndefined = is<undefined>(undef);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var undef = undefined;
            var definitelyUndefined = library_1.default({
                type: 'undefined'
            })(undef);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const definitelyUndefined = is<undefined>(undefined);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyUndefined = library_1.default({
                  type: 'undefined'
              })(undefined);
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const undef = undefined

        type Undef = undefined

        const definitelyUndefined = is<Undef>(undef);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var undef = undefined;
            var definitelyUndefined = library_1.default({
                type: 'undefined'
            })(undef);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Undef = undefined

          const definitelyUndefined = is<Undef>(undefined);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyUndefined = library_1.default({
                  type: 'undefined'
              })(undefined);
            `.trim()
          );
        });
      });
    });
  });
  describe("null", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const something = null

        const definitelyNull = is<null>(something);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var something = null;
            var definitelyNull = library_1.default({
                type: 'null'
            })(something);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const definitelyNull = is<null>(null);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyNull = library_1.default({
                  type: 'null'
              })(null);
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const something = null

        type Nul = null

        const definitelyNull = is<Nul>(something);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var something = null;
            var definitelyNull = library_1.default({
                type: 'null'
            })(something);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Nul = null

          const definitelyNull = is<Nul>(null);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyNull = library_1.default({
                  type: 'null'
              })(null);
            `.trim()
          );
        });
      });
    });
  });
  describe("void", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const something = null

        const definitelyNil = is<void>(something);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var something = null;
            var definitelyNil = library_1.default({
                anyOf: [
                    { type: 'null' },
                    { type: 'undefined' }
                ]
            })(something);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          const definitelyNil = is<void>(null);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyNil = library_1.default({
                  anyOf: [
                      { type: 'null' },
                      { type: 'undefined' }
                  ]
              })(null);
            `.trim()
          );
        });
      });
    });

    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const something = null

        type Nil = void

        const definitelyNil = is<Nil>(something);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var something = null;
            var definitelyNil = library_1.default({
                anyOf: [
                    { type: 'null' },
                    { type: 'undefined' }
                ]
            })(something);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Nil = void

          const definitelyNil = is<Nil>(null);
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var definitelyNil = library_1.default({
                  anyOf: [
                      { type: 'null' },
                      { type: 'undefined' }
                  ]
              })(null);
            `.trim()
          );
        });
      });
    });
  });
  describe("union", () => {
    describe("inline type", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const name = "Morpheus"

        is<'Morpheus' | 'Kim'>(name);`;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var name = "Morpheus";
            library_1.default({
                anyOf: [
                    {
                        const: 'Morpheus'
                    },
                    {
                        const: 'Kim'
                    }
                ]
            })(name);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          is<'Morpheus' | 'Kim'>("Morpheus");`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              library_1.default({
                  anyOf: [
                      {
                          const: 'Morpheus'
                      },
                      {
                          const: 'Kim'
                      }
                  ]
              })("Morpheus");
            `.trim()
          );
        });
      });
    });
    describe("type reference", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const name = "Morpheus"

        type Name = 'Morpheus' | 'Kim'

        is<Name>(name);`;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var name = "Morpheus";
            library_1.default({
                anyOf: [
                    {
                        const: 'Morpheus'
                    },
                    {
                        const: 'Kim'
                    }
                ]
            })(name);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Name = 'Morpheus' | 'Kim'

          is<Name>("Morpheus");`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              library_1.default({
                  anyOf: [
                      {
                          const: 'Morpheus'
                      },
                      {
                          const: 'Kim'
                      }
                  ]
              })("Morpheus");
            `.trim()
          );
        });
      });
    });
  });
  describe("array", () => {
    describe("[]", () => {
      describe("inline type", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";
  
          const strings = ["foo", "bar"]
  
          is<string[]>(strings);`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var strings = ["foo", "bar"];
              library_1.default({
                  type: 'array',
                  items: {
                      type: 'string'
                  }
              })(strings);
            `.trim()
          );
        });
        describe("inline value", () => {
          const sourceCode = tsCode`
            import is from "@typescript-runtime-schema/library";
  
            is<string[]>(["Morpheus"]);`;
          it("should transform correctly", () => {
            expect(transformer).toTransformSourceCode(
              sourceCode,
              jsCode`
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: true });
                var library_1 = require("@typescript-runtime-schema/library");
                library_1.default({
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                })(["Morpheus"]);
              `.trim()
            );
          });
        });
      });
      describe("type reference", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";
  
          const strings = ["foo", "bar"]
  
          type Strings = string[]
  
          is<Strings>(strings);`;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              var strings = ["foo", "bar"];
              library_1.default({
                  type: 'array',
                  items: {
                      type: 'string'
                  }
              })(strings);
            `.trim()
          );
        });
        describe("inline value", () => {
          const sourceCode = tsCode`
            import is from "@typescript-runtime-schema/library";
  
    
            type Strings = string[]
    
            is<Strings>(["foo", "bar"]);`;
          it("should transform correctly", () => {
            expect(transformer).toTransformSourceCode(
              sourceCode,
              jsCode`
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: true });
                var library_1 = require("@typescript-runtime-schema/library");
                library_1.default({
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                })(["foo", "bar"]);
              `.trim()
            );
          });
        });
      });
    });
  });
  describe("interface", () => {
    describe("type alias", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const person = { name: "Morpheus", age: 21 } as any

        interface Address {
          streetAddress: string
          city: string
        }

        interface Person {
          name: string
          age?: number
          address: Address
        }

        is<Person>(person);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var library_1 = require("@typescript-runtime-schema/library");
            var person = { name: "Morpheus", age: 21 };
            library_1.default({
                type: 'object',
                title: 'Person',
                properties: {
                    name: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    },
                    address: {
                        type: 'object',
                        title: 'Address',
                        properties: {
                            streetAddress: {
                                type: 'string'
                            },
                            city: {
                                type: 'string'
                            }
                        },
                        required: [
                            "streetAddress",
                            "city"
                        ],
                        additionalProperties: false
                    }
                },
                required: [
                    "name",
                    "address"
                ],
                additionalProperties: false
            })(person);
          `.trim()
        );
      });
      describe("inline value", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          type Address = {
            streetAddress: string
            city: string
          }

          interface Person {
            age: number
            address: Address
          }

          is<Person>({ name: "Morpheus", age: 21 });
        `;
        it("should transform correctly", () => {
          expect(transformer).toTransformSourceCode(
            sourceCode,
            jsCode`
              "use strict";
              Object.defineProperty(exports, "__esModule", { value: true });
              var library_1 = require("@typescript-runtime-schema/library");
              library_1.default({
                  type: 'object',
                  title: 'Person',
                  properties: {
                      age: {
                          type: 'number'
                      },
                      address: {
                          type: 'object',
                          properties: {
                              streetAddress: {
                                  type: 'string'
                              },
                              city: {
                                  type: 'string'
                              }
                          },
                          additionalProperties: false
                      }
                  },
                  required: [
                      "age",
                      "address"
                  ],
                  additionalProperties: false
              })({ name: "Morpheus", age: 21 });
            `.trim()
          );
        });
      });
    });
    describe("heritage", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        const person = { name: "Morpheus", age: 21 } as any

        interface Human {
          name: string
        }

        interface Person extends Human {
          gender: string
        }

        is<Person>(person);
      `;
      it("should transform correctly", () => {
        expect(transformer).toTransformSourceCode(
          sourceCode,
          jsCode`
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var library_1 = require("@typescript-runtime-schema/library");
          var person = { name: "Morpheus", age: 21 };
          library_1.default({
              type: 'object',
              title: 'Person',
              properties: {
                  gender: {
                      type: 'string'
                  },
                  name: {
                      type: 'string'
                  }
              },
              required: ["name", "gender"],
              additionalProperties: false
          })(person);
          `.trim()
        );
      });
    });
    describe("import", () => {
      const sourceFiles = {
        "./lib.ts": tsCode`
          import is from "@typescript-runtime-schema/library";
          import {Person} from './person'

          const person = { name: "Morpheus", age: 21 } as any

          is<Person>(person);`.trim(),

        "./person.ts": tsCode`
          interface Human {
            name: string
          }

          export interface Person extends Human {
            gender: string
          }

          export default Person
        `.trim(),
      };
      it("should produce the correct files", () => {
        expect(transformer).toTransformProgram(sourceFiles, {
          "./lib.js": jsCode`
            "use strict";
            exports.__esModule = true;
            var library_1 = require("@typescript-runtime-schema/library");
            var person = { name: "Morpheus", age: 21 };
            library_1["default"]({
                type: 'object',
                title: 'Person',
                properties: {
                    gender: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    }
                },
                required: ["name", "gender"],
                additionalProperties: false
            })(person);
          `.trim(),
        });
      });
    });
  });
  describe("intersection", () => {
    const sourceCode = tsCode`
      import is from "@typescript-runtime-schema/library";

      const person = { name: "Morpheus", age: 21 } as any

      interface Human {
        name: string
      }

      type Person = { age: number } & Human | string

      is<Person>(person);
    `;
    it("should transform correctly", () => {
      expect(transformer).toTransformSourceCode(
        sourceCode,
        jsCode`
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var library_1 = require("@typescript-runtime-schema/library");
          var person = { name: "Morpheus", age: 21 };
          library_1.default({
              anyOf: [
                  {
                      allOf: [
                          {
                              type: 'object',
                              properties: {
                                  age: {
                                      type: 'number'
                                  }
                              },
                              additionalProperties: false
                          },
                          {
                              type: 'object',
                              title: 'Human',
                              properties: {
                                  name: {
                                      type: 'string'
                                  }
                              },
                              required: [
                                  "name"
                              ],
                              additionalProperties: false
                          }
                      ]
                  },
                  {
                      type: 'string'
                  }
              ]
          })(person);
        `.trim()
      );
    });
  });
});
