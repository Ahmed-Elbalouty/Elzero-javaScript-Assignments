// Assignment one from video 70
// let names = function (...names) {
//   return `String [${names.join("], [")}] => Done !`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// Arrow function from previous function
let names = (...names) => `String [${names.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// End of Assignment one from video 70


// Assignment two from video 70
let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums.flat()[1];

// Regular function from previous function
let calc = function (one, two, ...nums) {
  return one + two + nums.flat()[1];
};

console.log(calc(10, myNumbers[0], myNumbers)); // 80
// End of Assignment two from video 70


// Assignment 1 from website
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    zName = zName.slice(0, zName.indexOf(" ") + 2);
    return zName.slice(0, -1) + zName.slice(-1).toUpperCase() + ".";
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// End of Assignment 1 from website


// Assignment 2

// Function One

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

// The convertion of previous function to Arrow function
let itsMe = () => `Iam An Arrow Function`;
console.log(itsMe()); // Iam An Arrow Function
// End of Function one

// Function two
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// The convertion of previous function to Arrow function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// End of Function two


// End of Assignment 2


// Assignment 3
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// The Arrow function of the previous function
let checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
};
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// End of Assignment 3


// Assignment 4
function specialMix(...data) {
  result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      result += parseInt(data[i]);
    } else {
      continue;
    }
  }
  if (result !== 0) {
    return result;
  } else {
    return "All Is Strings";
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
// End of Assignment 4
