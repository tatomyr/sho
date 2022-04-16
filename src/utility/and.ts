export const and =
  (...validations) =>
  (...all) =>
    validations
      .map((validate) => validate(...all))
      .filter(Boolean)
      .join(" & ") || undefined
