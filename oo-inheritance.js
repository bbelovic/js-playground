var p1 = {name: "john doe", __proto__: {gender: "F"}}
console.log(p1.name)
console.log(p1.prototype)

function Person () {
    this.age = 24;
}

var p2 = new Person();
Object.setPrototypeOf(p2, p1)
console.log(p2.age)
console.log(p2.gender)
console.log(p2.name)

function School() {
    this.id = 1
    this.dumpId = function () {
        console.log("Dump id: "+ this.id)
    }
}
School.prototype.printId = function () {console.log(this.id)}

var school = new School()

console.log(School == school.__proto__.constructor)

var school2= new School()

console.log(school2.printId == school.printId)
console.log(school2.dumpId == school.dumpId)

class Animal {
    constructor(name) {
        this.name = name
    }
}

var a = new Animal('frankie')
var b = new Animal(1)
console.log(a.name)
console.log(b.name)