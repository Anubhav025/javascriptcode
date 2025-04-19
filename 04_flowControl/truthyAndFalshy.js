// const userEmail = "anu@gmail.com"
// if(userEmail){
//     console.log("user found");
// }else{
//     console.log("user not found"); 
// }

//if any one write the same code as given above and use empty ""(string)

const userEmail = "" //""->it cosider as false value
if(userEmail){
    console.log("user found");
}else{
    console.log("user not found"); 
}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

//all other value other than falsy values are truthy value some confusing truthy
// values are "0",`0`,'false'," ",[],{},function(){}

// the way to find is the array is empty or not

const user = []
if(user.length===0){
  console.log("Array is empty");
}


// the way to find is the object is empty or not

const obj ={

}
if(Object.keys(obj).length===0){
    console.log("the object is empty");
}

// NOTE

//false == 0 is true condition
//false == '' is a true condition
//0 == '' is a true condition

//nullish Coalescing Operator(??): used to tackel NULL and undefined values

let val1 
// val1 = null ?? 10; //it is used for api or data base call where if data is null or
                   //or undefine from the database than it use the other thing that return after the ?? 
                   
val1 = undefined ?? 20;
console.log(val1);


//++++++++++++++++Ternery Operator_+++++++++++++++++++++++++++++++++++++

// condition ? true:false

const price = 100
price >=80 ? console.log("it is more than 80"):console.log("It is less than 80");

