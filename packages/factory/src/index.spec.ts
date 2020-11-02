// jest.mock('typescript', {
//   factory: {
//     createCallExpression: jest.fn()
//     createPropertyAccessExpression: jest.fn()
//     createObjectLiteralExpression: jest.fn()
//     createPropertyAssignment: jest.fn()
//     createIdentifier: jest.fn()
//   }
// })
import {
  createCallExpression,
  createPropertyAccessExpression,
  createObjectLiteralExpression,
  createPropertyAssignment,
  createIdentifier,
} from ".";
import * as ts from "typescript";

describe("factory-utilities", () => {
  describe('createCallExpression', () => {
    it('should be a function', () => {
      expect(createCallExpression).toBeInstanceOf(Function)
    })
  })
  describe('createPropertyAccessExpression,', () => {
    it('should be a function', () => {
      expect(createPropertyAccessExpression).toBeInstanceOf(Function)
    })
  })
  describe('createObjectLiteralExpression', () => {
    it('should be a function', () => {
      expect(createObjectLiteralExpression).toBeInstanceOf(Function)
    })
  })
  describe('createPropertyAssignment', () => {
    it('should be a function', () => {
      expect(createPropertyAssignment).toBeInstanceOf(Function)
    })
  })
  describe('createIdentifier', () => {
    it('should be a function', () => {
      expect(createIdentifier).toBeInstanceOf(Function)
    })
  })
});
