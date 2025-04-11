const Marvel_heros = ["Ironman","Spiderman","Hulk"]
const Dc_heros = ["Batman","Flash","superman"]

// if we push one array to another array then it puched array into the array
Marvel_heros.push(Dc_heros); 
console.log(Marvel_heros);
console.log(Marvel_heros[3][1]); // by this we acccse the element of array in array



//02. if we use concat then it push all the element of the second array to the first\
//without the case of array into array(here only one array is there)
const all_heros = Marvel_heros.concat(Dc_heros);
console.log(all_heros);

//03. The third method done the same as first but here we use "Spread" 
// by using 3 method we combind as much array that we want
const all_heros2 = [...Marvel_heros,...Dc_heros]
console.log(all_heros2);

// in case of array into array and we want to convert it in a single array 
// than we use "flat" function
const array = [1,2,3,[4,5,6],7,[4,6,[2,3,5]]]
// here we write infinity because we have to give the depth of array(matlab ki ham 
// kaaha tak array ko change karna chaata hai single array ma)
const new_array = array.flat(Infinity); 
console.log(new_array);

//by using function "isArray" we check is the given chij is array or not
console.log(Array.isArray("Anubhav"));

//by using "from" key word we convert an objet into an array
console.log(Array.from("Anubhav"));

// from does`t able to convert it in array, we have to mention what we want to
// convert in array key or its value;
console.log(Array.from({name: "Anubhav"})); // it gives empty array as output

// using "of" key word help to return a new array from a set of element
const score1 = 100;
const score2 = 200;
const score3 = 300;
const name = "Anubhav Raj"
console.log(Array.of(score1,score2,score3,name));

