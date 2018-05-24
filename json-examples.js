var json = '[{"name":"john", "surname":"doe"},{"name":"jane", "surname":"doe"}]'
var people = JSON.parse(json);
console.log(people.length);
console.log(people[0].name)

var itemsJson = '[{"name":"item 1","finished":true},{"name":"item2","finished":false}]'
var items = JSON.parse(itemsJson)
console.log(items[0].name);
console.log(itemsJson[0].name)