// singleton Object 
const user = new Object();
// console.log(user);

const userLogin = {}
userLogin.id = '123'
userLogin.name = 'Mohan'
userLogin.location = 'Chennai'
// console.log(userLogin);


const newuser = {
    firstUser: {
        FullNameUser:{
            firstNameUser:"Rajan Kumar", LastNameUser:"Mahto"
        }
    }
   
    }
//     console.log(newuser.firstUser.FullNameUser.firstNameUser);

// Example of College Login System 

const chairmen = {
    Acedamic_director : {
        principle: {
            VicePrinciple : {
                Hod : {
                    Advisor:{
                        studentName : "Rajan Kumar", 
                        studentId : '20cs109',
                        studentReg : 620820104078, 
                        FatherName : "Vidhua Nand Mahto", 
                        StudentLocation : "Bihar" ,
                        studnet : {
                            SubjectName: 'CNS',
                            SubjecCode: '103',
                            SubjectFacult : "Sangita Mam"

                        }
                    }
                }
            }
        }
    }
}
// console.log(chairmen.Acedamic_director.principle.VicePrinciple.Hod.Advisor.studnet);

// how to merge the two or more then Object 
// Object.Assign ==> 

const Obj1 = {a : 1 , b : 2 , c : 3 , d : 4};
const Obj2 = {e : 5, f : 6, g : 7, h : 8};

// console.log(Obj1);
// console.log(Obj2);

// combine the Both Object using 
// Object.assign(object1,object2,.....objectn) ==> {objectvalue1 , objectValue2 , ...... ObjectValuen}

const Obj34 = Object.assign(Obj1,Obj2)
const Obj3 = Object.assign({},Obj1,Obj2)

 console.log(Obj3);

    // Using Onther Method in Object 
   const obj4 = {...Obj1, ...Obj2};
   console.log(obj4);

   console.log(Object.keys(chairmen.Acedamic_director.principle.VicePrinciple.Hod.Advisor));
   console.log(Object.values(chairmen.Acedamic_director.principle.VicePrinciple.Hod.Advisor));
console.log(Object.values(chairmen.Acedamic_director.principle.VicePrinciple.Hod.Advisor));
console.log(Object.entries(chairmen.Acedamic_director.principle.VicePrinciple.Hod.Advisor));

ObjectName.hasOwnProperty("ExitingValue") //  ==> ye always given the Boolean value 
 console.log(userLogin.hasOwnProperty("Address"));


 // Object De-Structure  and JSON 

 let course = {
   courseName : "WebDevelopment",
    courseMentor : "HiteshSir",
    coursePrince : 1000
 }
//  console.log(course.courseMentor);

// Value ko Fetch karne ka Different Mehtod   ==> const {keyName} = objectName;
 const {courseName,courseMentor} = course
// console.log(courseName,courseMentor);


// De-Structure method ==> maine yaha per CourseMentor ko DE- structure kar diya hu 
// 
const {courseMentor : feculty } = course
 // console.log(feculty);

 // example of De-Structure ==> 

 const college = {
    collegeName : "GCT",
    studentName : "Suraj Kumar",
    studentRegistrationNu : 620820104078, 
    studentDepartment : "CSE",
    studentSemester : 7
 }
  console.log(college); // ==> This is Old Method 

 const {collegeName:clg, studentDepartment : SD, studentRegistrationNu : SR} = college;
 console.log(clg,SD,SR);

// example of De - Structure in JavaScript 

const HoD = {
    FacultyName : "Sangita Mam", 
    FacultyID : 103, 
    FacultyGmail : "Sangita@gmail.com", 
    FacultAge : 27, 
    FacultySallery : 35000,

            NewStaff : {
                NewFacultyName : "Hemlata Mam", 
                NewFacultyId : 104, 
                NewFacultyAge : 26, 
                NewFacultyGmail : "hemlataMam@gmail.com",
                NewFacultySalary : 25000

            }
}
// De - Structure Method 
 // HOD ==> Object Name
const{FacultyName : name, FacultAge : age, FacultyGmail:email, FacultySallery : salary, FacultyID : id } = HoD 
 console.log(name,id,email,age,salary); 
 console.log(`Name : ${name}, Id : ${id}, Age : ${age}, Gmail : ${email}, Salary : ${salary}`);

 console.table(HoD.NewStaff);

//JSON ==> apna kaam kisi ke uper rakh dena or thop dena 

// Syntax of JSON 
// {
    // "Name" : "Rajan Kumar ", 
    // "Id" : "123",
    //"location" : "Patna"
// }








