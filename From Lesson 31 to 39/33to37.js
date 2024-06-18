// Assignment one from video 37
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
// End of Assignment one from video 37


// Assignment two from video 37
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}

if (!typeof st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
// End of Assignment two from video 37


// Assignment 1 from website
let num = 9; // "009"

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && num < 100) {
  console.log("0" + num);
} else if (num >= 100) {
  console.log(num.toString());
}
// End of Assignment 1 from website


// Assignment 2
let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str 
  && typeof num1 !== typeof str 
  && num1 !== str2 
  && str != str2 
  && typeof str === typeof str2){
  console.log("{num1} Is The Same Value As {str}");
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
};
// End of Assignment 2


// Assignment 3
let num2 = 10;
let num3 = 30;
let num4 = "30";

if (
  num4 > num2 
  && typeof num4 !== typeof num3
  && num4 > num2 
  && num4 == num3 
  && typeof num4 !== typeof num3 
  && num4 !== num2 
  && typeof num4 !== typeof num3
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
  console.log(
    "{num4} Value And Type Is Not The Same As {num2} And Type Is Not The Same As {num3}"
  );
}
// End of Assignment 3


// Assignment 4
let num5 = 11;
let num6 = 9;
let num7 = 11;
let num8 = 34;

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num5 + num6 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num5 + num7 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num5 + num6 + num7 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}
// End of Assignment 4
