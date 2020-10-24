import {
  addPropertyAccessToIdentifier,
  createCall,
  addMethodCallToExpression,
} from ".";
import "@typescript-runtime-schema/expect-to-be-compiled-to";
import * as ts from "typescript";

describe("compiler-utilities", () => {
  describe('createCall', () => {
    it('should be exported', () => {
      expect(createCall).toBeDefined()
    })
  })
});
