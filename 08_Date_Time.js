// console.log("About More Details for Date and Time in javaScript ");

// Date ==> Object

let MyDate = new Date();
console.log(MyDate);  // Mon Feb 26 2024 11:24:07 GMT+0530 (India Standard Time) // default toString() le leta hai ;
console.log(MyDate.toString());  // Mon Feb 26 2024 11:24:07 GMT+0530 (India Standard Time)

console.log(MyDate.toLocaleString()); //  2/26/2024, 11:24:07 AM
console.log(MyDate.toDateString()); // 'Mon Feb 26 2024' ==> ye answer deta hai 
console.log(typeof MyDate); // Object 

let myCreate = new Date();
console.log(myCreate.toDateString());  
console.log(myCreate.getDate()); // 26 ==> ye batata hai ki month ka koun sa date hai  

let todaydate = new Date();
console.log(todaydate.getDate()); // => ye aaj ka date batayega 


console.log(myCreate.getDay()); // 1 ==> ye is week a kon sa day hai ye data hai 

## The getDay() ==> method returns the day of the week (0 to 6) of a date.

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.log(day);


console.log(myCreate.getMonth());

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];



// Date new Formate

let CreatedDate = new Date(2023, 10, 12);
// console.log(CreatedDate.toLocaleString());

let MyDateForm = new Date();
// console.log(MyDateForm.toLocaleString());

// Previous Month or Year ka Date Finding Method

let OldDate = new Date(2022, 3, 26);
// console.log(OldDate.toString());

//));

let MyTimeStamp = Date.now();
//  onsole.log(MyTimeStamp);

// console.log(Date.now()/ 1000);
// console.log(MyTimeStamp.sl);

let NewDate = new Date();
console.log(NewDate.getMonth());
console.log(NewDate.getDay(s));
