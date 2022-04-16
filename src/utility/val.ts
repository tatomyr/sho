import type {JSONType} from "../types"

export const val = (value: JSONType) =>
  value === undefined || value === null
    ? `${value} does not contain any meaningful value`
    : undefined
