
//literal object


// here we define the symnbol to use it in the object 
const mysym = Symbol("key1")

// here the key is consider as string 
const user = {
    name: "Anubhav Raj",
    "full name": "Supriya Bhardwaj", // we assces it onley by 2nd method
    [mysym]: "myKey1", //by writing the key in square bracket does`t change its datatype(symbol),
                        //if it write in normal then its datatype is string
    age: 21,
    email: "anubhav@google.com",
    location: "bihar",
    isLoggedin: false,
    lastLoggedIn: ["Monday","sunday"]
}

// how we acces the element of object
//01.
console.log(user.name);

//02.(when the key is specially mention as a string then weahave only one method to assces it)
console.log(user["full name"]);
console.log(user[mysym]);


// how we updat the value 
user.email = "Anubhav@microsoft.com";

// by using freeze we freeeze the value of aur object and after that we do not 
//able to change and update the value

// Object.freeze(user);

user.email = "Anubhav@snap.com";

console.log(user);


// how we define function 
user.greeting = function(){
    console.log("Hello JS user");
}

// here we use "this" keyword to ascces the member of the object in function
user.greetingtwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());
