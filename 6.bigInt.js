const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const total = a + b;

console.log(total);
// 18014398509481982n

console.log(typeof total);
// bigint
