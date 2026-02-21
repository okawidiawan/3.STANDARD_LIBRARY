{
  const array = ["Oka", "Ozu", "Widiawan"];

  // Akses method forEach dengan anonymous function
  array.forEach(function (value, index) {
    console.log(`${index} : ${value}`);
  });
  /*
  output :
  0 : Oka
  1 : Ozu
  2 : Widiawan
  */

  // Akses method forEach dengan arrow function
  array.forEach((value, index) => console.log(`${index} : ${value}`));

  // Akses method forEach dengan arrow function (tanpa index)
  array.forEach((value) => console.log(value));
}

{
  const queue = [];

  queue.push("Oka");
  console.log(queue);
  // ["Oka"]

  queue.push("Ozu");
  console.log(queue);
  // ["Oka", "Ozu"]

  queue.push("Widiawan");
  console.log(queue);
  // ["Oka", "Ozu", "Widiawan"]

  console.log(queue.shift());
  //   Oka
  console.log(queue.shift());
  //   Ozu
  console.log(queue.shift());
  //   Widiawan
  console.log(queue.shift());
  //   undefined
}

{
  const stack = [];

  stack.push("Oka");
  console.log(stack);
  // ["Oka"]

  stack.push("Ozu");
  console.log(stack);
  // ["Oka", "Ozu"]

  stack.push("Widiawan");
  console.log(stack);
  // ["Oka", "Ozu", "Widiawan"]

  console.log(stack.pop());
  //   Widiawan

  console.log(stack.pop());
  //   Ozu

  console.log(stack.pop());
  //   Oka

  console.log(stack.pop());
  //   undefined
}

{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3)); // 4
  console.log(source.findIndex((value) => value > 3)); // 3
  console.log(source.includes(7)); // false
  console.log(source.indexOf(5)); // 4
  console.log(source.lastIndexOf(5)); // 9
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(numbers.filter((number) => number % 2 === 1));
  // [ 1, 3, 5, 7, 9 ]

  console.log(numbers.filter((number) => number % 2 === 0));
  // [ 2, 4, 6, 8, 10 ]
}

{
  const names = "Oka Ozu Widiawan".split(" ");
  const namesUpper = names.map((name) => name.toUpperCase());

  console.log(namesUpper);
  // [ 'OKA', 'OZU', 'WIDIAWAN' ]

  const namesReduce = names.reduce((before, name) => before + " " + name);
  console.log(namesReduce);
  //   Oka Ozu Widiawan

  const namesReduceRight = names.reduceRight((before, name) => before + " " + name);
  console.log(namesReduceRight);
  //   Widiawan Ozu Oka

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(numbers.reduce((result, number) => result + number));
  // 55

  console.log(numbers.reduceRight((result, number) => result + number));
  // 55
}
