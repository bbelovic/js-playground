function other(fn) {
    fn()
    console.log('in other')
}

function Person() {
    //var self = this
    this.age = 18

    other(() => {
        console.log(this.age)
        this.age++
    })
    //return growUp
}

var p = new Person()
