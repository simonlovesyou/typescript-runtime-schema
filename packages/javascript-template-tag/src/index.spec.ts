import js from '.'

describe("javascript-template-tag", () => {
  it('should return the same string if the code is valid', () => {
    expect(js`"foo";`).toBe(`"foo";`)
    expect(js`const foo = "foo";`).toBe(`const foo = "foo";`)
  })
  it('should throw if the code is not valid', () => {
    expect(() => js`{{{{((()))}}}};`).toThrow()
  })
});
