import {emptify} from "./utils"

describe("utilities", () => {
  test("emptify should emptify the empty values", () => {
    expect(emptify(undefined)).toEqual(undefined)
    expect(emptify(null)).toEqual(undefined)
    expect(emptify(NaN)).toEqual(undefined)
    expect(emptify("")).toEqual(undefined)
    expect(emptify([])).toEqual(undefined)
    expect(emptify([undefined, null])).toEqual(undefined)
  })

  test("emptify should return the correct values", () => {
    expect(emptify(0)).toEqual(0)
    expect(emptify(Infinity)).toEqual(Infinity)
    expect(emptify({a: ""})).toEqual({a: ""})
    expect(emptify(false)).toEqual(false)
    expect(emptify([false])).toEqual([false])
    expect(emptify([""])).toEqual([""])
    expect(emptify([{}])).toEqual([{}])
  })
})
