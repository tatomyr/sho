import {mapping} from "./mapping"
import {num} from "../primitives/num"
import {bool} from "../primitives/bool"
import type {Validation} from "../types"

const keyPatternNumber: Validation<string> = (key) =>
  /^\d+$/.test(key) ? undefined : `a key must be a number`

describe("mapping", () => {
  it("should pass when a correct mapping provided", () => {
    const validate = mapping([keyPatternNumber, bool])
    expect(validate({1: true, "2": false})).toEqual(undefined)
  })
  it("should fail gracefully when a wrong mapping provided", () => {
    const validate = mapping([keyPatternNumber, bool])
    expect(validate({"wrong-key": true, 2: "wrong-value"})).toEqual({
      "wrong-key": "a key must be a number",
      "2": "'wrong-value' is not boolean",
    })
  })
  it("should fail gracefully when the input is not an object", () => {
    const validate = mapping([keyPatternNumber, bool])
    expect(validate([true, false])).toEqual("[true,false] is not an object")
    expect(validate(null)).toEqual("null is not an object")
    expect(validate("string")).toEqual('"string" is not an object')
    expect(validate(1)).toEqual("1 is not an object")
  })
})
