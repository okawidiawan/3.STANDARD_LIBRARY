// Konversi ke Number
{
  const input = "12345";
  const number = Number(input);

  console.log(typeof input);
  console.log(typeof number);
  console.log(number);

  const str = "salah";
  const num = Number(str);

  console.log(typeof str);
  console.log(typeof num);
  console.log(num);
}

// Number Static Porperties
{
  console.log(Number.MIN_VALUE);
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER);
}

// Number Static Method
{
  const data = Number("12345");

  console.log(Number.isInteger(data)); // true
  console.log(Number.isNaN(data)); // false

  const name = Number("Oka");
  console.log(Number.isInteger(name)); // false
  console.log(Number.isNaN(name)); // true
}

// Number Instance Method
{
  const value = Number(12345);

  console.log(value.toString(2)); // 11000000111001
  console.log(value.toLocaleString("id-ID")); // 12.345
  console.log(value.toLocaleString("en-US")); // 12,345
}
