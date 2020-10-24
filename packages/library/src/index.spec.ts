import * as library from '.'

describe('library', () => {
  it('should export "string"', () => {
    expect(library.string).toBeDefined()
  })
  it('should export "any"', () => {
    expect(library.any).toBeDefined()
  })
})