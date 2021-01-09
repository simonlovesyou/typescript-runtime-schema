const fakeValidateFunction = jest.fn().mockImplementation(() => ({
  valid: true,
}));

jest.mock("jsonschema", () => ({
  Validator: jest.fn().mockImplementation(() => ({
    validate: fakeValidateFunction,
  })),
}));

import is from ".";

describe("is", () => {
  describe("when called", () => {
    const schema = { type: "number" };
    //@ts-ignore
    const result = is(schema);
    it("should return a function", () => {
      expect(result).toBeInstanceOf(Function);
    });
    describe("when the returned function is called", () => {
      const something = Symbol("something unique");
      const validationResult = result(something);
      it("should call the Validator#validate function of `jsonschema`", () => {
        expect(fakeValidateFunction).toHaveBeenCalledWith(something, schema);
        expect(fakeValidateFunction).toHaveBeenCalledTimes(1);
      });
      it('should return the results of Validator#validate function', () => {
        expect(validationResult).toBe(true)
      })
    });
  });
});
