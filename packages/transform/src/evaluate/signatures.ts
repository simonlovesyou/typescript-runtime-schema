import * as ts from "typescript";
import evaluateOver, { Context } from ".";

export const propertySignature = (
  propertySignatureNode: ts.PropertySignature,
  checker: ts.TypeChecker,
  context: Context
): ts.PropertySignature => {
  const { modifiers, name, questionToken, type } = propertySignatureNode;

  return ts.factory.updatePropertySignature(
    propertySignatureNode,
    modifiers,
    name,
    questionToken,
    evaluateOver<ts.SyntaxKind.TypeReference | ts.KeywordTypeSyntaxKind>(type, checker, context)
  );
};

const MUTATE_MAP = {
  [ts.SyntaxKind.PropertySignature]: propertySignature
};

export default MUTATE_MAP;
