// Basics Concept of Loop
// First Loop ==> for(intitlization, condition , Updation )
/* 
let Value = 10;
for (let index = 0; index <= Value; index++) {
  const element = index;
  console.log(element);
}

// You can create the any variable name

for (let i = 0; i <= 12; i++) {
  console.log(i);
}


// Loop ke under loop ==> ineer Loop
// created the Table of the Number ==> 2 * 1 = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value : ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loops value ${j} and inner loop ${i}`);

    console.log(i + "*" + j + "= ", i * j);
  }
}
*/
for (let i = 2; i <= 10; i++) {
  //  console.log(`Out loop Vlaue ${i}`);
  for (let j = 1; j <= i; j++) {
    // console.log(`Inner Loop vlaue : ${j} `);

    console.log(i + "* " + j + " = ", i * j);
  }
}
