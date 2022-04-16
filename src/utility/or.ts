export const or =
  (...validations) =>
  (...all) => {
    let errs = []
    for (const validate of validations) {
      console.log(all)
      const err = validate(...all)
      if (err) {
        errs.push(err)
      } else {
        return
      }
    }
    return errs.join(" & ")
  }
