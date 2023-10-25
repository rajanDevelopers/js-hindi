// Global Scopes ==> {  }

{
  const num1 = 100;
  var num2 = 10;
  let num3 = 200;
}

console.log(num1); //  ==> not access
console.log(num1); //  ==> Access
console.log(num3); //  ==> Not Access

// Global Scope ==> Means that jo value ko ham kahi se Access kar sakte hai in the Paranthesis ke under bhi
// ==> isko kahi se Access kar sakte hai

//Block Scope ==> iska matlab hota hai ki ek Parenthesis ke under code {  } likhte hai aur
// Aur isko Bahar se Access Nhi kar sakte hai

if (true) {
  let undcle = "My_Uncle";
  const Brother = "My_BigBrother";
  var sister = "My_Cute Sister";
}

console.log(undcle);
console.log(Brother);
console.log(sister);

// MultiLine Comment ==>

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

function one() {
  const username = "Rajan Kumar Mahto";

  function two() {
    const websiteName = "Rajan.Youtube.com";
    console.log(username);
  }

  // console.log(websiteName);
  two();
}
one();

if (true) {
  const UserName = "Rajan Kumar Mahto ";
  if (UserName === "Rajan Kumar Mahto") {
    const WebsiteNameKya = "Youtube.com";
    console.log(UserName + WebsiteNameKya);
  }
  // console.log(WebsiteNameKya);
}
// console.log(UserName);

//console.log(NumberValue(10)); // ==> you can access without intilization
function NumberValue(num1) {
  return num1 + 1;
}

//console.log(ArrowFunction(10)); ==> you cannot access without intilization
const ArrowFunction = function (num2) {
  return num2 + 5;
};

const user = {
  userName: "Rajan Kumar",
  courseRate: 300,

  message: function () {
    return ` ${this.userName}Welcome to Message `;
  },
};
console.log(user.message());

// this Method used
const StudnetDeatils = {
  StudentName: "Rajan Kumar Mahto",
  StudentReg: 620820104078,

  StudnetMessage: function (Message) {
    console.log(`Hii Bro You have Access ${this.StudentName}`);
  },
};

StudnetDeatils.StudnetMessage();
StudnetDeatils.StudentName = " Saurab Kumar ";
StudnetDeatils.StudnetMessage();
console.log(this); // {}

function one() {
  let username = "Rajan kumar mahto ";
  //console.log(this.username);
}
one();
//Ans : undefined

const ArroFunc = () => {
  username1 = "Mhato Gii ";
  console.log(this.username1);
};
ArroFunc();

// ArroFunction hold

const FunArrow = (num1, num2) => {
  //explicit return
  return num1 + num2;
};
// console.log(FunArrow(10, 10));

const AnotherArrow = (first, sec) => first + sec;
//console.log(AnotherArrow(25, 25));

// implicit
// const FirstNamber = (One, two) => (one + two)
// console.log(FirstNamber(100, 100));

const firstName = () => ({ username: "Rajan" });
console.log(firstName(100, 12));
