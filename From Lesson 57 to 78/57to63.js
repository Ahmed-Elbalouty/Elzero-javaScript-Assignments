// Assignment from video 63
function showDetails (a, b, c){
  let str;
  let num;
  let bool;
  typeof a === "string" ? str = a : typeof a === "number" ? num = a : bool = a;
  typeof b === "string" ? str = b : typeof b === "number" ? num = b : bool = b;
  typeof c === "string" ? str = c : typeof c === "number" ? num = c : bool = c;
  console.log(`Hello ${str}, Your Age Is ${num}, ${bool === true ? "You Are Available For Hire" : "You Are Not Available For Hire"}`);
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// End of Assignment from video 63


// Assignment 1 from website
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// End of Assignment 1 from website


// Assignment 2
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
// End of Assignment 2


// Assignment 3
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Age in Months is ${theAge * 12} Months`);
    console.log(`Age in Weeks is ${(theAge * 365) / 7} Weeks`);
    console.log(`Age in Days is ${theAge * 365} Days`);
    console.log(`Age in Hours is ${theAge * 365 * 24} Hours`);
    console.log(`Age in Minutes is ${theAge * 365 * 24 * 60} Minutes`);
    console.log(`Age in Seconds is ${theAge * 365 * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// End of Assignment 3

// Assignment 4
// Assignment 4 the same as Assignment from video 63
// End of Assignment 4


// Assignment 5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
// End of Assignment 5


// Assignment 6
function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") {
      continue;
    } else {
      result *= parseInt(nums[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
// End of Assignment 6
