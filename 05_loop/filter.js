// here it gives undefine as output because foreach loop does not store its value to another variable or not return any value


// const mynum = [1,2,3,4,5,6,7,8,9,10]


// const mynums = mynum.forEach( (item)=> item>5)

// console.log(mynums)


//NOTE -> in for each loop we only print the array but not store the value of that
// thats why we use FILTER to overcome this problem

const mynum = [1,2,3,4,5,6,7,8,9,10]
const mynums = mynum.filter( (item)=> {
   return item >5  // here we write return beacuse we use scope here 
})
// console.log(mynums)

// if we not use scope than we dont have to write return 

// const mynum = [1,2,3,4,5,6,7,8,9,10]
// const mynums = mynum.filter( (item)=> item>5)
// console.log(mynums)


// if we want to use for each in that way so we use it in this way

const newnum = []
mynum.forEach((item)=>{
    if(item>4){
        newnum.push(item);
    }
})

// console.log(newnum);

const book = [
    {
        title: "book1", genere: "history" , Published: 1990, Edition: 2008
    },
    {
        title: "book2", genere: "Science" , Published: 1980, Edition: 2000
    },
    {
        title: "book3", genere: "Economis" , Published: 1992, Edition: 2006
    },
    {
        title: "book4", genere: "English" , Published: 1984, Edition: 2010
    },
    {
        title: "book5", genere: "Fiction" , Published: 1999, Edition: 2012
    },
    {
        title: "book6", genere: "non-fiction" , Published: 2000, Edition: 2032
    },
    {
        title: "book7", genere: "Science fiction" , Published: 1940, Edition: 2004
    },
    {
        title: "book8", genere: "Maths" , Published: 1947, Edition: 2007
    },
    {
        title: "book9", genere: "Geography" , Published: 1998, Edition: 2004
    }
]

// It work like that we fetch the data from database it is just a example of that

let bookuser = book.filter((item) => item.genere==="history")
// bookuser = book.filter((item) => item.Published>1990)
bookuser = book.filter((item) => {
    return item.Published>1990 && item.Edition<2006
})
console.log(bookuser);
