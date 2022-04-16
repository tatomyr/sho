# Sho - Simple JSON Validation

**Sho** is not even a library - it is more about the validation pattern.
It is simple and powerful yet highly customizable and extendable.
No magic - the core comprises **nested** validators for objects & arrays, a few **utility** validators, and that's very much it.
All the rest (and even those mentioned above) could be written in a manner you'd like.
Just follow the pattern you see in the **primitives** or **custom** validators and you won't miss the point.

## Validator

A **validator** is a pure function that takes a value and its parents as an input and returns either error message if the value provided is not valid, or 'undefined' otherwise, e. g.:

```ts
const num = (x: unknown, ...parents: unknown[]): string | undefined =>
  typeof x === "number" && !isNaN(x) ? undefined : `${x} is not a number`
```
