import {
  addPropertyAccessToIdentifier,
  createCall,
  addMethodCallToExpression,
} from ".";
import * as ts from "typescript";

describe("compiler-utilities", () => {
  describe('createCall', () => {
    it('should be exported', () => {
      expect(createCall).toBeDefined()
    })
  })
});
