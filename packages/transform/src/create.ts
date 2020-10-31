import * as ts from "typescript";
import { pipe, map, ifElse } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";

export const createSchemaDescriptor = (
  type: ts.StringLiteral | ts.StringLiteral[],
  additionalProperties?: ts.ObjectLiteralElementLike[]
): ts.ObjectLiteralExpression => {
  if (Array.isArray(type)) {
    return pipe(
      () => type,
      map((type) =>
        ts.isObjectLiteralExpression(type) ? type : createSchemaDescriptor(type)
      ),
      factory.createArrayLiteralExpression(true),
      factory.createPropertyAssignment("anyOf"),
      (property) => [property],
      factory.createObjectLiteralExpression(true),
    )();
  }
  return pipe(
    factory.createPropertyAssignment("type"),
    (propertyAssignment) => [
      propertyAssignment,
      ...(additionalProperties || []),
    ],
    factory.createObjectLiteralExpression(true)
  )(type);
};
