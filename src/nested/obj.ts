import type {ErrorType, Validation} from "../types"
import {emptifyObj} from "../utils"

export const obj =
  (schema: Record<string, Validation>): Validation =>
  (o, ...parents) => {
    if (typeof o !== "object" || o === null || Array.isArray(o)) {
      return `${JSON.stringify(o)} is not an object`
    }
    const errs: Record<string, ErrorType> = {}
    for (const key in schema) {
      errs[key] = schema[key](o[key], o, ...parents)
    }
    return emptifyObj(errs)
  }
