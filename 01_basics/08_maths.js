console.log(Math); //math is a object

// some most usable function of maths

console.log(Math.abs(-3)); // abs is used to convert negative num to positive num
console.log(Math.round(3.87)); //round is used to round off the value 
console.log(Math.ceil(3.1)); //ceil() method rounds a number rounded UP to the nearest integer. 
console.log(Math.floor(3.9)); // just opposite of ceil
console.log(Math.min(2,3,41,3,21,1)); // it is used to find the min from a group of number
console.log(Math.max(2,3,41,3,21,1));// it is used to find the max from a group of number

console.log(Math.random()); // it is used to generate a random value between including 0 and 1

console.log(Math.random()*10) // it is used to take the num between 1 to 10
console.log((Math.random()*10 + 1)) //here we add 1 to tackel a special case when 
                                    //there is 0 after decial like 0.0122323
console.log(Math.round((Math.random()*10 + 1))) // it gives the ans after round off

//this pattern is used to generate a random number within the given range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max - min) + 1)) + min);



