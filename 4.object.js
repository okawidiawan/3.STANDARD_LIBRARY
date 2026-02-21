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

{
  const target = { firstName: "Oka" };
  const source = {
    firstName: "Bezarius",
    middleName: "Ozu",
    lastName: "Widiawan",
  };

  Object.assign(target, source);

  console.log(target);
  //   { firstName: 'Bezarius', middleName: 'Ozu', lastName: 'Widiawan' }
}

{
  const person = {
    firstName: "Oka",
    middleName: "Ozu",
    lastName: "Widiawan",
  };

  console.log(Object.values(person));
  //   [ 'Oka', 'Ozu', 'Widiawan' ]

  console.log(Object.getOwnPropertyNames(person));
  //   [ 'firstName', 'middleName', 'lastName' ]
}
