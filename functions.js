function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x
}

function map(f, arr) {
    var result = []
    for (i = 0; i < arr.length; i++) {
        result[i] = f(arr[i])
    }
    return result
}

var res = map(cube, [10, 1])

res = map(function (x) {return x * 2}, [0, 1, 2])

console.log(res);