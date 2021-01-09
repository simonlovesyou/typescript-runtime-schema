import * as ts from "typescript";
import mutateUpwards, { Context } from ".";
import {
  convertTypeToTypeNode,
  findRootIdentifier,
} from "@typescript-runtime-schema/compiler-utilities";
import evaluateOver from ".";
import { cloneNode } from "@wessberg/ts-clone-node";

const typeOperator = (
  typeOperatorNode: ts.TypeOperatorNode,
  checker: ts.TypeChecker,
  context: Context
) => {
  switch (typeOperatorNode.operator) {
    case ts.SyntaxKind.KeyOfKeyword: {
      const type = typeOperatorNode.type;

      const someTypeSymbol = checker.getTypeAtLocation(type).symbol;
      if (
        someTypeSymbol !== undefined &&
        ts.SymbolFlags.TypeParameter === someTypeSymbol.flags
      ) {
        const evaluatedType = mutateUpwards<ts.SyntaxKind.TypeReference>(
          type,
          checker,
          context
        ) as ts.TypeLiteralNode;

        return ts.factory.createUnionTypeNode(
          evaluatedType.members.map((member: ts.PropertySignature) => {
            if (ts.isStringLiteral(member.name)) {
              return ts.factory.createLiteralTypeNode(cloneNode(member.name));
            }
            if (ts.isIdentifier(member.name)) {
              return ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(String(member.name.escapedText))
              );
            }
          })
        );
      }
    }
    default: {
      throw new Error(
        `Type operator with SyntaxKind ${typeOperatorNode.operator} is not yet supported`
      );
    }
  }
};

const MUTATE_MAP = {
  [ts.SyntaxKind.TypeOperator]: typeOperator,
};

export default MUTATE_MAP;
