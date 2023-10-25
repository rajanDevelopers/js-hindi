//  Map()

const MyNewArray = [1, 3, 8, 5, 2];
const MyNewArryResult = MyNewArray.map((num) => num * 10);
console.log(MyNewArryResult);

// Another Example with Another Metod
const EmptyArryValue = [];
const NewArryValue = [10, 12, 15, 102, 0, 7];
NewArryValue.map(function (value) {
  value = value + 1;
  EmptyArryValue.push(value);
});
console.log(EmptyArryValue);

// Revers of the Print of Arry Value

const ReverSvalue = FirstArray.reverse();
console.log(ReverSvalue);

// kya hum map() ke under map() ka use kar Sakte hai kya

const FirstArray = [3, 5, 6, 7, 3, 2, 1];
const FirstValueResult = FirstArray.map((first) => first * 10).map(
  (first) => first + 1
);
console.log(FirstValueResult);

// Another Exaple of the Using Map() and also another function

const SecondArray = [10, 12, 6, 42, 5];
const EmptySecondArray = [];

SecondArray.map(function (ArryValue) {
  return ArryValue - 5;
}).forEach((ArrayValue) => EmptySecondArray.push(ArrayValue));
console.log(EmptySecondArray);
