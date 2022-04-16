export const emptifyObj = <T extends Record<string, unknown>>(
  o: T
): T | undefined => (JSON.stringify(o) === "{}" ? undefined : o)

export const emptifyArr = <T extends unknown[]>(a: T): T | undefined =>
  JSON.stringify(a.filter(Boolean)) === "[]" ? undefined : a

export const emptify = <T>($: T): T | undefined => {
  if (
    $ === undefined ||
    $ === null ||
    (typeof $ === "string" && $ === "") ||
    (typeof $ === "number" && isNaN($))
  ) {
    return undefined
  }
  if (typeof $ === "object") {
    for (const key in $) {
      if (
        ($ as Record<string, unknown>)[key] !== undefined &&
        ($ as Record<string, unknown>)[key] !== null
      ) {
        return $
      }
    }
    return undefined
  }
  return $
}

// export const feed = (x) => (f) => f(x)

// export const apply = (f) => (x) => f(x)
