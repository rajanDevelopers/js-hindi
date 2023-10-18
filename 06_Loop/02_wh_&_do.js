// Basics Of the While Loop
// while() {} ==> ka matlab hota hai ki first me Condition Check Kro
// Uske baad Operation Perform kros

/* 
while (2 <= 10) {
  console.log("Yes This condition is True");
}


// Example of While loop

let index = 0;
while (index <= 10) {
  console.log(`This is index Value : ${index}`);
  index = index + 1;
}


// Another example
let i = 0;
while (i <= 20) {
  console.log(`This is I value : ${i}`);
  i += 2;
}

// Example of Array

let MyNewArray = new Array("Rajan", "Mohan", "Babu", "GoluBaba");
let myArrayLength = 0;

while (myArrayLength < MyNewArray.length) {
  console.log(`Array : ${MyNewArray[myArrayLength]}`);
  myArrayLength += 1;
}

// Array for While Loop
let ArrayValue = ["Rajan", "Hitesh", "Misraj"];
let ArrayVariable = 0;

while (ArrayVariable < ArrayValue.length) {
  console.log(`ArrayValue : ${ArrayValue[ArrayVariable]}`);

  ArrayVariable++;
}
//  Object me ye condition nhi lagta hai
let MyNewObject = { Name: "Rajan", Age: 22, Salary: 2500 };
let MyNewObjectVariable = 0;

while (MyNewObjectVariable < MyNewObject.Age) {
  //   console.log(`This Object : ${MyNewObject[MyNewObjectVariable]}`);
  MyNewObjectVariable++;
}
*/

// +++++++++++++++++++++++++++++++++++++++++  do() { } while(condition) = +++++++++++++++++++++++++++++++++++++++

// do() {} while(); ==> iska matlab hota hai ki first me Operation Perform kro uske baad Condition per jao ..
// Example of do(){} while()

let NumberValue = 120;

do {
  console.log(`Number Value  ${NumberValue}`);
  NumberValue++;
} while (NumberValue === true);
