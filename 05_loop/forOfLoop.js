// for loop and while loops are easy so there is no any file for that

//01. for-of-loop
//in for of loop we dont have to write the increment statement here the syntax is so simple

//loop in array
const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}
//loop in string
const str = "Hello World!"

for (const i of str) {
    if(i==" ") continue
    // console.log(`the char is ${i}`);
}

//loop in map
//map does not contain any duplicate or same element and it maintain the order in which u push the element

const map1 = new Map()
map1.set("IN","India")
map1.set("USA","United State of America")
map1.set("FR","France")

for (const [key,value] of map1) {
    // console.log(key , ":-" , value);
}

//NOTE -> for of loop is not applicable for object ,it not iterete in object so 
// insted of this we use for in loop

