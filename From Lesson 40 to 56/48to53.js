// Assignment 1
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
// End of Assignment 1


// Assignment 2
let startTwo = 10;
let endTwo = 0;
let stop = 3;

for (let i = startTwo; i > endTwo; i--) {
  console.log(i < 10 ? `0${i}` : i);
  if (i === stop) break;
}
// End of Assignment 2


// Assignment 3
let startThree = 1;
let endThree = 6;
let breaker = 2;

for (let i = startThree; i <= endThree; i++) {
  console.log(i);
  for (let j = breaker; j < endThree; j += breaker) {
    console.log("--", j);
  }
}
// End of Assignment 3


// Assignment 4
let index = 10;
let jump = 2;

for (;;) {
  if (index === jump) break;
  console.log(index);
  index -= jump;
}
// End of Assignment 4


// Assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
counter = 1;

for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`"${counter++} => ${friends[i]}"`);
}
// End of Assignment 5


// Assignment 6
let startSix = 0;
let swappedName = "elZerO";
let result = "";

for (let i = startSix; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);
// End of Assignment 6


// Assignment 7
let startSeven = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 0; i < mix.length; i++) {
  if (mix[i] === 1 || typeof mix[i] === "string") continue;
  console.log(mix[i]);
}
// End of Assignment 7
