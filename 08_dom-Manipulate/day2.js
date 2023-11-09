// how can create the tage thorugh JavaSrcipt
/* 
let divVar = document.createElement("div"); // ==> <div></div>

// kisi bhi Element ke under class kaise de through JavaScript,
// ==> variable.classList.add('className')
divVar.classList.add("product"); // <div class = "product"></div>

let h1Var = document.createElement("h1");
h1Var.textContent = "hello Boys How are You";

let h3Var = document.createElement("h3");
h3Var.textContent = "Hii sir we are fine ";

// jab kisi element ke under koi another tag likhna ho to
// ==> variable.appenChild(which tag you want)
// ==> <div class ="product"> <h1>Hello boys how are you </h1> </div>

divVar.appendChild(h1Var);
// let underh3Var = divVar.appendChild(h3Var);

// AnotherExample

// const ulVar = document.createElement("ul");
// // given the ul under class name through js

// ulVar.classList.add("ul-class");
*/

let products = [
  {
    Name: "Sumsungs M51",
    price: " RS 25000",
  },
  {
    Name: "Moto G56",
    price: " RS 15000",
  },
  {
    Name: "IQOO Z6 5G",
    price: " RS 18000",
  },
  {
    Name: "Poco M4",
    price: " RS 12000",
  },
  {
    Name: "Infinix ",
    price: " RS 9800",
  },
  {
    Name: "One + ",
    price: " RS 35000",
  },
];

for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div");
  // div.className = "product";
  div.setAttribute("class", "Product");

  let h2 = document.createElement("h2");
  // let text = document.createTextNode("Tooth Paste ");
  // h2.appendChild(text);
  h2.innerText = products[i].Name;

  let h3 = document.createElement("h3");
  // let textH3 = document.createTextNode("Price of Tooth Paste ");
  // h3.appendChild(textH3);
  h3.innerText = products[i].price;

  div.appendChild(h2);
  div.appendChild(h3);

  document.body.appendChild(div);
  div.style.backgroundColor = " red";
  div.style.color = "black";

  document.getElementById("parent-id").appendChild(div);
  console.log(div);
}
