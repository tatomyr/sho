import type {Validation} from "../types"
import {emptifyArr} from "../utils"

export const arr =
  (validate: Validation): Validation =>
  (a: unknown, ...parents) =>
    !Array.isArray(a)
      ? `'${a}' is not an array`
      : emptifyArr(a.map((item) => validate(item, a, ...parents)))
