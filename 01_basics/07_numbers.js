
const salary = 1000
console.log(salary)

const Numb = new Number(123) // here we explictilty declared Numb as a Number
console.log(Numb);

console.log(Numb.toString()) // here we change the number to the string
console.log(Numb.toString().length) //because it is a string now so we easily find the length 

const anotherNumber = 100
console.log(anotherNumber.toFixed(2)); // it is used to show the value after the decimal if we want too see 2 value than we just fixed it at 2

const number = 123.3436
console.log(number.toPrecision(4)); // it is used to give the presise value in the given digit that we mention

const hunded = 100000;
console.log(hunded.toLocaleString('en-IN')); // use to convert the value in indian number system

// NOTE = here en-IN is specially for converting in indian number system
// without writing this it convert in us number system