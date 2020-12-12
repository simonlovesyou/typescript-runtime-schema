/**
 * @internal
 */
export const addHeading = (level: number, heading: string) => (str: string) =>
  level === 0
    ? str
    : `
${"#".repeat(level)} ${heading}
${str}
`.trim();

/**
 * @internal
 */
export const wrapWithCodeBlock = (code: string) => `
\`\`\`
${code}
\`\`\`
`.trim()