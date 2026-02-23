const target = {};

console.log(target);
// {}

const handler = {
  get: function (target, property) {
    console.log(`Access Property : ${property}`);
    /*
        Access Property : firstName
        Oka
        Access Property : lastName
        Widiawan
        Access Property : middleName

    */
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Change Property ${property} : ${value}`);
    /*
        Change Property firstName : Oka
        Change Property lastName : Widiawan
        Change Property middleName : null
    */
    if (value === null) {
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Oka";
proxy.lastName = "Widiawan";
proxy.middleName = null;

console.log(proxy.firstName);
// Oka

console.log(proxy.lastName);
// Widiawan

console.log(proxy.middleName);
// Widiawan

console.log(target);
// { firstName: 'Oka', lastName: 'Widiawan', middleName: '' }
