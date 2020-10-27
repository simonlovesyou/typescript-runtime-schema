import { access } from "fs/promises";
import Joi from "joi";
import { map } from "ramda";

interface SchemaDescriptor {
  type: "number" | "string" | "object" | "boolean";
  required?: boolean;
  optional?: boolean;
}

const addPresence = (required: boolean) => (schema: Joi.Schema) =>
  schema[required ? "required" : "optional"]();

const convertSchemaDescriptorToSchema = (
  schemaDescriptor: SchemaDescriptor
): Joi.Schema => {
  const { type, required } = schemaDescriptor;
  const optional = schemaDescriptor.required !== true;
  if (
    type === "number" ||
    type === "string" ||
    type === "boolean" ||
    type === "object"
  ) {
    let schema = Joi[type]();

    if (type === "string") {
      schema = schema.allow("");
    }

    return addPresence(required)(schema);
  }
};

const is = <T>(schemaDescriptor: SchemaDescriptor | SchemaDescriptor[]) => {
  if (Array.isArray(schemaDescriptor)) {
    const schemaDescriptors = schemaDescriptor;

    const schema = Joi.alternatives().try(
      ...schemaDescriptors.map(convertSchemaDescriptorToSchema)
    );

    return (value: unknown): value is T =>
      schema.validate(value).error === null;
  }
  const schema = convertSchemaDescriptorToSchema(schemaDescriptor);

  return (value: unknown): value is T => {
    const error = schema.validate(value).error;
    return error === undefined;
  };
};

export default is;
