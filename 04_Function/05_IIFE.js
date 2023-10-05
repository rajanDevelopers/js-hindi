// Concept of IIFE
// IIFE => Immediate Invoked  Function Expression
// IFEE ==> Global scrope ke pollution se kai baar Problem hoti hai to ,
// Global Scope ke Variable Declear ko remove karne ke liye IIFE ka Use kiya jata hai

(function ChaiAndCode() {
  console.log("My Febrate Teacher: Hitesh Chourdary");
})();

// if without semiColon ke Execution karne par Error Show karega  because IIFE Me
// Jb exection ek time me more then function ka use kiya jata hai to end of code me semicolon use karna parta hai

(function AnotherFunction() {
  console.log("Hello Bhai How are You");
})();

// Using Arrow Function Create IIFE

(() => {
  console.log("Gnannamani College of Technology");
})();

function One() {
  console.log("One Print");
}

function Two() {
  console.log("Two Printed ");
}

function Three() {
  console.log("Three will b Printed ");
}

One();
Two();
Three();
