
//way to write function

function myname(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("V")
}

myname() //function calling

// function addTwoNumber(number1,number2){ //here number1 and 2 is parameter
//     console.log(number1+number2);
// }

// addTwoNumber(2,3) // here 2 and 3 that we pass is a argument
// NOTE => above function gives us the result but when we store it in any variable
// it does not store in that because our function does not return any thing

function addTwoNumber(number1,number2){ //here number1 and 2 is parameter
    return number1+number2;
}

let result = addTwoNumber(2,3)
console.log("Result", result);

function loggin(username){
    if(!username){ // we can also write it as (username===undefined)
        return "please enter username";
    }
    else{
    return `${username},just logged In`
    }
}

console.log(loggin());
