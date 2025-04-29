const mynum = [1,2,3,4]
const total = mynum.reduce( (accumulator,currentvalue) =>{
    return accumulator= accumulator + currentvalue
},0)

console.log(total);


const soppingCart = [
    {
        name: "js-course",
        price: 2999
    },
    {
        name: "py-course",
        price: 999
    },
    {
        name: "c++-course",
        price: 2999
    },
    {
        name: "java-course",
        price: 5999
    }
]

const totalprice = soppingCart.reduce((acc,item) => {
return acc + item.price
},0)

console.log(totalprice);
