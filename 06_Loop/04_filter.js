// filter()

const myNumbers = [1, 3, 5, 6, 7, 8, 10, 15];
const MyNumberResult = myNumbers.forEach((element) => {
  return element;
});
console.log(MyNumberResult);

// jab
const ArrayValue = [10, 26, 8, 9, 14, 18];
const ArryaValueReuslt = ArrayValue.filter((value) => {
  // jab arrow function ke under agar {} dete hai to of empty [] deta to
  // isko remove karne ke liya return ka use kiya jata
  return value;
});
// console.log(ArryaValueReuslt);

// Login Condition of the Under MyArrayValue

const FirstArray = [1, 2, 3, 5, 6, 7, 4, 8, 9, 10];
const FirstArryResult = FirstArray.filter((element) => {
  if (element >= 5) {
    return element;
  }
});
console.log(FirstArryResult);

const FirstArray2 = [1, 2, 3, 5, 6, 7, 4, 8, 9, 10];
const FirstArrayResult = FirstArray2.forEach((element) => {
  if (element > 5) {
    return element;
  }
});
console.log(FirstArrayResult);

// FirstArrayResult ka result to Undefined de rha hai

const mynums = [];

const AnotherResult = FirstArray2.forEach((element) => {
  if (element > 5) {
    mynums.push(element);
  }
});
console.log(mynums);

// Ek Array ka value ko Empty Array me value ko fill

const AnyArrayValue = [10, 15, 18, 11];
AnyArrayValue.push(100);
AnyArrayValue.push(42);
AnyArrayValue.unshift(3);
AnyArrayValue.unshift(6);
AnyArrayValue.unshift(12);
console.log(`These Array Value [${AnyArrayValue}]`);

const EmptyArray = [];
const NewEmptyArray = [];

const ArryHold = AnyArrayValue.forEach((element) => {
  // set the logic
  if (element >= 11) {
    // jo value 11 se big hai usko EmptyArry me include kro
    EmptyArray.push(element);
  }
});
console.log(EmptyArray);

// kya Yahi kaam ham filter ke saath kar sakte hai

const NewArryValue = [10, 15, 25, 30, 44, 55];
const FistEmptyArry = [];

const ResultOfNewArry = NewArryValue.filter((element) => {
  if (element > 15) {
    FistEmptyArry.push(element);
  }
});
console.log(FistEmptyArry);

// ha Hamlog ye kaam filter && for.Each() dono se kar sakte hai +++

// Real time Example for the object

const Books = [
  { title: "JavaScript", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "PhP", genre: "Roman-Chart", publish: 1884, edition: 2005 },
  { title: "Java", genre: "Riched", publish: 1985, edition: 2006 },
  { title: "C++", genre: "MohanCharn", publish: 1987, edition: 2008 },
  { title: "python", genre: "Kalanad-MohanDas", publish: 1989, edition: 2004 },
  { title: "kotlin", genre: "RajaneshKarn", publish: 1999, edition: 2010 },
  { title: "Kinematics", genre: "V. JavaKumar", publish: 2001, edition: 2012 },
  { title: "ManuFactruing", genre: "G.K Vijay", publish: 2003, edition: 2015 },
  { title: "Engineering Math", genre: "Fiction", publish: 1884, edition: 2005 },
  { title: "python", genre: "V.javaKumar", publish: 1999, edition: 2017 },
];

// let MyUser = Books.filter((bk) => bk.edition === 2005);
// MyUser = Books.filter((bk) => bk.title === "python");
// console.log(MyUser);

let Myuser2 = Books.filter((book) => {
  return book.edition < 2005;
});
console.log(Myuser2);
