function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(2))
}

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var rnd = getRandomInt();
        if (rnd === 1) {
            resolve(rnd)
        } else {
            reject(rnd)
        }
    }, 300)
}).then(res => console.log("Success: "+ res))
  .catch(fail => console.log("Failure: "+ fail))
  .then(msg => console.log("end"))