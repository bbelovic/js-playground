function Person(name) {
    this.name = name
}

function Movie (name, director) {
    this.name = name
    this.director = director
}

var sow = new Movie('The shape of water', new Person('del Toro'))
var postriziny = new Movie('Postriziny', new Person('Menzel'))

var ftoString = function () {return this.name}
sow.toString = ftoString
postriziny.toString = ftoString

console.log(sow.toString())
console.log(postriziny.toString())

var director = new Object({name: 'belovic', toString: ftoString})
console.log(director.name)

Movie.prototype.getDirectorsName = function () {return this.director.name}
Movie.prototype.fullInfo = 'name='+ this.name //+ ', director=' + this.director.name

var dname = sow.getDirectorsName()
console.log(dname)
console.log(postriziny.getDirectorsName())
console.log(sow.fullInfo)