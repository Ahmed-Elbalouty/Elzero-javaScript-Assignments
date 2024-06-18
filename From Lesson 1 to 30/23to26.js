// Assignment from video 26
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number
// End of Assignment from vedio 26


// Assignment 1 from website
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log(10 ** 5); // 100000
console.log(1e5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.floor(100000.99)); // 100000
console.log(Math.ceil(99999.999)); // 100000
console.log(Math.trunc(100000.99)); // 100000
console.log(parseInt("100000ahmed")); // 100000
console.log(1e4 * 1e1); // 100000
// End of Assignment 1 from website

// Assignment 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// End of Assignment 2


// Assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16
// End of Assignment 3


// Assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57
// End of Assignment 4


// Assignment 5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
// End of Assignment 5


// Assignment 6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
// End of Assignment 6


// Assignment 7
console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
// End of Assignment 7
