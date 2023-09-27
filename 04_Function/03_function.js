/* 

// console.log("Day 3 Function Basics");

// How to pass the under of function Multiple value 
// ex aap mall jate hai to card ka user karke multiple goods ko purchage karte hai 
// to js me ek method hota hai jo ki sabhi item ko ek bundle ke under store kar deta hai 


// using rest Operator in under of Function 
// function multipleCartValue (...item1) {

//     return item1   
    
// }
// console.log(multipleCartValue(100,500,400,900));



// 
function calculateCart(num1,num2,num3,num4,...num5) {
    return num1,num2,num3,num4,num5

}
// console.log(calculateCart(10,100,600,700,152,960));


// use to object under of Function 

const student = {
    name : 'Mohan Kumar', 
    Reg_No : 620820104078, 
    RollNO : '20cs109'
}


function  ObjectAccess(ObjectValueAccess) {
    return ` Student Detail , 
    Name : ${ObjectValueAccess.name},
    Registor NO : ${ObjectValueAccess.Reg_No}, 
    RollNo : ${ObjectValueAccess.RollNO}, 
    Thank You `
}
// console.log(ObjectAccess(student));


// Object use in the under of Function ==> Another Method Example 

const StaffObject  = {
    StaffName : "Sangita Mam", 
    StaffId : 209, 
    StaffSalary : 25000, 
    StaffWork : '8h'
}

function Feculty (FecultyObjectValue ) {
    return FecultyObjectValue
}
// console.log(Feculty(StaffObject));
// Another method ==> 

let UnderFunction = Feculty({
    StaffName : "HItesh KUmar Chaudary", 
    StaffId : 'CS1009', 
    StaffSalary : '4000',
    StaffWork : '6 Hour'

})
// console.log(UnderFunction)

function Members(MembersObject) {
     console.log(MembersObject);
    // return MembersObject
}
 Members({
    MembersName : "Rohini", 
    MembersTotalFamily : 10, 
    MembersLoaction : "Patna", 
    MemberIncome : '500000 LPA'
})


// use the Array under of the Function 

const MyArrayValue = [100, 178, 653, 253, 451, 365]

function ArrayFunction(ArrayFunction) {

    return ArrayFunction


}

console.log(ArrayFunction(MyArrayValue));


}





*/

    // Pass the under of Array in the Function 

    function ArrayFunction(ParameterName) {
        return ParameterName

    }

     // console.log(ArrayFunction([100,'hitesh','mohan',106,109,'20cs109']));


     // Another method in the Array inder the Function 

     const MyArray = [`Name: Rajan kumar, RollNo : 20CS109,Dep: CSE`]

     function ArrayReturnFunction(ArrayValue) {
        return ArrayValue
     }
     console.log(ArrayReturnFunction(MyArray));









function CreditCard(value1, value2,...num1) {
    return value1,value2,num1

}
const creditValue = CreditCard(100,200,300,500,900)
 console.log(creditValue);

 const ObjectHandle = {
    MentorName : "hitesh Sir",
    coursePrice : 2500, 
    courseName : "WEB"
 }
 

 function ObjectFunction (AnyObject) {
        return `NameMentor => ${AnyObject.MentorName},
         CourseName => ${AnyObject.courseName},
        CoursePrice => ${AnyObject.coursePrice}`

 }
 console.log(ObjectFunction(ObjectHandle));



function myFamily(members) {
    // return members;
    console.log(members);

}
 myFamily({
    MyName : "Rajan Kumar", 
    MyFatherName : "VidhyaNand Mahto",
    MyMOMname : "Jaladhiya Devi",

})










