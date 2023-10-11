// About the Nested if() else{} ==> Method
// Real time Example

let userLoggIn = true;
let debitCard = false;
const userEmail = false;
const UserGoogle = true;

if (userLoggIn && debitCard) {
  console.log("User can by the course");
} else if (userEmail && UserGoogle) {
  console.log("User can Access through the Google Ya Email ");
} else {
  console.log("User Need the EveryThing then User can Accessable");
}

// && ==> Need the both true then it will Executed ==> ture & true ==> ture
// || ==> need Any one True then it will extecuted ==> true || false ==> ture

// Example ==>

const time = 10;

if (time === 10) {
  console.log("Good Mornging Sir");
} else if (time < 20) {
  console.log("Good Day sir ");
} else if (time >= 1) {
  console.log("Good AfterNoon Sir");
} else if (time > 5) {
  console.log("Good Night Sir");
}

let time1;

if (time < 10) {
  console.log("Greeting : Good Morning");
} else if (time1 <= 50) {
  console.log("Greeting : Good Day");
} else {
  console.log("Greeting : Good Evening");
}

// we can write the code like that ==>

let userName = "Rajan KUmar ";
if (true)
  console.log(`What is user Name :  ${userName}`), // This is not Readable Code
    console.log("Tum to Bhut ki Bad Men ho");
