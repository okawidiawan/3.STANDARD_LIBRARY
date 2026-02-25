const originalText = "Oka&Ozu=Widiawan";
console.log(originalText);
// Oka&Ozu=Widiawan

const encoded = btoa(originalText);
console.log(encoded);
// T2thJk96dT1XaWRpYXdhbg==

const decoded = atob(encoded);
console.log(decoded);
// Oka&Ozu=Widiawan
