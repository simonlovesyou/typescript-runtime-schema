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
