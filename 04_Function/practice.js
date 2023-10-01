/* 
function item(itemvalue)  {
    return item;
}
item(100,100,200,100)

function sumOfitemValue (itemvalue) {

    let total = 0;

    itemvalue.forEach(item => {
        total += item;
        
    });
    return total;
    

}
console.log(sumOfitemValue(item));


const iteamValue = [100,100,200,100]

const sumofitem = (item) => {
    let totalAmout = 0;

    item.forEach(el => {
        totalAmout += el
        
    });
    return totalAmout

}
console.log(sumofitem(iteamValue));

let item1,item2,item3,item4;

let itemanme = parseInt(prompt(`enter value ${item1},${item2},${item3},${item4}  ${item1 + item2 + item3 +item4}`))

const sumofitemValue = (value) => {


}*/

// const newFun = (...rest) => {
// //    console.log(rest)
//     let summ  = 0;
//     const arr = []
//     for (const data of rest) {
//         summ += data
//         // console.log(summ)
//         arr.push(summ)
//     }

//         console.log(arr)
//         console.log( `sum : ${summ}`)
// //    console.log(summ)
// }
// newFun(10,20,30,40);

let initialValue = 0;
let somFun = (...newRest) => {
  const newdata = newRest.reduce((a, b) => a + b);
  console.log(newdata);
};

somFun(50, 100, 800, 40, 52);
