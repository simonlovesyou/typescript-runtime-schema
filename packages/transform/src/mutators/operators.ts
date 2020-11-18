import * as ts from "typescript";
import mutateUpwards from ".";
import { convertTypeToTypeNode } from '@typescript-runtime-schema/compiler-utilities'

const typeOperator = (
  typeOperatorNode: ts.TypeOperatorNode,
  checker: ts.TypeChecker
) => {
  switch (typeOperatorNode.operator) {
    case ts.SyntaxKind.KeyOfKeyword: {
      const type = typeOperatorNode.type;

      if (ts.isTypeReferenceNode(type)) {
        const typeSymbol = checker.getTypeFromTypeNode(typeOperatorNode);

        debugger;
        const unionTypeNode = convertTypeToTypeNode(typeSymbol)
        debugger;
        return mutateUpwards<ts.SyntaxKind.UnionType>(unionTypeNode, checker)
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
