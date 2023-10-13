// Basics vlaue of the Truthy
/* 
const userEmailId = "rajan@gmail.com";

if (!userEmailId) {
  console.log("Got Email Id ");
} else {
  console.log("Dont get Email Id");
}

// For Truthy Value ==> Variable = " " // with Space
const UserValue = " ";
if (UserValue) {
  console.log("This Empty value is Truthy ");
} else {
  console.log("This is not Truthy Value ");
}

//
const ZeroValue = "0";
if (ZeroValue) {
  console.log("Zero is also ");
} else {
  console.log("Zero is not Truthy");
}

//
const NegativeZero = -0;
if (true === NegativeZero) {
  console.log("Negative Zero is truety Value");
} else {
  console.log("Negative Zero is not Truety Value ");
}

const NegativeValue = false;
const PostiveValue = true;

// && operators ka use ke liye dono ko True hona chahiye tab hoga
if (NegativeValue && PostiveValue) {
  console.log(" False is falsey value hai ");
} else {
  console.log("false value");
}

// ||  ==> is me koi ek ture hona chahiye

const truetyValue = true;
const falseyValue = false;

if (truetyValue || falseyValue) {
  console.log("false falesy value hai");
} else {
  console.log("true Truey Value hai ");
}

/// ++++++++++++++++++++++++ Checking the Truey Value  &&  falsey Value  +++++++++++++++++++++++++++++++++++

// truety Value ==> "0", 'false', " ", [], {}, function(){}

const ZeoValueINStringUnder = "0";
if (ZeoValueINStringUnder) {
  console.log("Zero is truety Value Under the Doubble code/ Single Code ");
} else {
  console.log("Zero is falsey value withOut the Dobble code/Single code ");
}


const FalseValue = "false";
if (FalseValue) {
  console.log("Under of the double code that truthy vlaue ");
} else {
  console.log("without double code this is Falsey Value ");
}


const ArrayValue = [];
if (ArrayValue) {
  console.log("Array is the truety Value ");
} else {
  console.log("No Array is not Truthy value");
}


const SecondArrayValue = [10, 15, 30];
if (SecondArrayValue.length === 0) {
  console.log("Array is Full fill ");
} else {
  console.log("Array is Fully Empty ");
}


const userMail = [];
if (userMail.length === 0) {
  console.log("Array is Fully Empty ");
}


// if check the {} Objecet value turyth hai ya nhi to
// First Object {} ko Array me Convert Karna hoga

const ObjectValue = {};
// if (ObjectValue.length === 0) {
// console.log(object);  // ===> ko is turety value nhi nikal sakte hai

// } else {
// }

// Another Method  ==> Object.keys(VariableName).length === 0
const SecObjectValue = { Rajan: "mohan" };
if (Object.keys(SecObjectValue).length === 0) {
  console.log("Empty Object is truety Value ");
} else {
  console.log("if write the Any thing Under Object is not truety value ");
}


// Truety vlaue me koi Function bhi ho sakta hai
// Using the Arrow Function ==> () => { }
const MyFunction = (num = 0) => {
  if (num === 10) {
    console.log("yes function bhi turety hota hai");
  } else {
    console.log("Else me always falsey value hota hai ");
  }
};
MyFunction();

*/
// Using the normal Function

const NormalFunction = function () {
  const firstValue = 100;

  if (!false) {
    console.log("True always truety falue hota hai");
  } else {
    console.log("else ye turety value nahi hota hai ");
  }
};
NormalFunction();
