import * as ts from "typescript";
import { pipe } from "ramda";

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

const allow = (allowedValues: ts.Expression[]) => (expression: ts.Expression) => {
  return addMethodCallToExpression("allow", [], allowedValues)(expression)
}

const alter = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const artifact = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const cache = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const cast = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const concat = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const custom = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const default = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const describe = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const description = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const empty = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const error = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const example = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const external = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const extract = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const failover = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const forbidden = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const fork = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const id = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const invalid = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.') 
}

const disallow = invalid

const not = invalid

const keep = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const label = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const message = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const messages = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const meta = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const note = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const only = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const optional = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const prefs = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.') 
}
const preferences = prefs
const options = prefs

const presence = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const raw = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const required = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.') 
}
const exist = required
const result = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const rule = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const ruleset =  / => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.') 
}
const $ = ruleset
const shared = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const strict = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const strip = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const tag = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const tailor = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const unit = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const valid = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.') 
}
const equal = valid

const validate = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const validateAsync = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const warn = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const warning = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}
const when = () => (expression: ts.Expression) => {
  throw new Error('Not yet implemented.')
}



export const addRequiredProperty = (expression: ts.Expression) => addMethodCallToExpression("required", [], undefined)(expression)

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
