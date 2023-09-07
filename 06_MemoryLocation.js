// Stack (Primitive), 
// Heap (Non - Primitive )

let myYoutudeName = "hiteshchoudharydotcom";
let anothername = myYoutudeName;


anothername = "chai and Code";

// console.log(myYoutudeName);

// console.log(anothername);

// Exaple of The Heap Memory Location
// Heap memory location me data ka Refrence Milta hai 
// But Heap me data ka Copy milta hai  


let userOne = {
    email : "userOne@gmail.com", 
    upi : "upi@ybl"

}

 console.log(userOne);

let userTwo = userOne;

userTwo.email = "RajanKumar3210@gmail.com";

console.log(userOne.email);

console.log(userTwo.email);