const boolean = Boolean(true);
const newBoolean = new Boolean(true);

console.log(boolean);
// true

console.log(newBoolean);
// [Boolean: true]

console.log(typeof boolean);
// boolean

console.log(typeof newBoolean);
// object

console.log(boolean.toString());
// true

console.log(boolean.valueOf());
// true
