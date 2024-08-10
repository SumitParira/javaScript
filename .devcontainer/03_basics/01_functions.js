function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}

//sayMyName()
//sayMyName

// function addTwoNumbers(number1,  number2){
//     console.log(number1 + number2);
//     }

function addTwoNumbers(number1,  number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    }

    const result = addTwoNumbers(3 , 4)
    // console.log("result : ", result);


function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username}  just logged in `
}

// console.log(loginUserMessage("sumit"));
//  console.log(loginUserMessage("sumit"));
// console.log(loginUserMessage());

function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(200,400,500,2000));

const user ={
    username:"sumit",
    price: 298
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)
handleObject({
    username:"sam",
    price: 398

})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return myNewArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));






    