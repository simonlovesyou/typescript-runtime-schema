import * as ts from "typescript";
import { pipe, anyPass, propEq } from "ramda";

export const addPropertyAccessToIdentifier = (property: ts.Identifier | ts.PrivateIdentifier) => (
  identifier: ts.Expression
) => ts.createPropertyAccess(identifier, property);

export const createCall = (
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[]
) => (expression: ts.Expression) =>
  ts.createCall(expression, typeArguments, argumentsArray);

export const addMethodCallToExpression = (
  methodName: string,
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[] = []
) => (identifier: ts.Expression) =>
  pipe(
    () => identifier,
    addPropertyAccessToIdentifier(ts.factory.createIdentifier(methodName)),
    createCall([], [])
  )();

export const findRootIdentifier = (identifier: ts.Identifier, checker: ts.TypeChecker): ts.Identifier => {
  const symbol = checker.getSymbolAtLocation(identifier)
  debugger;
  const declaration = symbol.declarations[0]

  if(ts.isTypeAliasDeclaration(declaration)) {
    if(ts.isTypeReferenceNode(declaration.type) && ts.isIdentifier(declaration.type.typeName)) {
      return findRootIdentifier(declaration.type.typeName, checker)
    }
    return declaration.name
  }
  if(ts.isVariableDeclaration(declaration)) {
    const initializer = declaration.initializer
    if(!initializer) {
      return identifier
    }
     if(ts.isIdentifier(initializer)) {
      return findRootIdentifier(initializer, checker)
    }
  }
  if(ts.isInterfaceDeclaration(declaration)) {
    return declaration.name
  }
  return identifier
}

export const addDeclarationToSymbol = (symbol: ts.Symbol, node: ts.Declaration, symbolFlags: ts.SymbolFlags) => {
  symbol.flags |= symbolFlags;
  // @ts-ignore
  node.symbol = symbol;

  if (!symbol.declarations) {
      symbol.declarations = [];
  }
  symbol.declarations.push(node);

  if (symbolFlags & ts.SymbolFlags.ExportValue && !symbol.exports) {
    // @ts-ignore
      symbol.exports = {};
  }

  if (symbolFlags & ts.SymbolFlags.ModuleMember && !symbol.members) {
    // @ts-ignore
      symbol.members = {};
  }

  if (symbolFlags & ts.SymbolFlags.Value && !symbol.valueDeclaration) {
      symbol.valueDeclaration = node;
  }
}

