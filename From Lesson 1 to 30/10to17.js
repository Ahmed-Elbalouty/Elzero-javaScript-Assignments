// Assignment From Video 17
let theTitle = "Elzero",
  theDescription = "Elzero Web School",
  theDate = "25/10";

let card = `
    <div>
        <h3>Hello ${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
    </div>`;

document.write(card.repeat(4));
// End of Assignment From Video 17


// Assignment 1 from website
let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));

console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberTwo + "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);
// End of Assignment 1 from website


// Assignment 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// End of Assignment 2

// Assignment 3
console.log(
  '`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""JavaScript""``'
);
// End of Assignment 3


// Assignment 4
let a = 21;
let b = 20;

console.log(`_${`${a}_${b}`.repeat(4)}_`); // _21_2021_2021_2021_20_
// End of Assignment 4
