import JSONSchema4 from "json-schema";
import { Validator as SchemaValidator } from "jsonschema";
/**
 * @public
 */
const is = <T>(schema: JSONSchema4.JSONSchema4) => (value: any): value is T => {
  const validator = new SchemaValidator();

  return validator.validate(value, schema).valid;
};

export default is;
