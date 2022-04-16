import {num} from "./num"

describe("num", () => {
  it("should pass when provide a number", () => {
    expect(num(1)).toEqual(undefined)
  })
  it("should fail gracefully when a value provided is not a number", () => {
    expect(num(undefined)).toEqual(`'undefined' is not a number`)
    expect(num(null)).toEqual(`'null' is not a number`)
    expect(num(NaN)).toEqual(`'NaN' is not a number`)
    expect(num("1")).toEqual(`'1' is not a number`)
  })
})
