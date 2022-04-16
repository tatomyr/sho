export type JSONPrimitives = undefined | null | boolean | string | number
// export type JSONArrayType = Array<JSONType>
export interface JSONObjectType {
  [x: string]: JSONType
}
export type JSONNested = JSONType[] | JSONObjectType
export type JSONType = JSONPrimitives | JSONNested

export type Validation<T = JSONType> = (
  value: T,
  ...parents: JSONNested[]
) => ErrorType

export type ArrayErrorType = ErrorType[]
export interface ObjectErrorType {
  [x: string]: ErrorType
}
export type ErrorType = string | ObjectErrorType | ArrayErrorType | undefined
