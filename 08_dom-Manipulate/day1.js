// how to Target or the Select the Element
// using id

/*
// console.log(document.getElementById("h1-id"));
// Another Method
let idVar = document.getElementById("h1-id");
// console.log(idVar);

// when will need only text content of the element
idVar = document.getElementById("h1-id").innerText =
  "<h1>Hello bhai kaise ho</h1> ";
// console.log(idVar);

// innerHTML = jo bhi kisi bhi tag ke under likha hoga uske content ko show karega

idVar = document.getElementById("h1-id").innerHTML =
  "<h1>Hello bhai kaise ho</h1> ";
console.log(idVar);
 

// fetch the using className
let classH1 = document.getElementsByClassName("h2-class");
console.log(classH1[0].innerHTML);


// fetch the using TagName to hamko ise me collection html milta hai
// jis ko fetch karna hai uska index number dena parta hai

const TagVar = document.getElementsByTagName("P")[2].innerText;
console.log(TagVar);


// using js change the css properties

let IDVariable = document.getElementById("h1-id");
IDVariable.style.width = "300px";
IDVariable.style.height = "250px";
IDVariable.style.backgroundColor = "purple";
console.log(IDVariable);



// Event Handling : Handle with the Event is called the Event Handling
// what ever operation perfome that called Event

let buttonVar = document
  .getElementById("btn")
  .addEventListener("click", function button() {
    console.log("Somthing is Happend ");
  });
*/

let divVaribale = document.getElementsByTagName("h1-id");
divVaribale.addEventListener("mouseenter", idFunction());

const idFunction = () => {
  console.log("Success");
};
