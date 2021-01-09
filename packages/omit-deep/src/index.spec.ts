import omitDeep from ".";

describe("omit-deep", () => {
  describe("with only shallow keys", () => {
    const testCase = {
      foo: 1,
      bar: 2,
      baz: 3,
    };
    describe("with single key in filter list", () => {
      const filterList = ["foo"];
      it("should filter out a single shallow keys", () => {
        const expected = {
          bar: 2,
          baz: 3,
        };
        expect(omitDeep(filterList)(testCase)).toEqual(expected);
      });
    });
    describe("with multiple keys in filter list", () => {
      const filterList = ["foo", "bar"];
      it("should filter out multiple shallow keys", () => {
        const expected = {
          baz: 3,
        };
        expect(omitDeep(filterList)(testCase)).toEqual(expected);
      });
    });
  });
  describe("with nested keys", () => {
    const testCase = {
      foo: 1,
      bar: {
        baz: 2,
        qux: 3,
        quux: 4,
      },
    };
    describe("with single nested key in filter list", () => {
      const filterList = ["baz"];
      it("should filter out a single nested key", () => {
        const expected = {
          foo: 1,
          bar: {
            qux: 3,
            quux: 4,
          },
        };
        expect(omitDeep(filterList)(testCase)).toEqual(expected);
      });
    });
    describe("with multiple keys in filter list", () => {
      const filterList = ["qux", "quux"];
      it("should filter out multiple nested keys", () => {
        const expected = {
          foo: 1,
          bar: {
            baz: 2,
          },
        };
        expect(omitDeep(filterList)(testCase)).toEqual(expected);
      });
    });
  });
});
