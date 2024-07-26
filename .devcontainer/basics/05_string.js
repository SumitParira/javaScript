const name="sumit"
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sumit-kumar-parira')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3)); // character at that index
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-18,1) //string.slice(startIndex, endIndex) startIndex: The index at which to start extraction. If negative, it is treated as stringLength + startIndex.
console.log(anotherString);

const newStringOne = "    sumit     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sumit.com/sumit%20parira"

console.log(url.replace('%20','-'));

console.log(url.includes('sumit'));

console.log(gameName.split('-'));

//use mdn for help