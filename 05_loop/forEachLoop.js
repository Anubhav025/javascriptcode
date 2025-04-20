//for each loop

const coading = ["js","java","c++","ruby","python"]

//this is the syntax to use foreach loop in array
// there are different way to use this in array

//01.using function
coading.forEach(function (item) {
    // console.log(item);
})

//02.using arrow function
coading.forEach((item)=>{
    // console.log(item);
    
})

//03.using the reference of the function

function print(item){
    // console.log(item); 
}

coading.forEach(print) //here we use print as the reference of the function

//04. printing array element with index and with full array

coading.forEach(function(item,index,arr){
    // console.log(item,index,arr);
    //it print in this way
//js 0 [ 'js', 'java', 'c++', 'ruby', 'python' ]
//java 1 [ 'js', 'java', 'c++', 'ruby', 'python' ]
//c++ 2 [ 'js', 'java', 'c++', 'ruby', 'python' ]
//ruby 3 [ 'js', 'java', 'c++', 'ruby', 'python' ]
//python 4 [ 'js', 'java', 'c++', 'ruby', 'python' ]
})

//05. asscessing object from array[{},{},{}] means a group of object in a array

const name = [
    {
        userName: "Anubhav Raj",
        Phoneuse: "POCO"
    },
    {
        userName: "Rani Kumari",
        Phoneuse: "SAMSUNG"
    },
    {
        userName: "Sagar Kumar",
        Phoneuse: "README"
    }
]

name.forEach((item)=>{
    console.log(`${item.userName} uses ${item.Phoneuse}`);  // we easily assces the object items 
   
})