//primitive

//7 types : String ,Number , Boolean , null , Undefined ,Symbol , BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)
console.log(id===anotherId)

const bigNumber = 24n
console.log(typeof bigNumber);




// Reference (Non primitive)

//Array,Objects,Functions 

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"sumit",
    age:22
}

const myFunction=function(){
    console.log("hello world");
}