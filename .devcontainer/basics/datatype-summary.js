//primitive

//7 types : String ,Number , Boolean , null , Undefined ,Symbol , BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id==anotherId)
// console.log(id===anotherId)

const bigNumber = 24n
// console.log(typeof bigNumber);




// Reference (Non primitive)

//Array,Objects,Functions 

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"sumit",
    age:22
}

const myFunction=function(){
    // console.log("hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) ,  Heap(Non - primitive)

let myYoutubename = "hiteshchoudharydotcom"
 
let anothername = myYoutubename
anothername="chaiurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "papaji@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);