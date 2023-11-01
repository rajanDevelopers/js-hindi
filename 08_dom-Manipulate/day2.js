// how can create the tage thorugh JavaSrcipt

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
