var person = {
    name: {
        firstName: 'Joe',
        lastName: 'Doe'
    },
    age: 32,
    interests: ['music', 'movies'],
    bio: function() {
        alert('Hi my name is ' + this.name['firstName'] + ' ' + this.name.lastName + '. I am '+ this.age + ' years old.');
    },
    greetings: function() {
        alert('Hi I\'m '+ this.name[0])
    }
};

var height = {
    name: 'height',
    value: '1.75',
    unit: 'm'
}

function createNewPerson(name) {
    var p = {}
    p.name = name;
    p.greeting = function () {
        alert('Hi! My name is ' + p.name);
    }
    return p;
}

person[height.name] = height