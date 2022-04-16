export const str = (s: unknown): string | undefined =>
  typeof s === "string" ? undefined : `'${s}' is not a string`
