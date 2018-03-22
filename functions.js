function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x
}

var input = [100, 4, 16]
var sqrt = function(x) {return Math.sqrt(x)}

function map(f, arr) {
    var result = []
    for (i = 0; i < arr.length; i++) {
        result[i] = f(arr[i])
    }
    return result
}

var res = map(cube, [10, 1])

// access global scope
var print = function printInput() {
    console.log("input=" + input)
}

print()

res = map(function (x) {return x * 2}, [0, 1, 2])
res = map(sqrt, input)
console.log(res);