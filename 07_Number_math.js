// console.log("Numbers and Maths ");

// Numbers and Math in JavaScript 

const blance = new Number(1000);
console.log( typeof blance);

// These are the Method of the javaScript .. 

console.log(blance.toString().length);
console.log(blance.toFixed(2));


const anotherNumber = 2256.85
console.log(anotherNumber.toPrecision(3));


const AnyNumber = 1000000;
console.log(AnyNumber.toLocaleString('en-IN'));



// ++++++++++++++++++++++++  Maths In javaScript +++++++++++++++++++++++++++++++


console.log(Math);

//This is used for the Negative value change the in Positive value 

Math.abs(-10254s)

console.log(Math.abs(-100));


// Print the Approximate Value 
// Math.round();  ==> given the argument 

console.log(Math.round(4.5));
console.log(Math.round(8.69));

// Control the Approximate value 
// Math.ceil() ==> ka use maximum value ke liye kiya jata hai 
// Top vlaue ==> ex = 42.3 ==> 43 -> top value 
 console.log(Math.ceil(4.2));


// down value ==> Math.floor(); 
// Lowest value 
 console.log("Floor Value in javaSript ");

console.log(Math.floor(40.3));
console.log(Math.floor(11.9));
console.log(Math.floor(9));


console.log(Math.round(100.6));



// Find the Minimum Value in Array 
// Math.min((Arrya or set of Number))
console.log("Hello learner");
 console.log(Math.min(10,11,18,));

 console.log(Math.min(10, 12, 110, 15, 120,9));

// Find the Maximum value 
//console.log(Math.max(100,120,165,20));

console.log((Math.random() * 10) + 0.1);

console.log(Math.random());





// Formula 
//  (Math.random() * (max - min + 1)) + min;



const min = 10;
const max = 20;

console.log(Math.floor(Math.random()  * (max - min + 1) + min));



