{
  const firstName = Symbol();
  const lastName = Symbol();

  const person = {};
  person[firstName] = "Oka";
  person[lastName] = "Widiawan";

  console.log(person);
  // { [Symbol()]: 'Oka', [Symbol()]: 'Widiawan' }

  console.log(person[firstName]);
  // Oka

  console.log(person[lastName]);
  // Widiawan

  const middleName = Symbol("middleName");

  person[middleName] = "Ozu";

  console.log(person);
  /*
{
  [Symbol()]: 'Oka',
  [Symbol()]: 'Widiawan',
  [Symbol(middleName)]: 'Ozu'
}
*/
}

{
  const person = {};
  person[Symbol.for("firstName")] = "Oka";
  person[Symbol.for("lastName")] = "Widiawan";

  console.log(person);
  // { [Symbol(firstName)]: 'Oka', [Symbol(lastName)]: 'Widiawan' }

  console.log(person[Symbol.for("firstName")]);
  // Oka

  console.log(person[Symbol.for("lastName")]);
  // Widiawan

  console.log(Symbol.for("firstName") === Symbol.for("firstName"));
  // true
}
