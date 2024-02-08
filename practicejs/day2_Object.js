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
*/

function tree(name) {
  this.name = name;
}
const theTree = new tree("Hello ");
console.log(`theTree.constructor is ${theTree.constructor}`);
