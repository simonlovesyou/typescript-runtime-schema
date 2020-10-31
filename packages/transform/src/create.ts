import * as ts from "typescript";
import { pipe, ifElse } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";

export const createSchemaDescriptor = (type: ts.StringLiteral | ts.StringLiteral[], additionalProperties?: ts.ObjectLiteralElementLike[]) => pipe(
  ifElse(
    Array.isArray,
    () => factory.createArrayLiteralExpression()(type as ts.StringLiteral[]),
    literal => literal,
  ),
  factory.createPropertyAssignment("type"),
  propertyAssignment => [propertyAssignment, ...(additionalProperties || [])],
  factory.createObjectLiteralExpression(true)
)(type)