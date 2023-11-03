// created throgh the javaScript All MOnth Name

let divVar = document.querySelector("div");
// console.log(divVar);

// console.log(divVar.firstElementChild.innerHTML); // Parent of first child
// console.log(divVar.lastElementChild.innerHTML); // Parnet of Last Child

let childWithdiv = divVar.children;

childWithdiv[1].style.color = "purple";
console.log(childWithdiv);

// parent ke children ko catch karne ka ek method hota hai
// variabl.childern ==> HTMLCollection milta hai

// console.log(divVar.children[2].innerHTML);

// Another Method

// console.log(document.querySelector("div").children);

// Ab is per loop lagane ke bad uske sabhi childern ko catch kar sakte hai

for (let i = 0; i < childWithdiv.length; i++) {
  console.log(childWithdiv[i].innerHTML);
}

// change the css properties

// i can use the function

function small() {
  for (let j = 5; j < childWithdiv.length; j++) {
    if (j == 6) {
      // jaise j == 6 ho uska color red ho jaye
      childWithdiv[j].style.color = "red";
      console.log(childWithdiv);
    }
    // console.log(childWithdiv[j].innerHTML);
  }
}
small();

// +++++++++++++++++++++++++ Child through the Parent  ++++++++++++++++++++++++++++++++++

const childVar = document.querySelector(".month-class");
// console.log(childVar[2].innerHTML);

// catch the childVar Parent  ===> chldVar.ParnetElement

// console.log(childVar.parentElement);
// console.log(childVar.childNodes);
// console.log(childVar.parentElement.childNodes);

// console.log(childVar.nextElementSibling.innerHTML);
