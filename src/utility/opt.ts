import type {Validation} from "../types"

export const opt =
  (validation: Validation): Validation =>
  (value, ...parents) =>
    value === undefined ? undefined : validation(value, ...parents)
