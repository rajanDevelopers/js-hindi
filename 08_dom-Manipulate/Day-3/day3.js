// const liitem = document.getElementsByTagName("li");

// if i want to catch only State Name then
// using .children ==> Always given Html element  Method

// console.log(document.getElementById("stateId").children[1].innerHTML);

// fetch the childer parent Node ==> ul
// const liTag = document.getElementById("stateId").children[1].parentElement; // ul

// fetch the children parent of parent ==> div
/*
const childerOfparent =
  //   document.getElementById("stateId").children[1].parentNode.parentNode
  //     .childElementCount;

  document.getElementById("stateId").children[1].children;
document.getElementById("stateId").children[1].nextElementSibling.innerHTML;
document.getElementById("stateId").children[1].previousElementSibling.innerHTML;
document.getElementById("stateId").childElementCount; // count of Child of ul
document.getElementById("stateId").lastChild; // count of text because given line break
document.getElementById("stateId").lastElementChild.innerHTML; // last Element under of UL
document.getElementById("stateId").firstElementChild.nextElementSibling
  .innerHTML;

console.log(childerOfparent);
 */
// for (let j = 0; j < liTag.length; j++) {
//   //   if (j === 2) {
//   //     liTag[2].style.backgroundColor = "purple";
//   //   }

//   console.log(liTag[j].innerHTML);
// }

// liTag[1].style.backgroundColor = "purple";

// console.log(liTag);
// .childNodes ==> ye html element nhi deta hai ye text and comment ko count karta hai
// console.log(document.getElementById("stateId").childNodes);

// for (let i = 0; i < liitem.length; i++) {
//   if (i === 0) {
//     console.log(liitem[i].innerHTML);
//   }
// }
// console.log();
