// closures

const add = (a) => (b) => console.log(a + b);

const add2inNumber = add(2);

// add2inNumber(5)

// -----------------------------------------------------------------------

//Currying

const addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

addThreeNumbers(1, 2, 3);

// using Currying

const add3Numbers = (a) => (b) => (c) => a + b + c;

add3Numbers(1)(2)(3)

// -----------------------------------------------------------------------

// composition

// const add2 = (args) => {
//     console.log("args ", args)
//     return args.reduce((partialSum, a) => partialSum + parseInt(a), 0);
// }

// const square = (c) => {
//     console.log("here sq ", c)
//     return c * c
// }

// console.log(square(add2(1, 2)))

// // using composition

// const addAndSquare = (fn1, fn2) =>{
//     return function(a, b){
//         return fn2(fn1(a,b))
//     }
// }
// const task = addAndSquare(add2, square)
// task(1, 2)

// dynamically for multiple functions

// const dynamicAddzFunctions = (...fncs) => {
//     return ((...args)=>{
//         fncs.reduceRight((fn1, fn2)=> fn2(fn1), ...args)

//     })
// }


const add2 = (args) => {
    console.log("args ", args)
    return args.reduce((partialSum, a) => partialSum + parseInt(a), 0);
}

const square = (c) => {
    console.log("here sq ", c)
    console.log( c * c)
}
const dynamicAddzFunctions = (...fns) => (...initialVal) => {
    console.log("initialVal ", initialVal)
    fns.reduce((val, fn) => fn(val), initialVal);
}

const task1 = dynamicAddzFunctions(add2, square)
task1(1, 2)



// ----------------------------------

// IIFE

// (()=>{
//     let a = 10
//     console.log("first ",a)
// })()
// console.log("Second ",a)

// using closures
// const ATM = (initialBalance)=>{
//     let balance = initialBalance

//     const withdraw = (amount)=>{
//        if(amount >= balance ){
//         return "Not Allowed"
//        }
//        else{
//         balance -= amount
//         return balance
//        }
//     }
    
// }

// let akash1 = ATM(100)
// akash1.withdraw(1)

// const makeWithdraw = (balance) =>(
//     (privetBalance)=>{
//         let balance = privetBalance;
//         const withdraw = (amount) =>{
//             if(balance >= amount){
//                 balance -= amount
//                 return balance
//             }
//             else{
//                 return "Transaction declined!"
//             }
//         }
//         return {withdraw}
//     }
// )(balance)
  
//   const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
//   console.log(firstAccount.balance); // undefined
//   console.log(firstAccount.withdraw(20)); // 80
//   console.log(firstAccount.withdraw(30)); // 50
//   console.log(firstAccount.doBadThings); // undefined; this method is private
//   const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
//   console.log(secondAccount.withdraw(30)); // "Insufficient money"
//   console.log(secondAccount.withdraw(20)); // 0
  
// ------------------------------------------------------------------------------------------------------

// custom iterator
// const makeRangeIterator = (start=0, end=50, steps= 1) =>{
//     let currentValue = start
//     return {
//         next(){
//             let result;
//             if(currentValue < end){
//                 result = {value : currentValue, done : false}
//                 currentValue += steps
//                 return result
//             }
//             return {value : currentValue, done : true}
//         }
//     }
// }


// let myIterator = makeRangeIterator(1, 100, 5)

// let result = myIterator.next()


// while(!result.done){
//     console.log(result.value , result.done)
//     result = myIterator.next()
// }


// iterator using generator function

// function* makeRangeIterator(start=0, end=50, steps=1){
//     for(let i = start; i<=end; i+=steps){
//         yield i
//     }
// }
// let myIterator = makeRangeIterator(1, 100, 5)

// for(let num of myIterator){
//     console.log("num : ", num)
// }