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







    