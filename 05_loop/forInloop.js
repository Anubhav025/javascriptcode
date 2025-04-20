//02. for in loop

//loop in object

const myobject = {
    js: "javaScript",
    py: "Python",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myobject) {
//    console.log(key); // by printing this it only gives the key  
}

// this syntax helps to print key and its value
 for (const key in myobject) {
//   console.log(`${key} shortcut is for ${myobject[key]}`); 
 }

//loop in array

const arr1 = [1,2,3,4,5]

for (const key in arr1) {
//    console.log(key); //if we print key than it gives the index of the array
}

for (const key in arr1) {
    // console.log(arr1[key]); //it gives the proper element of the array
}

//loop in string

const name = "Anubhav raj"

for (const key in name) {
    console.log(key); // it also print the index of the sting
    
}
for (const key in name) {
    console.log(name[key]); // by this way we able to iterate the string
    
}


//NOTE -> we not able to iterate in map using for in loop it is the drawback of it