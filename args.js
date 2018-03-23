function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x
}

function sumSquares(fx) {
    var sum = 0
    for (i = 1; i < arguments.length; i++) {
        var elem = arguments[i]
        sum += fx(elem)
    }
    return sum
}

function concat(sep) {
    var res = ''
    for (i = 1; i < arguments.length; i++) {
        res += arguments[i] + sep
    }
    return res
}

function multiply(x, y = 1) {
    return x * y
}

function map(f, ...vals) {
    return vals.map(x => f(x))
}

var m = multiply(2)

var sum = sumSquares(square, 1, 2, 3)
var res = concat('#', 'Honda', 'Hyundai')
console.log(sum)
console.log(res)
console.log(m)
console.log(map(square, 1, 2, 3))