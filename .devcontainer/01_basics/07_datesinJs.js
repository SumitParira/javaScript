//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,11,23)
// let myCreatedDate = new Date(2023,11,23,5,5)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01/14/2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
console.log(newDate.getDay());



console.log(newDate.toLocaleString('default',{weekday: "long"}));
