const myNums= [1,2,3]

// const myTotal =myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval is ${currval}`)
//     return acc + currval
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999},
    {
        itemName:"py course",
        price:299},
    {
        itemName:"cpp course",
        price:99},
    {
        itemName:"java course",
        price:999},

]

const pricetopay = shoppingCart.reduce((acc, item)=> acc+item.price,0)

console.log(pricetopay);
