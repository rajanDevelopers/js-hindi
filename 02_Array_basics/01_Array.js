
// console.log("Array Basics Function in JavaScript ");
// ## Array Basics and Array Method Also 

// Array always Created through the Square braket ==>  [ ]

let OneArray = [1,3,7,8,9];
 console.log(OneArray);

// Array Method 

// Array.push() ==> Add the New value in the array in last
OneArray.push(10);
 console.log(OneArray);


// Array.pop() ==> remove the value from array in Last value  
OneArray.pop();
 console.log(OneArray);


// Array.unshift() ==> add the value in array in the First Index (zero index) 
OneArray.unshift("Rajan");  // ==> ['Rajan', 1,3,7,8,9];
 console.log(OneArray);


// Array.shift() ==> remove the element in First index value in the Array 
OneArray.shift();  // ==> ['Rajan',1,3,7,8,9] == [1,3,7,8,9]
 console.log(OneArray);


// Array.includes() ==> find the value in the Array
 console.log(OneArray.includes(5));

// Array.indexOf() ==> He given the Index value 
//Note : if element present in the Array then he provide the ==> index Number; 
// if element not present in the Array then he Provide the ==> -1 value 

  console.log(OneArray.indexOf(7));


 // Array.slice() ==> Find the Range value in Array. Ex ==> Array.slice(1, 3); 
 let TwoArray = [0,1,2,3,4,5,6,7];
 console.log("A" , TwoArray);
 let ResultTwoArry = TwoArray.slice(1,7);
  console.log(ResultTwoArry);


// Array.splice() ==> Replace the Exiting element 

let TwoArrayValue = TwoArray.splice(1, 5);
console.log(TwoArrayValue);
console.log("B", TwoArray);


// Array.concat() ==> Addting the Two element Array 
let Array1 = [0,2,3,5,6,7];
let Array2 = [3,5,7,8,9];
let NewArray3 = Array1.concat(Array2);
console.log(NewArray3);




