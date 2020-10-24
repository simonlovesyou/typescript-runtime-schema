import getArbitraryNodeName from ".";
import * as ts from "typescript";

describe("getArbitraryNodeName", () => {
  describe("when a Node is passed as argument", () => {
    const node = ts.createIdentifier("hello")

    it("should return the node name", () => {
      expect(getArbitraryNodeName(node)).toBe('Identifier');
    });
  });
});
