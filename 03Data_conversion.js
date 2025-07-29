
let score = 35;
// console.log(typeof score);


let Name = "Rajan Kumar Mahto"
// consloe.log(typeof Name)

// "33" ==> 33
// "33abc" ==> NaN (Not a Number)
// ture ==> 1; false ==> 0;
// 


let SomeNumber = 33;

let stringName = String(SomeNumber);
// console.log(stringName); => 33
// console.log(typeof StringName) ==> String DataType 

let isLogged = 1;
let LoggedForm = Boolean(isLogged);
// console.log(LoggedForm); => 1
// console.log(typeof LoggedForm) => True;

let Loggin = 0;
let IsLoggin = Boolean(Loggin);
// console.log(IsLoggin); =>0
// console.log(typeof IsLoggin) ==> False;

// Note 

// 0 ==> false ;
// 1 ==> true ; 

let sTringNumber = "100";

let CheckData = Number(sTringNumber);
// console.log(typeof sTringNumber) => String;
// console.log( typeof CheckData); =>Number;

let EmptyString = ""
let BooleanEmptyString = Boolean(EmptyString);
// console.log(EmptyString); => 0;
// console.log(BooleanEmptyString); => False; 


let NonEmptyString = "RajanKumar"
let BooleanNonEmptyString = Boolean(NonEmptyString)
console.log(BooleanNonEmptyString); // True 
//#### Note :- 
// "" ==> false; // Agar double code ke under kuch nhi hai to False Consider karga 
// "NonString" ==> true; // Agar double code ke under koi bhi value hai to wo hamesa True consider karga 
// "0" => true 
// " " => True // double code ke under agar space hi denge to True hi consider karga 

let EmtyString = "0";
let BooleanSting = Boolean(EmtyString);
console.log(BooleanSting); // True
console.log(typeof BooleanSting); // Boolean


let Numb = Number("123")
// console.log(Numb); => 123
// console.log(Object.keys(Numb));

let Numb = Number("123");
console.log(Numb); // 123
console.log(typeof Numb); // Number 
console.log(Object.keys(Numb)); // [] Object aayega 


let value = 3;
let NegValue = -value;
 console.log(NegValue); // -3 Hoga 
