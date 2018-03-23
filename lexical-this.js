function other(fn) {
    fn()
    console.log('in other')
}

function person() {
    //var self = this
    this.age = 18

    other(function growUp() {
        console.log(this.age)
        this.age++
    })
    //return growUp
}

person()
