import {str} from "./str"

describe("str", () => {
  it("should pass when provide a string", () => {
    expect(str("a")).toEqual(undefined)
  })
  it("should fail gracefully when a value provided is not a string", () => {
    expect(str(undefined)).toEqual(`'undefined' is not a string`)
    expect(str(null)).toEqual(`'null' is not a string`)
    expect(str(NaN)).toEqual(`'NaN' is not a string`)
    expect(str(1)).toEqual(`'1' is not a string`)
    expect(str([])).toEqual(`'' is not a string`)
  })
})
