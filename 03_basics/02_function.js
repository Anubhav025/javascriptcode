//when we have to pass more than one argument to the parameter(1 parameter) then we use 
//...operator which conver the value in a array [ 200, 300, 400, 500 ]

function calculateMyCart(...value){
    return value
}
console.log(calculateMyCart(200,300,400,500));

//this is the way to pass an obj to an function
const user = {
    username: "Anubhav Raj",
    price:1000
}

function returnobjectcontent(myObject){
console.log(`user name is ${myObject.username}, and the price is ${myObject.price}`);

}

//01.
// returnobjectcontent(user); // in this case we firstl define an object than pass the name of that obj as an argument

//02.
returnobjectcontent({ //here we made an object as an argument
    username: "Anuu",
    price: 10000
})



// this is the way to pass an aray to the function
const myArray = [100,200,300,400,500]

function returnMyArray(getArray){
console.log(getArray[1]);
}

//01.
// returnMyArray(myArray)

//02.
returnMyArray([100,200,400,600,800])