export const num = (x: unknown): string | undefined =>
  typeof x === "number" && !isNaN(x) ? undefined : `'${x}' is not a number`
