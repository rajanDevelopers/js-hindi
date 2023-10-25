// forEeach Function ;

const NewArray = [1, 2, 3, 3, 5, 6];
const NewArryResult = NewArray.forEach((element) => {
  return element;
});
console.log(NewArryResult);

const myNumbers = [1, 3, 5, 6, 7, 8, 10, 15];
const MyNumberResult = myNumbers.forEach(function (el) {
  console.log(el);
});

// forEach() Function me ye hota hai ki apko jo value bhi Chahiye to usko function
// Under is Print karna hoga

const MyFreindName = ["Mohan", "sohan", "babli", "Wife"];

const EmptyArry = [];
MyFreindName.forEach(function (name, index, arr) {
  console.log(name, index, arr);
  if (index == 6) {
    EmptyArry.push(index);
  }
});
console.log(EmptyArry);
