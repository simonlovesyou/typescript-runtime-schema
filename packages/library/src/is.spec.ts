import is from ".";
import Joi from "joi";

describe("is", () => {
  describe("string", () => {
    const schemaDescriptor = { type: "string" };
    it("should validate a string", () => {
      //@ts-ignore
      expect(is(schemaDescriptor)("foo")).toBe(true);
    });
    it("should validate an empty string", () => {
      //@ts-ignore
      expect(is(schemaDescriptor)("")).toBe(true);
    });
    it("should NOT validate null", () => {
      //@ts-ignore
      expect(is(schemaDescriptor)(null)).toBe(false);
    });
    it("should validate undefined", () => {
      //@ts-ignore
      expect(is(schemaDescriptor)(undefined)).toBe(true);
    });
  });
});
