import * as ts from "typescript";
import { tsquery } from "@phenomnomnominal/tsquery";
import { pipe, last } from "ramda";
import {
  findRootIdentifier,
  isKeyword,
} from "@typescript-runtime-schema/compiler-utilities";
import * as factory from "@typescript-runtime-schema/factory";
import getArbitraryNodeName from "@typescript-runtime-schema/get-arbitrary-node-name";

interface TransformerOptions {}

const keywordConstraintMap = new Map([
  [
    ts.SyntaxKind.StringKeyword,
    pipe(
      () => ts.factory.createStringLiteral("string"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.NumberKeyword,
    pipe(
      () => ts.factory.createStringLiteral("number"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.BooleanKeyword,
    pipe(
      () => ts.factory.createStringLiteral("boolean"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.ObjectKeyword,
    pipe(
      () => ts.factory.createStringLiteral("object"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.AnyKeyword,
    pipe(
      () => ts.factory.createStringLiteral("any"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.UndefinedKeyword,
    pipe(
      () => ts.factory.createStringLiteral("undefined"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
  [
    ts.SyntaxKind.NullKeyword,
    pipe(
      () => ts.factory.createStringLiteral("null"),
      factory.createPropertyAssignment("type"),
      (propertyAssignment) =>
        factory.createObjectLiteralExpression(false)([propertyAssignment])
    )(),
  ],
]);

const parseKeywordWithExpression = (
  keywordKind: ts.SyntaxKind
): ts.Expression => {
  if (keywordKind === ts.SyntaxKind.VoidKeyword) {
    return ts.factory.createArrayLiteralExpression(
      [
        parseKeywordWithExpression(ts.SyntaxKind.NullKeyword),
        parseKeywordWithExpression(ts.SyntaxKind.UndefinedKeyword),
      ],
      false
    );
  }
  return keywordConstraintMap.get(keywordKind);
};

const parseLibraryTypeAliasDeclaration = (
  typeAliasDeclaration: ts.TypeAliasDeclaration
): ts.Expression => {
  const type = typeAliasDeclaration.type;
  if (ts.isLiteralTypeNode(type)) {
    const parsedExpression = parseKeywordWithExpression(type.literal.kind);

    if (!parsedExpression) {
      throw new Error(
        `Cannot parse keyword kind ${getArbitraryNodeName(
          typeAliasDeclaration.type
        )}`
      );
    }
    return parsedExpression;
  }
  const parsedExpression = parseKeywordWithExpression(type.kind);
  if (!parsedExpression) {
    throw new Error(
      `Cannot parse keyword kind ${getArbitraryNodeName(
        typeAliasDeclaration.type
      )}`
    );
  }
  return parsedExpression;
};

const parseTypeLiteral = (typeLiteral: ts.TypeLiteralNode, checker: ts.TypeChecker): ts.Expression => {
  const members = typeLiteral.members;

  return factory.createObjectLiteralExpression(true)([
    ...members.map((member) => {
      if (ts.isPropertySignature(member)) {
        if (ts.isTypeLiteralNode(member.type)) {
          return ts.factory.createPropertyAssignment(
            member.name,
            parseTypeLiteral(member.type, checker)
          );
        }
        if (ts.isInterfaceDeclaration(member.type)) {
          return ts.factory.createPropertyAssignment(
            member.name,
            parseInterfaceDeclaration(member.type, checker)
          );
        }
        if(ts.isTypeReferenceNode(member.type)) {
          const name = member.type.typeName as ts.Identifier
          const rootIdentifier = findRootIdentifier(name, checker)

          const parent = rootIdentifier.parent
          if(ts.isTypeAliasDeclaration(parent)) {
            return ts.factory.createPropertyAssignment(
              member.name,
              parseLibraryTypeAliasDeclaration(parent)
            );
          }
          if(ts.isInterfaceDeclaration(parent)) {
            return ts.factory.createPropertyAssignment(
              member.name,
              factory.createObjectLiteralExpression(true)([
                factory.createPropertyAssignment("type")(
                  ts.factory.createStringLiteral("object")
                ),
                factory.createPropertyAssignment("properties")(
                  parseInterfaceDeclaration(parent, checker)
                ),
              ])
            );
          }
        }
        return ts.factory.createPropertyAssignment(
          member.name,
          parseKeywordWithExpression(member.type.kind)
        );
      }
    }),
  ]);
};

const parseInterfaceDeclaration = (
  interfaceDeclaration: ts.InterfaceDeclaration,
  checker: ts.TypeChecker
): ts.Expression => {
  const members = interfaceDeclaration.members;

  return factory.createObjectLiteralExpression(true)([
    factory.createPropertyAssignment("type")(
      ts.factory.createStringLiteral("object")
    ),
    factory.createPropertyAssignment("properties")(
      factory.createObjectLiteralExpression(true)([
        ...members.map((member) => {
          if (ts.isPropertySignature(member)) {
            if (ts.isTypeLiteralNode(member.type)) {
              return ts.factory.createPropertyAssignment(
                member.name,
                factory.createObjectLiteralExpression(true)([
                  factory.createPropertyAssignment("type")(
                    ts.factory.createStringLiteral("object")
                  ),
                  factory.createPropertyAssignment("properties")(
                    parseTypeLiteral(member.type, checker)
                  ),
                ])
              );
            }
            if (ts.isInterfaceDeclaration(member.type)) {
              debugger;
              return ts.factory.createPropertyAssignment(
                member.name,
                parseInterfaceDeclaration(member.type, checker)
              );
            }
            if(ts.isUnionTypeNode(member.type)) {
              console.log("Member type!")
            }
            if(ts.isTypeReferenceNode(member.type)) {
              const name = member.type.typeName as ts.Identifier
              const rootIdentifier = findRootIdentifier(name, checker)

              const parent = rootIdentifier.parent
              debugger;
              if(ts.isTypeAliasDeclaration(parent)) {
                return ts.factory.createPropertyAssignment(
                  member.name,
                  parseLibraryTypeAliasDeclaration(parent)
                );
              }
              if(ts.isInterfaceDeclaration(parent)) {
                return ts.factory.createPropertyAssignment(
                  member.name,
                  factory.createObjectLiteralExpression(true)([
                    factory.createPropertyAssignment("type")(
                      ts.factory.createStringLiteral("object")
                    ),
                    factory.createPropertyAssignment("properties")(
                      parseInterfaceDeclaration(parent, checker)
                    ),
                  ])
                );
              }
            }
            return ts.factory.createPropertyAssignment(
              member.name,
              parseKeywordWithExpression(member.type.kind)
            );
          }
        }),
      ])
    ),
  ]);
};

const findCallExpressionIdentifier = (
  node: ts.CallExpression
): ts.Identifier | undefined => {
  const children = node.getChildren();

  return children.find((node) => {
    if (ts.isIdentifier(node)) {
      return node;
    }
    if (ts.isPropertyAccessExpression(node)) {
      const identifiers = tsquery<ts.Identifier>(node, "Identifier");
      return last(identifiers);
    }
    return false;
  }) as ts.Identifier | undefined;
};

const findLibraryIdentifier = (node: ts.Node): ts.Identifier | undefined => {
  if (ts.isImportDeclaration(node)) {
    return tsquery<ts.Identifier>(node, 'Identifier[escapedText="is"]')[0];
  }
};

const findSchemaIdentifiers = (node: ts.Node): ts.Identifier[] | undefined => {
  if (
    ts.isImportDeclaration(node) &&
    node.getFullText().includes('from "@typescript-runtime-schema/schemas";')
  ) {
    return tsquery(node, "Identifier") as ts.Identifier[] | undefined;
  }
};

const generateSchemaByIdentifer = (identifier: ts.Identifier, checker: ts.TypeChecker) => {
  if (ts.isTypeAliasDeclaration(identifier.parent)) {
    return parseLibraryTypeAliasDeclaration(identifier.parent);
  }
  if (ts.isInterfaceDeclaration(identifier.parent)) {
    return parseInterfaceDeclaration(identifier.parent, checker);
  }

  throw new Error(
    `Cannot generate schema for ${getArbitraryNodeName(identifier.parent)}`
  );
};

const createVisitor = (program: ts.Program) => (
  ctx: ts.TransformationContext,
  sourceFile: ts.SourceFile
) => {
  const checker = program.getTypeChecker();
  let libraryIdentifier: ts.Identifier | undefined = undefined;
  let schemaIdentifiers: ts.Identifier[] | undefined = undefined;
  const visitor: ts.Visitor = (node: ts.Node) => {
    libraryIdentifier = libraryIdentifier || findLibraryIdentifier(node);
    schemaIdentifiers = schemaIdentifiers || findSchemaIdentifiers(node);
    // @ts-ignore
    node._name = getArbitraryNodeName(node);

    if (ts.isCallExpression(node)) {
      const callExpression = node;
      const callExpressionIdentifier = findCallExpressionIdentifier(
        callExpression
      );
      const rootIdentifier = findRootIdentifier(
        callExpressionIdentifier,
        checker
      );

      if (rootIdentifier.escapedText === libraryIdentifier.escapedText) {
        const { typeArguments, arguments: args } = callExpression;
        const [typeArgument] = typeArguments;
        const typeArgumentLiteral = (typeArgument as ts.LiteralTypeNode)
          .literal;
        if (
          isKeyword(typeArgument) ||
          (typeArgumentLiteral && isKeyword(typeArgumentLiteral))
        ) {
          return pipe(
            factory.updateCallExpression(callExpressionIdentifier, undefined, [
              parseKeywordWithExpression(
                typeArgumentLiteral && isKeyword(typeArgumentLiteral)
                  ? typeArgumentLiteral.kind
                  : typeArgument.kind
              ),
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
        if (ts.isUnionTypeNode(typeArgument)) {
          const types = typeArgument.types;
          const typeIdentifiers = types.map(
            (type) =>
              tsquery(type, "Identifier")[0] as ts.Identifier | undefined
          );
          const rootTypeArgumentIdentifiers = typeIdentifiers.map(
            (typeIdentifier): ts.Identifier | undefined =>
              typeIdentifier === undefined
                ? typeIdentifier
                : findRootIdentifier(typeIdentifier, checker)
          );
          const schemas = rootTypeArgumentIdentifiers.map(
            (rootTypeArgumentIdentifier, index) => {
              const type = types[index];
              if (rootTypeArgumentIdentifier === undefined) {
                if (isKeyword(type)) {
                  return parseKeywordWithExpression(type.kind);
                }
                if (ts.isLiteralTypeNode(type)) {
                  return parseKeywordWithExpression(type.literal.kind);
                }
              }
              return generateSchemaByIdentifer(rootTypeArgumentIdentifier, checker);
            }
          );
          return pipe(
            factory.updateCallExpression(callExpressionIdentifier, undefined, [
              ts.factory.createArrayLiteralExpression(schemas),
            ]),
            factory.createCallExpression(undefined, args)
          )(callExpression);
        }
        // Retrieves the first type argument identifier (assuming there's only one for now)
        const typeArgumentIdentifier = tsquery(
          typeArgument,
          "Identifier"
        )[0] as ts.Identifier;

        const rootTypeArgumentIdentifier = findRootIdentifier(
          typeArgumentIdentifier,
          checker
        );
        rootTypeArgumentIdentifier.parent;

        return pipe(
          factory.updateCallExpression(callExpressionIdentifier, undefined, [
            generateSchemaByIdentifer(rootTypeArgumentIdentifier, checker),
          ]),
          factory.createCallExpression(undefined, args)
        )(callExpression);
      }
      return node;
    }
    return ts.visitEachChild(node, visitor, ctx);
  };
  return visitor;
};

const transformer = (program: ts.Program, opts?: TransformerOptions) => {
  const visitor = createVisitor(program);

  return (TransformationContext: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) =>
      ts.visitNode(sourceFile, visitor(TransformationContext, sourceFile));
  };
};

export default transformer;
