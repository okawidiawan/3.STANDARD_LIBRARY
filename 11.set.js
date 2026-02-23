const set = new Set();

set.add("Oka");
set.add("Ozu");
set.add("Ozu");
set.add("Widiawan");

console.log(set);
// Set(3) { 'Oka', 'Ozu', 'Widiawan' }

set.forEach((value) => console.log(value));
/*
    Oka
    Ozu
    Widiawan
*/
