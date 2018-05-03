var json = '[{"name":"john", "surname":"doe"},{"name":"jane", "surname":"doe"}]'
var people = JSON.parse(json);
console.log(people.length);
console.log(people[0].name)