import createStringValidator from ".";
import * as ts from 'typescript'
import "@typescript-runtime-schema/expect-to-be-compiled-to";

describe("createStringValidator", () => {
  describe("when an empty options object is passed", () => {
    it("should create the correct output", () => {
      expect(createStringValidator({})).toBeCompiledTo("Joi.string()");
    });
  });
  describe("when a non-empty options object is passed", () => {
    it("should create the correct output", () => {
      expect(createStringValidator({})).toBeCompiledTo("Joi.string()");
    });
  });
});
