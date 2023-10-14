// Nullish Coalscing Operators ==> null, defined
// ye sirf null & undefined ke liye hota hai sign ==> ??

const value1 = 5 ?? 10 ?? 120;
console.log(value1);

// ye sirf first value ko catch karta hai
const value2 = 100 ?? 150;
console.log(value2);

// But null && undefined ke case me aisa nhi hota hai

const variableONe = null ?? 100 ?? 120;
console.log(variableONe);

const variablTwo = null ?? 105;
console.log(variablTwo);

// null or undefined ke pahla jo bhi value Aata hai usko hi catch karta hai

const variableThree = undefined ?? 69;
console.log(variableThree);

const variableFour = undefined ?? 100 ?? 156 ?? 36;
console.log(variableFour);

const vriabelSix = {};
if (Object.keys(vriabelSix).length === 0) {
  console.log("Object ek truthy value hai ");
} else {
  console.log("Object falsey value nhi hai");
}

// +++++++++++++++++++++++++++++++++++++  Terniary Operators +++++++++++++++++++++++++++++++++++++++++++++++++++++

// syntax of the Terniary Operators ==> variable (condition) ? print1() : print2();
// You can not add the third condition

const iceCream = "costely";
iceCream === true
  ? console.log("Icecream very costly hai ")
  : console.log("iceCream costly nhi hai ");

// Another Example

const userName = "Rajan";
userName === "Rajan"
  ? console.log("mera name Rajan hai ")
  : console.log("mera name Rajan nhi hai ");

// Another Example of the Terniary Operators

const MeraDostKuta = 100;
MeraDostKuta == 101
  ? console.log("meta dost 100 % kuta hai")
  : console.log("mera dost 100% kutta nhi hai");

// Another Example

const IceTeaCharge = 120;
IceTeaCharge > 120
  ? console.log("Tea is the equal to 120")
  : console.log("Tea is more then 120");

// Another example

const YourAge = 18;
YourAge === 18
  ? console.log("Age 18 then you are Eleligiable for vote ")
  : console.log("Age below 18 then you not eligiable for vote ");
