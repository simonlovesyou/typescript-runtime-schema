import * as ts from "typescript";
import mutateUpwards, { Context } from ".";
import { convertTypeToTypeNode } from "@typescript-runtime-schema/compiler-utilities";

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
        );

        const typeSymbol = checker.getTypeFromTypeNode(evaluatedType);

        return ts.factory.createUnionTypeNode(
          Array.from(
            typeSymbol.symbol.members as Map<string, ts.Symbol>
          ).map(([key]) =>
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral(key)
            )
          )
        );
      }

      if (ts.isTypeReferenceNode(type)) {
        const typeSymbol = checker.getTypeFromTypeNode(typeOperatorNode);

        const unionTypeNode = convertTypeToTypeNode(typeSymbol);
        return mutateUpwards<ts.SyntaxKind.UnionType>(
          unionTypeNode,
          checker,
          context
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
