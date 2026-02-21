{
  const person = {
    firstName: "Oka",
    lastName: "Widiawan",
    address: {
      country: "Indonesia",
      city: "Jakarta",
    },
    hobbies: ["Coding", "Gaming", "Hiking"],
  };

  const toJson = JSON.stringify(person);
  const toString = JSON.parse(toJson);

  console.log(toJson);
  /*
  {"firstName":"Oka","lastName":"Widiawan","address":{"country":"Indonesia","city":"Jakarta"} ,"hobbies":["Coding","Gaming","Hiking"]}
  */

  console.log(toString);
  /*
{
  firstName: 'Oka',
  lastName: 'Widiawan',
  address: { country: 'Indonesia', city: 'Jakarta' },
  hobbies: [ 'Coding', 'Gaming', 'Hiking' ]
}
*/
}
