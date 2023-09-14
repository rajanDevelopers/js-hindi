// Another Method in Array 

// Array.push() ==> Array ke under Array include as the next element 

let ArrayOne = ['rajan','golu','mohan','jannai'];

let ArrayTwo = ['Mam','bahbi','babli','nunu'];

let PushArray = ArrayOne.push(ArrayTwo);
 console.log(PushArray);




// Array.concat() ==> Joint the Both Array as seprated form wth different [in square barket ]
// You can add only two Array not More array 

let ConcatArray = ArrayOne.concat(ArrayTwo);
console.log(ConcatArray);



// if you have more then array then you want add it then using spread Operators 
// console.log(...Array1,...Array2, ...Array3) ==> [Array 1] [Array2] [Array3]
// you can use multiple array can added 

// Array = [...ArrayName,...Arrayname,...extra]; 

let ArrayThree = ['ram','laksh','sita','ravan'];

let ArrayFour = ['god','iswar','krishna','hanuman'];

let spreadOperatorsArray = [...ArrayOne,...ArrayTwo,...ArrayThree,...ArrayFour];

console.table(spreadOperatorsArray);

console.log(spreadOperatorsArray);



// Array.flat(infinity) ==> Array under Array ko ek Array me convert karta hai  

let FlatArrayEx = [1,3,4,5,[6,4,5,7],6,7,8,[10,11],9,0,6,[1,0,2],12,15];
console.log(FlatArrayEx.flat(Infinity));

// Intresting Array Concept 

console.log(Array.isArray("Rajan"));
console.log(Array.isArray("Rajan"));


// rray.form() ==> convert into String to Array element

console.log(Array.from("Rajan"));

console.log(Array.from({name:"Rajan"}));


// Array.of() ==> convert the Array 

let scope1 = 100;
let scope2 = 200;
let scope3 = 400;

console.log(Array.of(scope1,scope2,scope3));


