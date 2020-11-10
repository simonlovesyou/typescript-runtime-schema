import { parse } from "@typescript-eslint/typescript-estree";

const typescriptTemplateTag = (strings: TemplateStringsArray) => {
  parse(strings[0], {
    errorOnUnknownASTType: true,
    jsx: true,
  });
  return strings[0];
};

export default typescriptTemplateTag;
