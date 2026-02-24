const person = {};

Reflect.set(person, "firstName", "Oka");
Reflect.set(person, "lastName", "Widiawan");

console.log(person);
// { firstName: 'Oka', lastName: 'Widiawan' }

console.log(Reflect.get(person, "firstName"));
// Oka

console.log(Reflect.get(person, "lastName"));
// Widiawan

console.log(Reflect.get(person, "middleName"));
// undefined

console.log(Reflect.has(person, "firstName"));
// true

console.log(Reflect.has(person, "middleName"));
// false
