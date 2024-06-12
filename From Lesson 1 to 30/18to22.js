// Assignment one from video 22
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]

[++a]
value: 11
Explain: pre increment

[+]
Explain: plus operator

[+b++]
value: 20
Explain: convert b to its number value 20 by first plus which is unary plus operator and use post increment.

[+]
Explain: plus operator

[+c++]
value: 80
Explain: the first plus is unary plus and after that use post increment.

[-]
Explain: negation operator

[+a++]
value: 11
Explain: the first plus is unary plus and after that use post increment.
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

[++a]
value: 13
Explain: pre increment

[+]
Explain: plus operator

[-b]
value: -21
Explain: the minas is unary negation.

[+]
Explain: plus operator

[+c++]
value: 81
Explain: the first plus is unary plus and after that use post increment.

[-]
Explain: negation operator

[-a++]
value: -13
Explain: the first minas is unary negation and after that use post increment.

[+]
Explain: plus operator

[+a]
value:14
Explain: unary plus
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
[--c] [+] [+b] [+] [--a] [*] [+b++][-] [+b] [*][a] [+][--a] [-] [+true]

[--c]
value: 81
Explain:pre decrement

[+]
Explain:plus operator

[+b]
value: 21
Explain:unary plus.

[+]
Explain: plus operator

[--a]
value: 13
Explain:pre decrement.

[*]
Explain: mutiplication operator

[+b++]
value: 21
Explain:the first plus is unary plus and after that use post increment.

[-]
Explain: negation operator

[+b]
value: 22
Explain:unary plus.

[*]
Explain: mutiplication operator

[a]
value:13

[+]
Explain:plus operator

[--a]
value: 12
Explain:pre decrement.

[-]
Explain: negation operator

[+true]
value:1
Explain:convert true to its number value using unary plus.
*/
// End of Assignment one from vedio 22


// Assignment two from vedio 22
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); // 2000
console.log(-d + ++e * ++g + ++f); // 173
// End of Assignment two from vedio 22

// Assignment 1 from website
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0
// End of Assignment 1 from website


// Assignment 2
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (num - true)); // 6

// Soultion Three
console.log(num ** (num - true) - num); // 6

// Soultion Four
console.log(num * num - num); // 6

// Solution Five
console.log(num ** num / num - num); // 6

// Solution Six
console.log(num * (true + true)); // 6
// End of Assignment 2


// Assignment 3
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(+num2 * (+num2 + +num2) / num2); // 20

// Solution Three
console.log((num2 * num2) / (num2 / (true + true))); // 20

// Solution Four
console.log((num2 ** (true + true)) / (num2 ** (true + true) / (+num2 + +num2)));
// End of Assignment 3


// Assignment 4
let points = 10;

points += 3;
console.log(points); // 13

points -= 5;
console.log(points); // 8;
// End of Assignment 4
