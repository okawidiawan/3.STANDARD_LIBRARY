// {
//   const regexpLiteral = /oka/;

//   const regexString = new RegExp("oka");

//   const regex = new RegExp(/oka/);
// }

// {
//   const text = "Oka Ozu Widiawan Oka";
//   const regex = /Oka/;

//   let result = regex.exec(text);
//   console.log(result);
//   //   [ 'Oka', index: 0, input: 'Oka Ozu Widiawan Oka', groups: undefined ]

//   let test = regex.test(text);
//   console.log(test);
//   //   true

//   console.log(regex.exec("tidak ada"));
//   //   null

//   console.log(regex.test("tidak ada"));
//   //   false
// }

// {
//   const text = "Oka Ozu\n Widiawan oka\n Bezarius widiawan ";
//   const regexG = /oka/g;
//   const regexGI = /oka/gi;

//   let result;

//   while ((result = regexG.exec(text)) !== null) {
//     console.log(result);
//     /*
//     [
//     'oka',
//     index: 18,
//     input: 'Oka Ozu\n Widiawan oka\n Bezarius widiawan ',
//     groups: undefined
//     ]
//     */
//   }

//   while ((result = regexGI.exec(text)) !== null) {
//     console.log(result);
//     /*
//     [
//     'Oka',
//     index: 0,
//     input: 'Oka Ozu\n Widiawan oka\n Bezarius widiawan ',
//     groups: undefined
//     ]
//     [
//     'oka',
//     index: 18,
//     input: 'Oka Ozu\n Widiawan oka\n Bezarius widiawan ',
//     groups: undefined
//     ]
//     */
//   }
// }

// {
//   const text = "Oka Ozu \nWidiawan \noka\n Bezarius widiawan ";

//   const regexGI = /^oka/gim;

//   while ((result = regexGI.exec(text)) !== null) {
//     console.log(result);
//     /*
// [
//   'Oka',
//   index: 0,
//   input: 'Oka Ozu \nWidiawan \noka\n Bezarius widiawan ',
//   groups: undefined
// ]
// [
//   'oka',
//   index: 19,
//   input: 'Oka Ozu \nWidiawan \noka\n Bezarius widiawan ',
//   groups: undefined
// ]
//   */
//   }
// }

// const text = "Oka Ozu \nWidiawan \noka\n Bezarius widiawan \nOda oda";

// const regex = /^o.a/gim;

// let result;

// while ((result = regex.exec(text)) !== null) {
//   console.log(result);
//   /*
// [
//   'Oka',
//   index: 0,
//   input: 'Oka Ozu \nWidiawan \noka\n Bezarius widiawan \nOda oda',
//   groups: undefined
// ]
// [
//   'oka',
//   index: 19,
//   input: 'Oka Ozu \nWidiawan \noka\n Bezarius widiawan \nOda oda',
//   groups: undefined
// ]
// [
//   'Oda',
//   index: 43,
//   input: 'Oka Ozu \nWidiawan \noka\n Bezarius widiawan \nOda oda',
//   groups: undefined
// ]
// */
// }

// const ghostSpeak = "booh boooooooh";

// const regex = /bo{3,}h/;
// // [ 'boooooooh', index: 5, input: 'booh boooooooh', groups: undefined ]

// console.log(regex.exec(ghostSpeak));

// const text = "Oka oke Oku Oka oku Oki oko oka Oda";

// const regex = /ok[aiueo]/gi;

// let result;

// while ((result = regex.exec(text)) !== null) {
//   console.log(result);
//   /*
// [
//   'Oka',
//   index: 0,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'oke',
//   index: 4,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'Oku',
//   index: 8,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'Oka',
//   index: 12,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'oku',
//   index: 16,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'Oki',
//   index: 20,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'oko',
//   index: 24,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// [
//   'oka',
//   index: 28,
//   input: 'Oka oke Oku Oka oku Oki oko oka',
//   groups: undefined
// ]
// */
// }

const text = "Oka oke Oku Oka oku Oki oko oka Oda";

console.log(text.match(/ok[aiueo]/gi));
/*
[
  'Oka', 'oke',
  'Oku', 'Oka',
  'oku', 'Oki',
  'oko', 'oka'
]
*/

console.log(text.search(/ok[aiueo]/gi));
// 0

console.log(text.replace(/ok[aiueo]/gi, "Kakooi"));
// Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Oda

console.log(text.replaceAll(/ok[aiueo]/gi, "Kakooi"));
// Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Kakooi Oda

console.log(text.split(/o/gi));
/*
[
  '',    'ka ', 'ke ',
  'ku ', 'ka ', 'ku ',
  'ki ', 'k',   ' ',
  'ka ', 'da'
]
*/
