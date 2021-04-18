import { Schema, Validator as SchemaValidator } from "jsonschema";
/**
 * @public
 */
const is = <T>(schema: Schema) => (value: any): value is T => {
  const validator = new SchemaValidator();

  return validator.validate(value, schema).valid;
};

export default is;
