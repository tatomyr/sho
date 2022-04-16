import {obj} from "./obj"
import {str} from "../primitives/str"

describe("obj", () => {
  it("should pass when a correct object provided", () => {
    const validate = obj({requiredStringField: str})
    expect(validate({requiredStringField: "test"})).toEqual(undefined)
    expect(validate({requiredStringField: "test", something: "test"})).toEqual(
      undefined
    )
  })
  it("should pass when a correct object provided along with extra parameters", () => {
    const validate = obj({requiredStringField: str})
    expect(validate({requiredStringField: "test", something: "test"})).toEqual(
      undefined
    )
  })
  it("should fail gracefully when provided a wrong object", () => {
    const validate = obj({requiredStringField: str})
    expect(validate({})).toEqual({
      requiredStringField: "'undefined' is not a string",
    })
    expect(validate({requiredStringField: 1})).toEqual({
      requiredStringField: "'1' is not a string",
    })
  })
  it("should fail gracefully when input is not an object", () => {
    const validate = obj({})
    expect(validate(null)).toEqual("null is not an object")
    expect(validate(undefined)).toEqual("undefined is not an object")
    expect(validate("string")).toEqual('"string" is not an object')
    expect(validate([])).toEqual("[] is not an object")
  })
})
