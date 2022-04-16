import {arr} from "./arr"
import {any} from "../utility/any"

describe("arr", () => {
  it("should pass validation when there is an array provided", () => {
    const validate = arr(any)
    expect(validate([])).toEqual(undefined)
    expect(validate(["a"])).toEqual(undefined)
  })
  it("should fail grecefully when the argument is not an array", () => {
    const validate = arr(any)
    expect(validate(undefined)).toEqual("'undefined' is not an array")
    expect(validate({})).toEqual("'[object Object]' is not an array")
    expect(validate("string")).toEqual("'string' is not an array")
  })
})
