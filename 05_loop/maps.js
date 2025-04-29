//by the help of maps we print the valuse in this way
// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.map( (num) => num +10 )

// console.log(newNums);


// MAP CHANING and also use FILTER

//by the help of maps we print the valuse in this way
const mynums = [1,2,3,4,5,6,7,8,9,10]

const newNums = mynums.map( (num) => num * 10 ).map((num) => num + 1).filter((num) => num>50)

 // we also write it in this way

// const newNums = mynums
// .map( (num) => num * 10 )
// .map((num) => num + 1)
// .filter((num) => num>50)
console.log(newNums);

