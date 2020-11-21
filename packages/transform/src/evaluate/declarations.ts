import * as ts from "typescript";
import evaluateOver, { Context } from ".";

const typeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration,
  checker: ts.TypeChecker,
  context: Context
): ts.TypeNode => {
  if (typeAliasDeclaration.typeParameters) {
    const typeArgumentMap = typeAliasDeclaration.typeParameters.reduce(
      (map, typeParameter, index) => {
        map.set(
          String(typeParameter.name.escapedText),
          context.typeArguments[index]
        );
        return map;
      },
      new Map<string, ts.TypeNode>()
    );
    const type = typeAliasDeclaration.type;
    return evaluateOver(type, checker, {
      ...context,
      typeArgumentMap,
    });
  }

  return evaluateOver(typeAliasDeclaration.type, checker, context);
};

const typeParameterDeclaration = (
  typeParameter: ts.TypeParameterDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  const evaluatedConstraint = evaluateOver<ts.SyntaxKind.TypeReference>(
    typeParameter.constraint,
    checker,
    context
  );

  return ts.factory.updateTypeParameterDeclaration(
    typeParameter,
    typeParameter.name,
    evaluatedConstraint,
    typeParameter.default
  );
};

const EVALUATE_MAP = {
  [ts.SyntaxKind.TypeAliasDeclaration]: typeAliasDeclaration,
  [ts.SyntaxKind.TypeParameter]: typeParameterDeclaration,
};

export default EVALUATE_MAP;
