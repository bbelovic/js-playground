var z = 1
function outside(x) {
    function inside (y) {
        return x + y + z
    }
    return inside
}

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z)
        }
        C(10)
    }
    B(2)
}
A(1)

fn_inside = outside(3)
var result = fn_inside(5)
console.log(result)