import { string } from "joi";
import * as ts from "typescript";
import { pipe, identity, } from "ramda";

interface UUID {
  version: "v1" | "v2" | "v3" | "v4" | "v5";
}

const addPropertyAccessToIdentifier = (property: ts.Identifier | ts.PrivateIdentifier) => (
  identifier: ts.Expression
) => ts.createPropertyAccess(identifier, property);

const createCall = (
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[]
) => (expression: ts.Expression) =>
  ts.createCall(expression, typeArguments, argumentsArray);

const addMethodCallToExpression = (
  methodName: string,
  typeArguments: readonly ts.TypeNode[],
  argumentsArray: readonly ts.Expression[] = []
) => (identifier: ts.Expression) =>
  pipe(
    () => identifier,
    addPropertyAccessToIdentifier(ts.factory.createIdentifier(methodName)),
    createCall([], [])
  )();

export const addRequiredStringProperty = (expression: ts.Expression) => addMethodCallToExpression("required", [], undefined)(expression)

const createStringValidator = ({
  uuid,
  max,
  min,
  required,
  valid,
}: {
  uuid?: UUID;
  max?: number;
  min?: number;
  required?: boolean;
  valid?: string[];
}): any => {
  const root = ts.createIdentifier("Joi");

  return pipe(
    addMethodCallToExpression("string", [], undefined)
  )(root);
};

export default createStringValidator;