export const isKeyword = (node: ts.Node): boolean => {
  return anyPass([
    propEq('kind', ts.SyntaxKind.BreakKeyword),
    propEq('kind', ts.SyntaxKind.CaseKeyword),
    propEq('kind', ts.SyntaxKind.CatchKeyword),
    propEq('kind', ts.SyntaxKind.ClassKeyword),
    propEq('kind', ts.SyntaxKind.ConstKeyword),
    propEq('kind', ts.SyntaxKind.ContinueKeyword),
    propEq('kind', ts.SyntaxKind.DebuggerKeyword),
    propEq('kind', ts.SyntaxKind.DefaultKeyword),
    propEq('kind', ts.SyntaxKind.DeleteKeyword),
    propEq('kind', ts.SyntaxKind.DoKeyword),
    propEq('kind', ts.SyntaxKind.ElseKeyword),
    propEq('kind', ts.SyntaxKind.EnumKeyword),
    propEq('kind', ts.SyntaxKind.ExportKeyword),
    propEq('kind', ts.SyntaxKind.ExtendsKeyword),
    propEq('kind', ts.SyntaxKind.FalseKeyword),
    propEq('kind', ts.SyntaxKind.FinallyKeyword),
    propEq('kind', ts.SyntaxKind.ForKeyword),
    propEq('kind', ts.SyntaxKind.FunctionKeyword),
    propEq('kind', ts.SyntaxKind.IfKeyword),
    propEq('kind', ts.SyntaxKind.ImportKeyword),
    propEq('kind', ts.SyntaxKind.InKeyword),
    propEq('kind', ts.SyntaxKind.InstanceOfKeyword),
    propEq('kind', ts.SyntaxKind.NewKeyword),
    propEq('kind', ts.SyntaxKind.NullKeyword),
    propEq('kind', ts.SyntaxKind.ReturnKeyword),
    propEq('kind', ts.SyntaxKind.SuperKeyword),
    propEq('kind', ts.SyntaxKind.SwitchKeyword),
    propEq('kind', ts.SyntaxKind.ThisKeyword),
    propEq('kind', ts.SyntaxKind.ThrowKeyword),
    propEq('kind', ts.SyntaxKind.TrueKeyword),
    propEq('kind', ts.SyntaxKind.TryKeyword),
    propEq('kind', ts.SyntaxKind.TypeOfKeyword),
    propEq('kind', ts.SyntaxKind.VarKeyword),
    propEq('kind', ts.SyntaxKind.VoidKeyword),
    propEq('kind', ts.SyntaxKind.WhileKeyword),
    propEq('kind', ts.SyntaxKind.WithKeyword),
    propEq('kind', ts.SyntaxKind.ImplementsKeyword),
    propEq('kind', ts.SyntaxKind.InterfaceKeyword),
    propEq('kind', ts.SyntaxKind.LetKeyword),
    propEq('kind', ts.SyntaxKind.PackageKeyword),
    propEq('kind', ts.SyntaxKind.PrivateKeyword),
    propEq('kind', ts.SyntaxKind.ProtectedKeyword),
    propEq('kind', ts.SyntaxKind.PublicKeyword),
    propEq('kind', ts.SyntaxKind.StaticKeyword),
    propEq('kind', ts.SyntaxKind.YieldKeyword),
    propEq('kind', ts.SyntaxKind.AbstractKeyword),
    propEq('kind', ts.SyntaxKind.AsKeyword),
    propEq('kind', ts.SyntaxKind.AssertsKeyword),
    propEq('kind', ts.SyntaxKind.AnyKeyword),
    propEq('kind', ts.SyntaxKind.AsyncKeyword),
    propEq('kind', ts.SyntaxKind.AwaitKeyword),
    propEq('kind', ts.SyntaxKind.BooleanKeyword),
    propEq('kind', ts.SyntaxKind.ConstructorKeyword),
    propEq('kind', ts.SyntaxKind.DeclareKeyword),
    propEq('kind', ts.SyntaxKind.GetKeyword),
    propEq('kind', ts.SyntaxKind.InferKeyword),
    propEq('kind', ts.SyntaxKind.IsKeyword),
    propEq('kind', ts.SyntaxKind.KeyOfKeyword),
    propEq('kind', ts.SyntaxKind.ModuleKeyword),
    propEq('kind', ts.SyntaxKind.NamespaceKeyword),
    propEq('kind', ts.SyntaxKind.NeverKeyword),
    propEq('kind', ts.SyntaxKind.ReadonlyKeyword),
    propEq('kind', ts.SyntaxKind.RequireKeyword),
    propEq('kind', ts.SyntaxKind.NumberKeyword),
    propEq('kind', ts.SyntaxKind.ObjectKeyword),
    propEq('kind', ts.SyntaxKind.SetKeyword),
    propEq('kind', ts.SyntaxKind.StringKeyword),
    propEq('kind', ts.SyntaxKind.SymbolKeyword),
    propEq('kind', ts.SyntaxKind.TypeKeyword),
    propEq('kind', ts.SyntaxKind.UndefinedKeyword),
    propEq('kind', ts.SyntaxKind.UniqueKeyword),
    propEq('kind', ts.SyntaxKind.UnknownKeyword),
    propEq('kind', ts.SyntaxKind.FromKeyword),
    propEq('kind', ts.SyntaxKind.GlobalKeyword),
    propEq('kind', ts.SyntaxKind.BigIntKeyword),
    propEq('kind', ts.SyntaxKind.OfKeyword),
    propEq('kind', ts.SyntaxKind.FirstKeyword),
    propEq('kind', ts.SyntaxKind.LastKeyword),
  ])(node)
}