var test = require("tape")
var extend = require("./")
var mutableExtend = require("./mutable")

test("merge", function(assert) {
    var a = { a: "foo" }
    var b = { b: "bar" }

    assert.deepEqual(extend(a, b), { a: "foo", b: "bar" })
    assert.end()
})

test("replace", function(assert) {
    var a = { a: "foo" }
    var b = { a: "bar" }

    assert.deepEqual(extend(a, b), { a: "bar" })
    assert.end()
})

test("undefined", function(assert) {
    var a = { a: undefined }
    var b = { b: "foo" }

    assert.deepEqual(extend(a, b), { a: undefined, b: "foo" })
    assert.deepEqual(extend(b, a), { a: undefined, b: "foo" })
    assert.end()
})

test("handle 0", function(assert) {
    var a = { a: "default" }
    var b = { a: 0 }

    assert.deepEqual(extend(a, b), { a: 0 })
    assert.deepEqual(extend(b, a), { a: "default" })
    assert.end()
})

test("is immutable", function (assert) {
    var record = {}

    extend(record, { foo: "bar" })
    assert.equal(record.foo, undefined)
    assert.end()
})

test("null as argument", function (assert) {
    var a = { foo: "bar" }
    var b = null
    var c = void 0

    assert.deepEqual(extend(b, a, c), { foo: "bar" })
    assert.end()
})

test("mutable", function (assert) {
    var a = { foo: "bar" }

    mutableExtend(a, { bar: "baz" })

    assert.equal(a.bar, "baz")
    assert.end()
})

test("mutable undefined", function (assert) {
    var x = {
        a: "a"
    }

    var y = {
        a: undefined,
        b: "b",
        c: undefined
    }

    mutableExtend(x, y)

    assert.equal(x.a, "a")
    assert.equal(x.b, "b")
    assert.equal(x.c, undefined)
    assert.end()
})

test("immutable undefined", function (assert) {
    var x = {
        a: "a"
    }

    var y = {
        a: undefined,
        b: "b",
        c: undefined
    }

    var z = extend(x, y)

    assert.equal(x.a, "a")
    assert.notOk("b" in x)
    assert.notOk("c" in x)

    assert.equal(y.a, undefined)
    assert.equal(y.b, "b")
    assert.equal(y.c, undefined)

    assert.equal(z.a, "a")
    assert.equal(z.b, "b")
    assert.equal(z.c, undefined)

    assert.end()
})
