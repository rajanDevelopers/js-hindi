// reduse() ==> ye Alsway to value leta hai current Vlaue &  previos value
/* 
const MyArry = [10, 20, 40, 11];
const MyArrayResult = MyArry.reduce((Accu, currentVal) => Accu + currentVal, 0);
console.log(MyArrayResult);

// reduce() ==>me array1.reduce((accumulator, currentValue) => accumulator + currentValue


// Another Exmpale

const FirstArryValue = [1, 2, 4, 6, 4, 6, 7];
const ResultOfArry = FirstArryValue.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue;
},
0);
console.log(ResultOfArry);




//  using Arrow fucntion ()

const valueArray = [10, 4, 6, 11, 45, 23, 10];

const ValueResult = valueArray.reduce((Accu, curval) => Accu + curval, 0);
console.log(ValueResult);
// isme 0 isliye lagya jata hai because ke kaha se start hoga 


const NewArrayFirst = [10, 20, 10, 15, 40];
const initization = 0;
const ResultNew = NewArrayFirst.reduce(
  (Accu, curValue) => Accu + curValue,
  initization
);
console.log(ResultNew);


// Another Exaple of the Redues ( )

const ArryValue = [10, 10, 20, 50, 40, 19, 1];
const ResultOfArrayValue = ArryValue.reduce(function (Accu, curval) {
  console.log(`Accu: ${Accu}, Curval ${curval}`);
  return Accu + curval;
}, 1);

console.log(ResultOfArrayValue);
*/

// jab Aap Mole me Kuch Buy Karte hai to kaise
// multiple Object Collete kiya jata ek Arry ke under

const Shopingitem = [
  { shirt: "Blue", price: 500 },
  { shirt: "pink", price: 350 },
  { shirt: "red", price: 450 },
  { shirt: "yellow ", price: 500 },
];
const TotalShopingBalance = Shopingitem.reduce(
  (Accu, item) => Accu + item.price,
  0
);
console.log(TotalShopingBalance);
