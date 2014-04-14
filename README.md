# xtendr

[![browser support][3]][4]


Extend with respect for `undefined`

xtendr is a basic utility library which allows you to extend an object by
appending all of the properties from each object in a list. When there are
identical properties, the right-most property that is not `undefiend`
takes presedence, except where all values are `undefined`.

An undefined value will not overwrite a value, because the object property as
the name describes, is actually undefined.

Furthermore, the resuling object will have all keys set, even if the only value
for that key is undefined. The preserves your right to define the enumerable
keys, but to respect undefined values where you do not wish to override.

xtendr patches `xtend` to respect the meaning of `undefined` vs `null`

## Examples

```js
var extend = require("xtendr")

// extend returns a new object. Does not mutate arguments
var combination = extend({
    a: "a"
}, {
    a: undefined,
    b: "b",
    c: undefined
})
// { a: "a", b: "b", c: undefined }
```

## MIT Licenced


  [3]: http://ci.testling.com/Matt-Esch/xtendr.png
  [4]: http://ci.testling.com/Matt-Esch/xtendr
