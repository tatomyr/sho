export const bool = (b: unknown): string | undefined =>
  typeof b === "boolean" ? undefined : `'${b}' is not boolean`
