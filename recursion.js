var recursiveLoop = function loop(x) {
    if (x >= 10) {
        console.log(x + " equal to 10");
        return
    }
    console.log("x: "+ x)
    loop(x + 1)
}

var recursion2 = function rec(x) {
    if (x < 0) {
        console.log("x is lesser than 0 "+ x)
        return;
    }
    console.log("begin: "+ x)
    rec(x - 1)
    console.log("end: "+ x)
}

recursiveLoop(0)
recursion2(3)