//Immediately Invoked Function Expression => IIFE

//it is used to protect the function from the global variable pollution

//how to use 
//01. we just have to cover the function in a paranthesis() 
//02. call it by a paranthesis() and in last we have to give semicolon

(function chai(){ // it is a named IIFE because it has name chai
    console.log(`DB Connected`);
}) ();

// we also use arrow function like that

( (name) => { //it is simple IIFE because it does`n have any name
    console.log(`DB Connected two ${name}`);
} ) ("Anubhav Raj");

