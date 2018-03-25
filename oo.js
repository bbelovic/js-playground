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

function Person(name) {
    this.name = name;
    this.greeting = function () {
        alert('Hi! My name is ' + this.name);
    }
}



person[height.name] = height