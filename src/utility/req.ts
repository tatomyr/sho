import type {Validation} from "../types"
import {emptify} from "../utils"

export const req =
  (validation: Validation): Validation =>
  (value, ...parents) =>
    emptify(value) ? validation(value, ...parents) : `'${value}' is empty`
