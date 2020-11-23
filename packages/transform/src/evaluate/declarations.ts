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
    return evaluateOver<ts.KeywordTypeSyntaxKind>(type, checker, {
      ...context,
      typeArgumentMap,
    });
  }

  return evaluateOver<ts.KeywordTypeSyntaxKind>(typeAliasDeclaration.type, checker, context);
};

const typeParameterDeclaration = (
  typeParameter: ts.TypeParameterDeclaration,
  checker: ts.TypeChecker,
  context: Context
) => {
  if (typeParameter.constraint) {
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
  }

  return typeParameter;
};

const interfaceDeclaration = (
  interfaceDeclarationNode: ts.InterfaceDeclaration,
  checker: ts.TypeChecker,
  context: Context
): ts.InterfaceDeclaration => {
  const {
    decorators,
    modifiers,
    name,
    typeParameters,
    heritageClauses,
  } = interfaceDeclarationNode;

  if (typeParameters) {
    const typeArgumentMap =
      context.typeArgumentMap || new Map<string, ts.TypeNode>();

    typeParameters.forEach((typeParameter) => {
      // TODO: We have to figure out the order here from the context somehow
      typeArgumentMap.set(
        String(typeParameter.name.escapedText),
        context.typeArguments[0]
      );
    });

    return ts.factory.updateInterfaceDeclaration(
      interfaceDeclarationNode,
      decorators,
      modifiers,
      name,
      [],
      heritageClauses,
      interfaceDeclarationNode.members.map((member) =>
        evaluateOver<ts.SyntaxKind.PropertySignature>(member, checker, {
          ...context,
        })
      )
    );
  }

  return ts.factory.updateInterfaceDeclaration(
    interfaceDeclarationNode,
    decorators,
    modifiers,
    name,
    [],
    heritageClauses,
    interfaceDeclarationNode.members.map((member) =>
      evaluateOver<ts.SyntaxKind.PropertySignature>(member, checker, context)
    )
  );
};

const EVALUATE_MAP = {
  [ts.SyntaxKind.TypeAliasDeclaration]: typeAliasDeclaration,
  [ts.SyntaxKind.TypeParameter]: typeParameterDeclaration,
  [ts.SyntaxKind.InterfaceDeclaration]: interfaceDeclaration,
};

export default EVALUATE_MAP;
