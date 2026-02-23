const map = new Map();
map.set("Name", "Oka Widiawan");
map.set("Country", "Indonesia");

console.log(map);
// Map(2) { 'Name' => 'Oka Widiawan', 'Country' => 'Indonesia' }

console.log(map.get("Name"));
// Oka Widiawan

console.log(map.get("Country"));
// Indonesia

console.log(map.get("Hobbies"));
// undfined

for (const element of map) {
  console.log(`${element[0]} : ${element[1]}`);
}
/*
    Name : Oka Widiawan
    Country : Indonesia
*/

map.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});
/*
    Name : Oka Widiawan
    Country : Indonesia
*/
