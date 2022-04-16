import {bool} from "./bool"

describe("bool", () => {
  it("should pass when input is true or false", () => {
    expect(bool(true)).toEqual(undefined)
    expect(bool(false)).toEqual(undefined)
  })
  it("should fail when input is not boolean", () => {
    expect(bool(1)).toEqual("'1' is not boolean")
    expect(bool(0)).toEqual("'0' is not boolean")
    expect(bool(undefined)).toEqual("'undefined' is not boolean")
    expect(bool(null)).toEqual("'null' is not boolean")
    expect(bool("")).toEqual("'' is not boolean")
  })
})
