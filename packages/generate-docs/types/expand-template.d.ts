declare module "expand-template" {
  function expandTemplate(options?: {
    sep: string;
  }): (template: string, data: Record<string, unknown>) => string;

  export default expandTemplate;
}
