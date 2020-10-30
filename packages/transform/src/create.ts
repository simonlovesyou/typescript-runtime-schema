import * as ts from "typescript";
import { pipe } from "ramda";
import * as factory from "@typescript-runtime-schema/factory";

export const createSchemaDescriptor = (type: string, additionalProperties?: ts.ObjectLiteralElementLike[]) => pipe(
  () => ts.factory.createStringLiteral(type),
  factory.createPropertyAssignment("type"),
  propertyAssignment => [propertyAssignment, ...(additionalProperties || [])],
  factory.createObjectLiteralExpression(true)
)()