// Stack (Primitive), 
// Heap (Non - Primitive )

let myYoutudeName = "hiteshchoudharydotcom";
let anothername = myYoutudeName;


anothername = "chai and Code";

// console.log(myYoutudeName);

// console.log(anothername);

// Exaple of The Heap Memory Location
// Heap memory location me data ka Refrence Milta hai 
// But Stack me data ka Copy milta hai ==> jab bhi aap koi value change karte hai to wo orginal value me change nhi hota 
let myYoutudeName = "hiteshchoudharydotcom"; 
let anothername = myYoutudeName; // ==> yaha per anothername ko myYoutudeName ka copy mila hai 


anothername = "chai and Code"; // ==> anothername ke under koi bhi changes karnege to wo only anothername ke hi under hoga ; 
                                // na ki myyoutudename ke under 



let userOne = {
    email : "userOne@gmail.com", 
    upi : "upi@ybl"

}

 console.log(userOne);

let userTwo = userOne; // yaha per hamko diretly userone ka refernece mila hai to agar usertwo me jo bhi changes karnge to userOne me bhi hoga ;

userTwo.email = "RajanKumar3210@gmail.com"; // email userone ka bhi change ho gya hoga ;

console.log(userOne.email);

console.log(userTwo.email);
