import {
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
  convertTypeToTypeNode
} from ".";
import * as ts from "typescript";
import "@typescript-runtime-schema/expect-node-to-equal-source-code";

describe("compiler-utilities", () => {
  describe("mergeObjectLiteralsRecursivelyLeft", () => {
    describe("similar nested object literals", () => {
      const objectLiteralA = createObjectLiteralFrom({
        foo: "foo",
        bar: {
          quz: "should be overwritten",
        },
      });
      const objectLiteralB = createObjectLiteralFrom({
        foo: "foo",
        bar: {
          quz: "quux",
          another: "prop",
        },
      });
      it("should produce the correct output", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralA, objectLiteralB)
        ).toEqualSourceCode(
          "{ foo: 'foo', bar: { quz: 'quux', another: 'prop' } }"
        );
      });
    });
    describe("somewhat different object literals", () => {
      const objectLiteralA = createObjectLiteralFrom({
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      });
      const objectLiteralB = createObjectLiteralFrom({
        type: "object",
        properties: {
          type: {
            anyOf: [
              {
                const: "vertebrate",
              },
              {
                const: "invertebrate",
              },
            ],
          },
        },
      });
      it("should produce the correct output", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralB, objectLiteralA)
        ).toEqualSourceCode(
          `{ type: 'object', properties: { name: { type: 'string' }, type: { anyOf: [{ "const": 'vertebrate' }, { "const": 'invertebrate' }] } } }`
        );
      });
    });
    describe("not similar values for key", () => {
      const objectLiteralA = createObjectLiteralFrom({
        foo: "foo",
        bar: {
          quz: "should be overwritten",
        },
      });
      const objectLiteralB = createObjectLiteralFrom({
        foo: "foo",
        bar: "bar",
      });
      it("should take the value from left", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralA, objectLiteralB)
        ).toEqualSourceCode("{ foo: 'foo', bar: 'bar' }");
      });
    });
    describe("unique keys", () => {
      const objectLiteralA = createObjectLiteralFrom({
        foo: "foo",
      });
      const objectLiteralB = createObjectLiteralFrom({
        bar: "bar",
      });
      it("should merge the keys", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralA, objectLiteralB)
        ).toEqualSourceCode("{ bar: 'bar', foo: 'foo' }");
      });
    });
    describe("nested object literals", () => {
      const objectLiteralA = createObjectLiteralFrom({
        foo: {
          bar: {
            quz: "quz",
          },
        },
      });
      const objectLiteralB = createObjectLiteralFrom({
        foo: {
          bar: {
            bar: "bar",
          },
        },
      });
      it("should merge the keys", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralA, objectLiteralB)
        ).toEqualSourceCode("{ foo: { bar: { bar: 'bar', quz: 'quz' } } }");
      });
    });
    describe("arrays", () => {
      const objectLiteralA = createObjectLiteralFrom({
        foo: "foo",
        bar: [1],
      });
      const objectLiteralB = createObjectLiteralFrom({
        foo: "foo",
        bar: [2, 3],
      });
      it("should join the arrays", () => {
        expect(
          mergeObjectLiteralsRecursivelyLeft(objectLiteralA, objectLiteralB)
        ).toEqualSourceCode("{ foo: 'foo', bar: [1, 2, 3] }");
      });
    });
  });
  describe('convertTypeToTypeNode', () => {
    // Couldn't bother figuring out how to unit test this properly
    describe('typeObject describing a union type node', () => {
      const typeObject: any = {
        aliasSymbol: undefined,
        aliasTypeArguments: undefined,
        checker: {},
        flags: 1048576,
        id: 81,
        objectFlags: 262144,
        types: [{
          checker: {},
          flags: 256,
          freshType: {},
          id: 78,
          regularType: {},
          symbol: undefined,
          value: 42,
          typeArguments: undefined,
        }, {
          checker: {},
          flags: 128,
          id: 80,
          regularType: {},
          symbol: undefined,
          value: "name",
        }],
        symbol: undefined,
        value: "name",
      }
      it('should return a union type node', () => {
        expect(ts.isUnionTypeNode(convertTypeToTypeNode(typeObject))).toBe(true)
      })
      it('should return two types', () => {
        const unionTypeNode = convertTypeToTypeNode(typeObject) as ts.UnionTypeNode
        expect(unionTypeNode.types).toHaveLength(2)
      })
      it('first type should be numeric literal', () => {
        const unionTypeNode = convertTypeToTypeNode(typeObject) as ts.UnionTypeNode
        const firstMember = unionTypeNode.types[0]
        expect(ts.isLiteralTypeNode(firstMember)).toBe(true)
        expect(ts.isNumericLiteral((firstMember as ts.LiteralTypeNode).literal)).toBe(true)
      })
      it('second type should be string literal', () => {
        const unionTypeNode = convertTypeToTypeNode(typeObject) as ts.UnionTypeNode
        const secondMember = unionTypeNode.types[1]
        expect(ts.isLiteralTypeNode(secondMember)).toBe(true)
        expect(ts.isStringLiteral((secondMember as ts.LiteralTypeNode).literal)).toBe(true)
      })
    })
  })
});
