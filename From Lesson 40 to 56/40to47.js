// Assignment from video 47
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(0, my.indexOf("Gamal")).reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Elham"), my.indexOf("Ahmed"))); // ["Elham", "Mazero"]

console.log(
  my[my.indexOf("Elham")].slice(zero, -counter) +
    my[my.indexOf("Mazero")].slice(my.indexOf("Mazero"))); // "Elzero"

console.log(
  my[my.indexOf("Mazero")].slice(-my.indexOf("Mazero"), -my.indexOf("Elham")) +
    my[my.indexOf("Mazero")].slice(-my.indexOf("Elham")).toUpperCase()); // "rO"
// End of Assignment from video 47


// Assignment 1 from website
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// End of Assignment 1 from website


// Assignment 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
// End of Assignment 2


// Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// End of Assignment 3


// Assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// First solution
console.log(
  words[words[0].lastIndexOf("o")][0]
    .slice(words[0].lastIndexOf("o"))
    .toUpperCase()
); // ZERO

// Second solution
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
// End of Assignment 4


// Assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}
// End of Assignment 5


// Assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
console.log(allArrs); // fxy
// End of Assignment 6
