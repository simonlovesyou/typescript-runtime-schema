import { parseScript }from 'escaya'
/**
 * Attempt to parse the code in the provided template tag (Only accepts one for now)
 * @param strings - TemplateStringsArray
 * @public
 */
export default (strings: TemplateStringsArray) => {
  parseScript(strings[0])
  return strings[0]
}