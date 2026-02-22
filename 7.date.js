const nowDate = new Date();
console.log(nowDate);
// Sun Feb 22 2026 06:54:33 GMT+0700 (Western Indonesia Time)

const timeAndDate = new Date(2020, 10, 10);
console.log(timeAndDate);
// Tue Nov 10 2020 00:00:00 GMT+0700 (Western Indonesia Time)

const timeAndDateToMilis = new Date(2020, 10, 10, 1, 0, 0, 0);
console.log(timeAndDateToMilis);
// Tue Nov 10 2020 01:00:00 GMT+0700 (Western Indonesia Time)

const currentMilis = new Date(1771718182202);
console.log(currentMilis);
// Sun Feb 22 2026 06:56:22 GMT+0700 (Western Indonesia Time)

const timestamp = Date.now();
console.log(timestamp);
// 1771718642046

const dateUnix = new Date(timestamp);
console.log(dateUnix);
// Sun Feb 22 2026 07:04:02 GMT+0700 (Western Indonesia Time)

console.log(dateUnix.getTime());
// 1771718642046

const parseTimeStamp = Date.parse("2020-10-10T10:10:10.123+07:00");
console.log(parseTimeStamp);
// 1602299410123

const parseDate = new Date(parseTimeStamp);
console.log(parseDate);
// Sat Oct 10 2020 10:10:10 GMT+0700 (Western Indonesia Time)

const date = new Date();
date.setFullYear(2026);

console.log(date.getFullYear());
// 2026

console.log(date.getMonth());
// 1

console.log(date.getDate());
// 22

console.log(date.getHours());
// 7

console.log(date.getMinutes());
// 25

console.log(date.getSeconds());
// 24

console.log(date.getMilliseconds());
// 955

console.log(date.getTimezoneOffset());
// -420 (Jarak UTC)
