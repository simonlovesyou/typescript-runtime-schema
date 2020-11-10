import {
  addPropertyAccessToIdentifier,
  createCall,
  addMethodCallToExpression,
  createObjectLiteralFrom,
  mergeObjectLiteralsRecursivelyLeft,
} from ".";
import * as ts from "typescript";
import "@typescript-runtime-schema/expect-node-to-equal-source-code";

describe("compiler-utilities", () => {
  describe("createCall", () => {
    it("should be exported", () => {
      expect(createCall).toBeDefined();
    });
  });
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
});
