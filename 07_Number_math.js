// console.log("Numbers and Maths ");

// Numbers and Math in JavaScript 

const blance = new Number(1000);
console.log( typeof blance);

// These are the Method of the javaScript .. 

console.log(blance.toString().length); // toString() ==>string me karke balnce ka length ko define karta hai 
console.log(blance.toFixed(2)); // .toFixed(2) => ye method batata hai ki vlaue ke bad apko kitan number chahiye 
                                // exa => 1000.00 ==> jab hamlog => .toFixed(2) denge tab 


const anotherNumber = 2256.85
console.log(anotherNumber.toPrecision(3));  // .toPrecision() ==> ye batata hai ki dasmalv ke bad kitana value lena hai 
                                           

// let a = 10.36;
// console.log(a.toPrecision(2)); ==> 10 ==> because ham isko kah rhe hai ki hame a ka 2 hi value do 

// Another Example ;
// let a = 10.36;
// console.log(a.toPrecision(3));  ==> 10.4 ==> ya per 10.4 isliye de raha because ham isko kah rhe hi ki mujhe 3 value do ; 


const AnyNumber = 1000000;
console.log(AnyNumber.toLocaleString('en-IN')); // ==> 10,00,000 ye india ke Currency me convert kar de rha hai ;



// ++++++++++++++++++++++++  Maths In javaScript +++++++++++++++++++++++++++++++


console.log(Math); // Math ek Object hai javaScript me 

//This is used for the Negative value change the in Positive value 
// Math.abs() ==> iska use only negative value ko Positive me convert karta hai 
Math.abs(-10254s) 

console.log(Math.abs(-100));  // => 100
 

// Print the Approximate Value 
// Math.round();  ==> jab hamlog uske under value pass karte hai to ham khte hai ki hame uska Approximate value do 
// ex : 3.6 ka Approximate value ==> 4 hoga  ==> Math.round(3.6) ==> 4 dega ;

console.log(Math.round(4.5)); //==> iska approximated value ko batata hi  ==> 5
console.log(Math.round(8.69)); // 9


// Math.ceil() ==> ka use maximum value ke liye kiya jata hai 
// Top vlaue ==> ex = 42.3 ==> 43 -> top value 
 console.log(Math.ceil(4.2)); // 5 hoga 
console.log(Math.ceil(5.1));  // 6 hoga maximum value 


// down value ==> Math.floor(); ==> ka use minimum value ke liye kiya jata hai 
// Lowest value 
 console.log("Floor Value in javaSript ");

console.log(Math.floor(40.3)); // 40.3 ==> 40 ==> // 40.3  minimum value  kitana hota hi utna hi do 
console.log(Math.floor(11.9)); // 11.9 ==> 11
console.log(Math.floor(9)); //9==> 9


console.log(Math.round(100.6));  // 100.6 ==> 101 dega 



// Find the Minimum Value in  ex => Math.min(10,3,18,19,4); ==> 3
// Math.min((Arrya or set of Number))
console.log("Hello learner");
 console.log(Math.min(10,11,18,)); // 10 dega 
Math.min(10,3,18,19,4); // => 3 dega 
 console.log(Math.min(10, 12, 110, 15, 120,9)); // 9 dega 

// Find the Maximum value 
console.log(Math.max(100,120,165,20)); // 165

console.log((Math.random() * 10) + 0.1);  // ye alway random value dega 

// Math.random() ==> ye Always 0 or  1 me value deta hai 
console.log(Math.random());

// 





// Formula 
//  (Math.random() * (max - min + 1)) + min;



const min = 10;
const max = 20;

console.log(Math.floor(Math.random()  * (max - min + 1) + min));

// ya ha per jo bhi random value aa rha hai uska minimum value do 
//Example : 
Math.floor(Math.random() * 10 + 1);   // => 7
Math.floor(Math.random() * 10 + 1); // => 9
Math.floor(Math.random() * 10 + 1); // => 5
Math.floor(Math.random() * 10 + 1); // => 4



