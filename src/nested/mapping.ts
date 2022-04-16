import type {ErrorType, Validation} from "../types"
import {emptifyObj} from "../utils"

export const mapping =
  ([validateKey, validateValue]: [
    Validation<string>,
    Validation
  ]): Validation =>
  (o, ...parents) => {
    if (typeof o !== "object" || o === null || Array.isArray(o)) {
      return `${JSON.stringify(o)} is not an object`
    }
    const errs: Record<string, ErrorType> = {}
    for (const key in o) {
      errs[key] =
        validateKey(key, o, ...parents) || validateValue(o[key], o, ...parents)
    }
    return emptifyObj(errs)
  }
