// control flow & Logic flow ==> created the Logic in JavaScript
// if(){} ==>

const MyName = "Rajan";
if (true) {
  console.log(`I Am ${MyName}`);
}

const scope = 200;
if (scope) {
  const power = "fly";
  console.log(`user have power for the ${power}`);
}

let Balance = 8000;
if (Balance >= 500) {
  console.log("Balance is the more the 500");
}
console.log("balane is less then 500");

// Hamlog scope ke under wala value ko Out of scope use nhi kar sakte hai
const scrope1 = "Mohan";
if (true) {
  const MyBalance = 400;
  console.log(`Mohan have the Total ${MyBalance} Ruppes Hai`);
}

console.log(`Aur ${scrope1} kisi ko  ${MyBalance} Rupiya Nhi dena Chalta hai`);

let value1 = 100;
if (value1 < 500) {
  console.log("Value1 have the 100 ");
}

let value2 = 50;
if ((value2 = 100)) {
  console.log("value2 have the 50");
}

// using if() { } else {} ==>
// ===  => equal & type bhi check karta hai
let ValueONe = "5";
if (ValueONe === "5") {
  console.log("Value One ka value 5 ");
} else {
  console.log("value one ka value different hai");
}

let NumberOne = 500;
if (NumberOne === 500) {
  console.log("First Number value is equl");
} else {
  console.log("Number of value is equal");
}

let var1 = 100;
let var2 = 200;
if (var1 >= var2) {
  console.log("value 1 and value 2 is equal");
} else {
  console.log("value 1 & value 2 is not equal");
}

// we can use the More then else if() Condition

let age = 18;
if (age === 20) {
  console.log("Age is the more then 18");
} else if (age > 18) {
  console.log("Age is greter then 18");
} else if (age < 18) {
  console.log("Age is the less then 18");
} else {
  console.log("Age is 18 ");
}
