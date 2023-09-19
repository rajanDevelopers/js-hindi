// console.log("About the Basics knoledge of Object");
// singleton ==> koi bhi constructor apne tarah ek hi 
// singleton ==>  make through the constructor 
// object literals ==> declare through the a literals 


let mySym = Symbol("key1");

let Jsuser = {
    name : 'RajanKumar',
    [mySym] : "myKey1",
    Reg_no : 109,
    age : 22, 
    location : 'patna', 
    email : 'rajangoolg@gmail.com', 
    isloggedId : false,
    lastisloginDays : ['monday','saturday']

}
// Old method feth the Object element => Object.elementName
console.log(Jsuser);
console.log(Jsuser.email);
console.log(Jsuser.location);

// feth the Another Method in Object  ==> Object["elementName"

console.log(Jsuser["email"]);
console.log(Jsuser["lastisloginDays"]);
console.log(Jsuser["isloggedId"]);
console.log(Jsuser.mySym);

console.log(typeof Jsuser.mySym);  // ==> String not Symbol but i want symbol
console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);
console.log(Jsuser);

// update the value in Object  ==> Object.element = value 

Jsuser.email = "rajanMicroSoft@gmail.com";
// console.log(Jsuser.email);

// Object.frease() ==> Stop the value for Update 
// Object.freeze(Jsuser);
Jsuser.email = "karanKumarEmplay@gmail.com";
// console.log(Jsuser.email);

// Object with created the Function 

Jsuser.greeting = function() {
    console.log("Hello Learner for JS ");
}
console.log(Jsuser.greeting());


// Function Through access the Object element value 

Jsuser.greetingTwo = function() {
    console.log(`Hii what your Name ${this.name}`);
    console.log(`Reg ${this.Reg_no} , Gmail:  ${this.email}`);
}

console.log(Jsuser.greetingTwo());