const Myarr = [1,2,3,4,5]
console.log(Myarr)

const newarr = new Array(1,2,3,4)
console.log(newarr[0]);

//Array Methods 

Myarr.push(6) // push the element to the last off the array
Myarr.pop() // pop the element from the last of the array

Myarr.unshift(9) // push the element to the front of the array
Myarr.shift() // pop the element from the front of the array

console.log(Myarr.includes(5)); // it find is it 5 is in the array or not
console.log(Myarr.indexOf(5)); // it find the index of the given element

console.log("A",Myarr);

const arr2 = Myarr.join()
console.log(arr2); // it is in the type of string because join converts array top a string

const myn = Myarr.slice(1,3) // it gives the part of the array but it not include the max range
console.log("B",Myarr);
console.log(myn);

const myn1 = Myarr.splice(1,3)
console.log("C",Myarr); // make the new array and change the original array 
console.log(myn1) 


console.log();
console.log(Myarr)
