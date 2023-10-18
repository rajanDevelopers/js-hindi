// These is the HigherOrder Loop ==> for of Loop  && for in Loop

const Greeting = ["Hello", "goodMornging", "Good Evening", "Good Night"];
// for (const iterator of object) {

// ==> iterator ==> variableName  && Object ==> kis par aap loop lagwant chahte hai
// }

for (const greet of Greeting) {
  console.log(greet);
}

// const NumbersValue = [1, 2, 3, 4, 56, 6];
// for (const number of NumbersValue) {
//   console.log(number);
// }

const ArrayFirst = ["Js", "C++", "java", "python", "Ruby"];
for (const Key of ArrayFirst) {
  console.log(Key);
}

// ++++++++++++++++++++++++++++++++++++ Map() ++++++++++++++++++++++++++++++++++++

// Map() ==> map me varibal.set() ka use karke value ko add Karte hai

const NewMap = new Map();
NewMap.set("js", "javaScript");
NewMap.set("Rb", "Ruby");
NewMap.set("Cpp", "C++");
NewMap.set("jv", "Java");
// using for of loop ka print the that newMap ==> jab ham log aise karte hai to iska
// result sab value alag alag Array ke form me aata hai

for (const key of NewMap) {
  // console.log(key);
}

// key && keyValue dono ko print karne kae liye

for (const [key, value] of NewMap) {
  console.log(key, value);
}

// Kisi Object per for of loop laga sakte hai

const Student = {
  " Name": "Rajan",
  " Class": "CSE",
  Reg: 78,
  RollNo: "20CS109",
};

for (const StudentKey1 of Student) {
  //  console.log(StudentKey);
}

// Hamlog kisi Bhi Object per for of loop ka use nahi kar sakte
// Beacouse is not iterable ==> not change

// To ham log is per for in loop ka use karte hai kisi Bhi Object me

let Student2 = {
  name: "Mohan",
  Reg: 78,
  RollNo: "20CS109",
};

for (const key in Student2) {
  console.log(` ${key}:- ${Student2[key]} `);
}

// We can take under of the Map() on the for in loop ==>

const MapVariable = new Map();
MapVariable.set("In", "India");
MapVariable.set("USA", "United State Of America");
MapVariable.set("RS", "Rasia");
MapVariable.set("UK", "United Kindom");

// Ye bhi itretiable hoti hai
for (const mapKey in MapVariable) {
  // console.log(mapKey);
}

// We can use the under the Arrya of for in loop ()

const ForInLoopArr = ["Santosh", "Mohan", "Maa", "Papa", "Bhai"];

for (const key in ForInLoopArr) {
  // He is giving the  Array Index Value
  console.log(` ${ForInLoopArr[key]}`);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++ forEac() ;
const Coding = [
  {
    TeacherName: "Sangita Mam",
    TeacherSalary: 36000,
  },

  {
    TeacherName2: "Hemlata Mam",
    TeacherSalary: 56000,
  },

  {
    TeacherName3: "Krishna Kumar",
    TeacherSalary: 48000,
  },

  {
    TeacherName4: "UmaMahesharwi Praven",
    TeacherSalary: 70000,
  },
];
Coding.forEach((item) => {
  console.log(item);
});
