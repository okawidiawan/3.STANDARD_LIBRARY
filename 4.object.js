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

{
  const person = {
    firstName: "Oka",
    lastName: "Widiawan",
  };

  Object.seal(person);

  person.lastName = "Ozu";
  person.middleName = "Bezarius";

  delete person.lastName;

  console.log(person);
  //   { firstName: 'Oka', lastName: 'Ozu' }
}
