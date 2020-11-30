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
    describe("import", () => {
      const sourceFiles = {
        "./lib.ts": tsCode`
          import is from "@typescript-runtime-schema/library";
          import Human from './human'

          const person = { name: "Morpheus", age: 21 } as any

          is<Human>(person);`.trim(),

        "./human.ts": tsCode`
          interface Animal {
            type: 'vertebrates' | 'invertebrates'
          }

          interface Human extends Animal {
            name: string
          }

          export default Human
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
                title: 'Human',
                properties: {
                    name: {
                        type: 'string'
                    },
                    type: {
                        anyOf: [
                            {
                                "const": 'vertebrates'
                            },
                            {
                                "const": 'invertebrates'
                            }
                        ]
                    }
                },
                required: ["type", "name"],
                additionalProperties: false
            })(person);
          `.trim(),
        });
      });
    });
  });
  describe("array", () => {
    describe("[]", () => {
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
  describe("heritage", () => {
    const sourceCode = tsCode`
      import is from "@typescript-runtime-schema/library";

      const person = { name: "Morpheus", age: 21 } as any

      interface Human {
        name: string
      }

      interface Animal {
        hasTail: boolean
      }

      interface Person extends Human extends Animal {
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
                  },
                  hasTail: {
                      type: 'boolean'
                  }
              },
              required: ["hasTail", "name", "gender"],
              additionalProperties: false
          })(person);
        `.trim()
      );
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
      describe("index signature", () => {
        const sourceCode = tsCode`
          import is from "@typescript-runtime-schema/library";

          interface StringMap { [index: string]: string }

          is<StringMap>({"string": "string"});
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
                  title: 'StringMap',
                  propertyNames: {
                      type: 'string'
                  },
                  additionalProperties: true
              })({ "string": "string" });
            `.trim()
          );
        });
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
                      type: 'object',
                      title: 'Human',
                      properties: {
                          name: {
                              type: 'string'
                          },
                          age: {
                              type: 'number'
                          }
                      },
                      required: ["age", "name"],
                      additionalProperties: false,
                      minProperties: 1
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
  describe("tuple", () => {
    const sourceCode = tsCode`
      import is from "@typescript-runtime-schema/library";

      const strings = ["foo", "bar"]

      type Address = [number, string, 'Street' | 'Avenue' | 'Boulevard']

      is<Address>(strings);
    `;

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
              items: [
                  {
                      type: 'number'
                  },
                  {
                      type: 'string'
                  },
                  {
                      anyOf: [
                          {
                              const: 'Street'
                          },
                          {
                              const: 'Avenue'
                          },
                          {
                              const: 'Boulevard'
                          }
                      ]
                  }
              ],
              additionalItems: false
          })(strings);
        `.trim()
      );
    });
  });
  describe("object literal", () => {
    describe("index signature", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type StringMap = { [index: string]: string }

        is<StringMap>({"string": "string"});
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
                propertyNames: {
                    type: 'string'
                },
                additionalProperties: {
                    type: 'string'
                },
                minProperties: 1
            })({ "string": "string" });
          `.trim()
        );
      });
    });
  });
  describe("keyof operator", () => {
    describe("inline", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { 42: number, name: string }

        is<keyof Person>("string");
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
                        const: 42
                    },
                    {
                        const: 'name'
                    }
                ]
            })("string");
          `.trim()
        );
      });
    });
  });
  describe("utility types", () => {
    describe("Record", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type StringMap = Record<number | string, string>

        is<StringMap>({whatever: "string"});
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
                propertyNames: {
                    anyOf: [
                        {
                            type: 'number'
                        },
                        {
                            type: 'string'
                        }
                    ]
                },
                additionalProperties: {
                    anyOf: [
                        {
                            type: 'string'
                        }
                    ]
                },
                minProperties: 1
            })({ whatever: "string" });
          `.trim()
        );
      });
    });
    describe("Partial", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { name: string, age: number }

        is<Partial<Person>>({ whatever: "string" });
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
                properties: {
                    name: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    }
                },
                minProperties: 1,
                required: []
            })({ whatever: "string" });
          `.trim()
        );
      });
    });
    describe("Array", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { name: string, age: number }

        is<Array<Person>>({ whatever: "string" });
      `;
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
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string'
                        },
                        age: {
                            type: 'number'
                        }
                    },
                    minProperties: 1,
                    required: [
                        "name",
                        "age"
                    ]
                }
            })({ whatever: "string" });
          `.trim()
        );
      });
    });
    describe("Pick", () => {
      const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { name: string, age: number, length: number }

        is<Pick<Person, 'name' | 'age'>>({ whatever: "string" });
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
                properties: {
                    name: {
                        type: 'string'
                    },
                    age: {
                        type: 'number'
                    }
                },
                minProperties: 1,
                required: [
                    "name",
                    "age"
                ]
            })({ whatever: "string" });
          `.trim()
        );
      });
    });
    describe("Exclude", () => {
      describe("literal type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type SomeKeys = 'name' | 'age' | 'length'

        is<Exclude<SomeKeys, 'length'>>({ whatever: "string" });
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
                          const: 'name'
                      },
                      {
                          const: 'age'
                      }
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
      describe("union type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type SomeKeys = 'name' | 'age' | 'length'

        is<Exclude<SomeKeys, 'length' | 'age'>>({ whatever: "string" });
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
                          const: 'name'
                      }
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
    });
    describe("Extract", () => {
      describe("literal type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type SomeKeys = 'name' | 'age' | 'length'

        is<Extract<SomeKeys, 'length'>>({ whatever: "string" });
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
                          const: 'length'
                      }
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
      describe("union type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type SomeKeys = 'name' | 'age' | 'length'

        is<Extract<SomeKeys, 'length' | 'age'>>({ whatever: "string" });
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
                          const: 'age'
                      },
                      {
                          const: 'length'
                      }
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
    });
    describe("Pick", () => {
      describe("literal type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { name: string, age: number, length: number }

        is<Pick<Person, 'name' | 'age'>>({ whatever: "string" });
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
                  properties: {
                      name: {
                          type: 'string'
                      },
                      age: {
                          type: 'number'
                      }
                  },
                  minProperties: 1,
                  required: [
                      "name",
                      "age"
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
    });
    describe("Omit", () => {
      describe("literal type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        type Person = { name: string, age: number, length: number }

        is<Omit<Person, 'length' | 'age'>>({ whatever: "string" });
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
                  properties: {
                      name: {
                          type: 'string'
                      }
                  },
                  minProperties: 1,
                  required: [
                      "name"
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
    });
    describe("NonNullable", () => {
      describe("literal type argument", () => {
        const sourceCode = tsCode`
        import is from "@typescript-runtime-schema/library";

        is<NonNullable<'length' | 'age' | null>>({ whatever: "string" });
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
                          const: 'length'
                      },
                      {
                          const: 'age'
                      }
                  ]
              })({ whatever: "string" });
          `.trim()
          );
        });
      });
    });
  });
});
