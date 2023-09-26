
console.log("Function Basics About ");


function islogged(username = "I am ") {

    if (!username) {
        console.log("please enter your username");
        return
    }
    return `${username} just login`

}
console.log(islogged());


const username  = "Pankaj Kumar "

function UserLoginProcess(username = 'ramu') {
    if (!username) {
        console.log('please Enter userid');
        
    }
    else {
        console.log("User Name is Already Given ");
        return
    }

    `${username} is Login `
   
}
console.log(UserLoginProcess());





