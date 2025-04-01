const name = "Anubhav raj"
const prize = 7000

console.log(name + " " + prize)

// insted of doing the upper code we use the new formate

console.log(`My name is ${name} and my earning is ${prize}`);

const Newhero = new String('Anubhav Raj') // by initilizing and declaring string in this manner help 
                                          // to acces the index of the string
console.log(Newhero);
console.log(Newhero[0]); // here we acces the index of string not an array

console.log(Newhero.__prot__)
console.log(Newhero.toUpperCase())

console.log(Newhero.length); //used to find the length of the string

console.log(Newhero.substring(0,4));  //In substring we does not use Negative index

console.log(Newhero.slice(-8,4)); // In slice we use negative index

console.log(Newhero.charAt(2));  //It is used to find the char at the given index
console.log(Newhero.indexOf('h')); // It is opposite of charAt

const heroine = "____Katrina-hc     "
console.log(heroine);
console.log(heroine.trim(" "));  // it trim or remove the space

const url = "http://AnubhavRaj.com%20"
console.log(url.replace("%20","-"))  // It is used to replace the value with some other value

const hero = "Anubhav Raj"
console.log(hero.includes("Raj"));  //It is used to find if tht given value is present in the string or not

const game = "pubg-call of duty-subway surf"
console.log(game.split("-")); // by useing split we convert the string into the array and here we divide the string on the basis of (-)






