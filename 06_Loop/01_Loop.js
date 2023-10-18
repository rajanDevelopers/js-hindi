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

for (let i = 2; i <= 10; i++) {
  //  console.log(`Out loop Vlaue ${i}`);
  for (let j = 1; j <= i; j++) {
    // console.log(`Inner Loop vlaue : ${j} `);

    console.log(i + "* " + j + " = ", i * j);
  }
}


for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    console.log("5 is the best number");
  }
  console.log(i);
}


// Loop under loop ==> inner loop

for (let i = 0; i <= 10; i++) {
  console.log(`Inner loop vlaue ${i}`);

  for (let j = 0; j <= 10; j++) {
    console.log(`Outer loop value: ${j}`);
    console.log(`Inner Loop : ${i} && out loop ${j}`);
  }
}

// Print the all Table 1 to 10;

for (let i = 1; i <= 20; i++) {
  console.log(`Inner loop value : ${i}`);

  for (let j = 0; j <= 20; j++) {
    //  console.log(`Outer loop value : ${j} `);

    console.log(i + " * " + j + " = " + i * j);
  }
}


const myHeroes = ["Ajay", "Devgon", "TigerSherof", "Pawan"];

for (let i = 0; i < myHeroes.length; i++) {
  const element = myHeroes[i];
  console.log(element);
}



// Using break && continue keyword in loop

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    // console.log(" 5 is the Best Number ");
    break;
  }
  //  console.log(`This is i Value of : ${i}`);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(" 5 is the Best Number ");
    continue;
  }
  console.log(`This is i Value of : ${i}`);
}


// Another Example

for (let i = 0; i <= 10; i++) {
  console.log(`Inner Loop value :-  ${i}`);

  for (let j = 0; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}
*/
