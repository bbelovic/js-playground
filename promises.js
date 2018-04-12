setTimeout(function () {
    console.log("After timeout")
}, 1000 )

var promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved value"), 3000)
}).then(res => console.log("From promise: "+ res))