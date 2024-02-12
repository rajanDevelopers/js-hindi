// console.log("Object Deap Knowledge by mdn ");
/* 
const myrule = Symbol("Rajan");
const jsUser = {
  name: "Rajan Kumar",
  Age: 24,
  location: "Patna",
};
// console.log(jsUser["name"]);
// console.log(jsUser.Age);



const a1 = {};
a1.constructor === Object;
// console.log(a1);

const a2 = new Object();
a2.constructor === Object;
// console.log(a2);

const a3 = [];
a3.constructor === Array;
console.log(a3);


function tree(name) {
  this.name = name;
}
const theTree = new tree("Hello ");
console.log(`theTree.constructor is ${theTree.constructor}`);



// Destructuring in Object
const course = {
  coursename: "Js in hindi ",
  coursePrice: 2100,
  Duration: "1Years",
};
// const { coursename, coursePrice, Duration } = course;
// console.log(coursename, coursePrice, Duration);
// Destructure

const { coursename: Name, coursePrice: price } = course;
console.log(Name, price);


function Name(FirstName, SecondName) {
  let FullName = FirstName + SecondName;
  return FullName;
}
const Result = Name("Rajan", "Kumar");
console.log(Result);
*/

function userName(name) {
  return `${name} just Login Now`;
}
// console.log(userName("mohan"));

// when will be use the if else condition  then
function myname(username) {
  if (username === undefined) {
    console.log("please Enter the Username");
    return;
  }

  return `${username} just login `;
}
console.log(myname("Rajan Kumar "));
