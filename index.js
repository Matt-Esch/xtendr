module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var value = source[key]

                if (!(key in target) || value !== undefined) {
                    target[key] = source[key]
                }
            }
        }
    }

    return target
}
