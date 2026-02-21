{
  const person = {
    firstName: "Oka",
    lastName: "Widiawan",
  };

  Object.freeze(person);

  person.firstName = "Diubah";
  delete person.firstName;

  console.log(person);
  // { firstName: 'Oka', lastName: 'Widiawan' }
}
