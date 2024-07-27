//we can declare Object in two way 1.literals  2.constructors
//singleton

//object literls

const mySym = Symbol("key1")

const  JsUser = {
    name:"sumit",
    "full name" : "Hitesh Choudhary",
    mySym : "mykey1",
    age:20,
    location : "Kolkata",
    email: "sumit@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
