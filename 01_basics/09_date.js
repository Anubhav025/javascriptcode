let Mydate = new Date();
console.log(Mydate); // the date they give is not readable so we use next function
console.log(Mydate.toDateString()); // it gives the current date with day
console.log(Mydate.toISOString());
console.log(Mydate.toJSON());
console.log(Mydate.toLocaleDateString()); //it gives the date in month/date/year formate
console.log(Mydate.toLocaleString());// it gives the date with time(US)
console.log(Mydate.toLocaleTimeString()); // it gives the current time of US
console.log(Mydate.toString()); // it gives tha date with day and cordinates and Time also(US)

console.log(typeof Mydate); //IT is a object

// here are the some method of creating date

let myCreateDate = new Date(2025,3,5) // here month start from 0
let myCreateDate = new Date(2025,3,5,12,14) // here we give the date and time
let myCreateDate = new Date("2025-04-05") // (year-month-date)
let myCreateDate = new Date("04-05-2025") // (month-date-year)
console.log(myCreateDate.toString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); //The Date.now() static method returns the number of milliseconds elapsed since the epoch,
                          //  which is defined as the midnight at the beginning of January 1, 1970, UTC.
console.log(myCreateDate.getTime());// it gives the millisecond that take from jan 1 1970 to the date that i create

console.log(Math.round(myTimeStamp/1000)) // it converts millisecond to second

let newDate = new Date()
console.log(newDate); // it gives the current date
console.log(newDate.getMonth() + 1); // it gives us the current month, here we add 1 because month start from 0\
console.log(newDate.getDay()); //it gives the day in number like(6 means satureday)

newDate.toLocaleString(`Default`,{
   weekday: "long",
   month: "2-digit",
   dateStyle: "full"
})















