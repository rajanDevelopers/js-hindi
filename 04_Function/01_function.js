// console.log("Basic of The Function Method ");
// Function Syntax 

function FunctionName () {  // ==> parameters 
    console.log("Print The Function Name ");
}
FunctionName() // ==> Calling the Function // argument


// Adding the Two Value 

function AddTwoNumber(num1,num2) {       // num1,num2 ==> is the Parameter 
    console.log(num1 + num2);
}
AddTwoNumber(10,12)   // Argument value  

// Another method 

function addtwoNumber(num3,num4) {
    let result = num3 + num4
    // console.log(result);
}
addtwoNumber(100, 100)


// Another Example 
function MultipleTwoNumber (number1,number2) {
    return number1 * number2;
    // console.log("Value is Undfined ");
}
const result2 = MultipleTwoNumber(10,3)
// console.log(result2);
// Note :-  agar 

// Arrow ==> Function 
const VariablMulti  = (x) => {
    return x * x; 
}
let FunctionValue = VariablMulti(12)
// console.log(FunctionValue);

function SayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("N");
}
SayMyName(); 


// function islogged(user) {
if(islogged ===undefined){
    console.log("Yes is The Same ");

// }

    return `${user} Just Logged in the PwClass`
}
console.log(islogged('Hitesh'))



function loginUserMessage(user) {
if(!user == undefined) {
    console.log("please enter a username");
    return

}
    return`${user} Just logged in`
    
}
// console.log(loginUserMessage("RajanKumar"))
console.log(loginUserMessage());