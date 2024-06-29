// Assignment from video 78
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function (element) {
    return isNaN(parseInt(element));
  }).map(function (elemnet) {
    return elemnet.length < 3 ? elemnet[0] : elemnet;
  }).reduce(function (acc, curr) {
    return acc + curr;
  }).replaceAll("_", " ").slice(0, -true);

console.log(solution); // Elzero Web School

// Another Solution for previous Assignment
let solutionTwo = myString.split("").filter((el)=>{
  return isNaN(parseInt(el)) && el !== ",";
}).map((el) =>{
  return el === "_"  ? " " : el;
})
.reduce((acc, curr)=>{
  return acc === curr ? acc : acc + curr;
}).slice(0,-true);
console.log(solutionTwo);
// End of Assignment from video 78


// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let concatLetters = mix.map((element) => {
      return typeof element === "string" ? element : "";
    }).reduce((acc, curr) => {
      return acc + curr;
  });
console.log(concatLetters); // Elzero
// End of Assignment 1


// Assignment 2
let myStringTwo = "EElllzzzzzzzeroo";

filteredString = myStringTwo.split("").filter((element, index) => {
    return myStringTwo.indexOf(element) === index;
  }).join("");
console.log(filteredString); // Elzero
// End of Assignment 2


// Assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattedArray = myArray.reduce((acc, curr) => {
    return acc + curr;
  }).split(",").join("");
console.log(flattedArray); // Elzero

// Another Solution
let flattedArrayTwo = myArray.reduce(function (acc, cur) {
  return Array.isArray(cur) ? acc + cur.join("") : acc + cur;
});
console.log(flattedArrayTwo); // Elzero
// End of Assignment 3


// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let convertedNumbers = numsAndStrings
  .filter((element) => {
    return !isNaN(element);
  }).map((element) => {
    return -element;
  });
console.log(convertedNumbers); // [-1, -10, 10, 20, -5, -3]
// End of Assignment 4


// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, curr) {
  return curr % 2 !== 0 ? acc + curr : acc * curr;
}, 1);
console.log(result); // 500
// End of Assignment 5
