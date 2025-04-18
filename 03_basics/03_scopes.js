
//NOTE -> we dont use var because it does not follow the scope it is very hard to handle 
// if we declare var as global and a scope variable with the same name then 
//it overrides the global value and it takes the scope value and also we say which is \
// declare at last it take this value

if(true){
    let a = 10
    const b = 20
    var c = 30 // we can assces it after the scope
}
// console.log(c); // it is asscessable from here 
// but the let and const could not be acces after the scope 

function one(){
    const username = "Anubhav raj"
    function two(){
        const website = "Youtube"
        // console.log(username); // we can asscess parent function from child function
    }
    // console.log(website); // we cannot assces child function from parent function
    two()
}
one()


if(true){
    const username = "Anubhav"
    if(username==="Anubhav"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // here also the same case as function
}

// in this case we call or execute the function before declaration
console.log(addone(4))
function addone(num){
 return num+1;
}


// it is also a way to declare a function
//in this case we cannot call or execute a function before declaration
const addtwo = function(num){
    return num+1;
}
addtwo(4)