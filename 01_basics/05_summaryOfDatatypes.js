// There are two types of data types
/*
1. Primitive dataType
a. Number
b. String
c. null
d. undefined
e. symbol
f. BigInt
g. boolen

2. Refrence data type(Non primitive data type)

a. Object
b. Function
c. Array

*/

// how to initilize it

const score = 100
const Maxscore = 100.3

const name = "Anubhav Raj"

const Temp = null

let city;

const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id==anotherId);


const heros = ["Anubhav","hitesh","supriya"]; //Array

let myObj = {  //object
    name :"Anubhav",
    age : 21,
    roll: 123
}
 const myfunction = function(){
    console.log("Hello World");
 }



 //******************************* MEMORY USE **************************** */

//  There are two types of memory space

//  1.Stack => All the primitive datatytpes are stored in stack.
//  2.Heap => All the Non-primitive datatypes are stored in heap.

// it is a primitive datatype thats why here data are copy 

let user = "AnubhavRaj"
let user2 = user;
user2 = "Supriya"
console.log(user);
console.log(user2);

let userone = {
    email:"Anubhav@gmail.com",
    age: 21
}

let usertwo = userone;
usertwo.email = "Supriya@gmail.com"

console.log(userone.email)
console.log(usertwo.email)



 