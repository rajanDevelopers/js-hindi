document.getElementsByClassName("list-item");
HTMLCollection(4)[
  (li.list - item, li.list - item, li.list - item, li.list - item)
];

const mylistitem = document.getElementsByClassName("list-item");
undefined;

mylistitem.innerText;
undefined;

mylistitem[0].innerHTML;
("One");

// kya hamlog isper loop laga sakte hai
undefined;
mylistitem.forEach(function (item) {
  console.log(item);
});

ChangeArryForm.map(function two(el) {
  el.style.backgroundColor = "black";
});

// Converting the form to Array Form

li.forEach((el) => {
  el.style.color = "red";
});
undefined;
li.forEach((el) => {
  el.backgroundColor = "purple";
});
undefined;
li.forEach((el) => {});

li.forEach((el) => {
  el.style.color = "purple";
});
undefined;
li.map((el) => {});

li.map((el) => {
  el.style.color = "white";
});

Array.from(li);
undefined;

const ConverArray = Array.from(li);
undefined;

ConverArray;
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
ConverArray.map((element) => {
  element.style.padding = "15px";
});
