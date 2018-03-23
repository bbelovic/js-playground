function createPet(name) {
    var sex;
    return {
        getName: function() {
            return name
        },
        setName: function(newName) {
            name = newName;
        }
    }
}



var pet = createPet('dina')
var name = pet.getName()
console.log(name)
pet.setName('borka')
name = pet.getName()
console.log(name)