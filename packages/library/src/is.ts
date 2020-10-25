import Joi from "joi";

interface SchemaDescriptor {
  type: "number" | "string" | "object" | "any" | "boolean";
  required?: boolean;
  optional?: boolean;
}

const convertSchemaDescriptorToSchema = (
  schemaDescriptor: SchemaDescriptor
): Joi.Schema => Joi[schemaDescriptor.type]();

const is = <T>(
  value: any,
  schemaDescriptor: SchemaDescriptor | SchemaDescriptor[]
): value is T => {
  if (Array.isArray(schemaDescriptor)) {
    const schemaDescriptors = schemaDescriptor;

    return (
      Joi.alternatives()
        .try(...schemaDescriptors.map(convertSchemaDescriptorToSchema))
        .validate(value).error === null
    );
  }
  return (
    convertSchemaDescriptorToSchema(schemaDescriptor).validate(value).error ===
    undefined
  );
};

export default is;
