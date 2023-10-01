// Global Scopes ==> {  }

{
  const num1 = 100;
  var num2 = 10;
  let num3 = 200;
}

// console.log(num1); ==> not access
// console.log(num1); ==> Access
// console.log(num3); ==> Not Access

// Global Scope ==> Means that jo value ko ham kahi se Access kar sakte hai in the Paranthesis ke under bhi
// ==> isko kahi se Access kar sakte hai

//Block Scope ==> iska matlab hota hai ki ek Parenthesis ke under code {  } likhte hai aur
// Aur isko Bahar se Access Nhi kar sakte hai

if (true) {
  let undcle = "My_Uncle";
  const Brother = "My_BigBrother";
  var sister = "My_Cute Sister";
}

// console.log(undcle);
// console.log(Brother);
// console.log(sister);

// MultiLine Comment ==> /* */

function OneValue(firstValue = "Ice") {
  function TwoValue(secondValue = "cream") {
    console.log(firstValue + secondValue);
  }
  TwoValue();
}

OneValue();

if (true) {
  const userNmae = "Rajan kumar ";

  if (userNmae === "Rajan kumar") {
    const website = "www.Youtube.com";

    console.log(userNmae + website);

    console.log(userNmae);
  }
  console.log(website);
  console.log(userNmae);
}
console.log(userNmae);

// Without Initilization
// phale function ko call kar de useke baad code write kar rhe hai

AddtionValue(5); // ye Exicute ho jayega
function AddtionValue(num2) {
  //  console.log(num2 * 5);
}

// before initialization you cannot Access the addone value
// phale function delcare kigiye uske baad function call kigiye
addone(5); // ye Answer Exicuted nhi hoga

const addone = function MyAddtion(num1) {
  console.log(num1 * 2);
};
