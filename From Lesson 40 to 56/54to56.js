// Assignment from video 56
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"];
let count = 1;

myAdmins.splice(myAdmins.indexOf("Stop"));
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
  document.write(`<h3>Team Members:</h3>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if(myEmployees[j][0] === myAdmins[i][0]){
      document.write(`<p>${count++}- ${myEmployees[j]}</p>`);
    }
}
  count = 1;
  document.write(`</div>`);
  document.write(`<hr>`);
}
// End of Assignment from video 56

// Assignment 1 from website
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index].startsWith("A")) {
    index++;
    continue;
  }
  console.log(`"${++counter} => ${friends[index]}"`);
  index++;
}
// End of Assignment 1 from website
