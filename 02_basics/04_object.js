     // object Skelton

// in skelton object we use constructor     
//both line 6 and 7 are the same way to represent a constuctor object

// const bumbleuser = new Object(); 
const bumbleuser = {}; 
bumbleuser.name = "Anubhav Raj"
bumbleuser.Id = "123abc"
bumbleuser.email = "abc@gmail.com"
bumbleuser.Isloggedin = "true"

console.log(bumbleuser);

// is method ka help sa ham saara keys ko ak sath array ma la sakta hai 
console.log(Object.keys(bumbleuser));

// is method ka help sa ham saara values ko ak sath array ma la sakta hai 
console.log(Object.values(bumbleuser));

// is mwethod ka help sa ham ak array ka andar har ak key aur uska valuie ka array baana sakta hai
console.log(Object.entries(bumbleuser));

//Nesting of Object

const user = {
    name: "abc",
    fullname: {
        email: "hello",
        userfullname: {
            firstName: "Anubhav ",
            lastName: "Raj"
        }
    }
}

// this is the way to print the value of nested object
console.log(user.fullname.userfullname.firstName);
console.log(user.fullname.email);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

//There are different way to arrrange 2 or more object in a single object

//01. it takes both the object in a single obj { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = {obj1,obj2}
console.log(obj3);

//02.it takes all the key and value to the single obj { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//here all the element of obj2 are assign in obj1
const obj4 = Object.assign(obj1,obj2)

// if we write this then all the ele of obj1 and 2 are assign in empty obj
const obj = Object.assign({},obj1,obj2)
console.log(obj4);

//03. it is a spread method
const obj5 = {...obj1,...obj2}
console.log(obj5);

//Objects in a Array

const day = [
    {
        day1: "monday"
    },
    {
        day2: "Tuesday"
    },
    {
        day3: "Wensday"
    },
    {
        day4: "Thrusday"
    }
]

console.log(day);
// we also iterate in it
console.log(day[1]);

//it helps us to know is there this key or not in a specific object
console.log(bumbleuser.hasOwnProperty("name"));

// Object Destructing

const cousre = {
    name: "Anubhav Raj",
    coursename: "JS-in Hindi",
    price: 1000
}
// here we destructing the object 
const {coursename: subject} = cousre

// console.log(coursename);
console.log(subject);

