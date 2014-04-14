# xtend

[![browser support][3]][4]


Extend like a boss

xtend is a basic utility library which allows you to extend an object by
appending all of the properties from each object in a list. When there are
identical properties, the right-most property takes presedence.

In repsect of language semantics, values which are `undefined` are considered
such. That is, an undefined value will not overwrite a value, because the
object property, as the name describes, is actually undefined.

## Examples

```js
var extend = require("xtendr")

// extend returns a new object. Does not mutate arguments
var combination = extend({
    a: "a"
}, {
    b: "b"
})
// { a: "a", b: "b" }
```

## Stability status: Locked

## MIT Licenced


  [3]: http://ci.testling.com/Matt-Esch/xtendr.png
  [4]: http://ci.testling.com/Matt-Esch/xtendr
