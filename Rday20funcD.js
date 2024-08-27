// FUNCTION DECLARATION

function addition(x, y) {
    return x + y
}

let a = addition(12, 4)
console.log(a)

///////////////////////////////

// function expression 

let addition2 = function (x, y) {
    return x + y
}
let a2 = addition2(23, 4)
console.log(a2)


////////////////////////////////////////////
// arrow function

let addition3 = (x, y) => {
    return x + y
}
let q3 = addition3(23, 4)
console.log(q3)

///////////////////////////////////////
// if only 1 statement 

let addition4 = (x, y) => x + y
let q4 = addition4(3, 4)
console.log(q4)


///////////////////////////////////////////
// if only one statement one parameter
let addition5 = x => x + x
let q5 = addition5(3)
console.log(q5)

///////////////////////////////////////////////

// lexical scope

function addition() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addition2() {
        let c = 8
        let d = 4
        console.log(a + b)

        function addition3() {
            let e = 19
            console.log(a + b + c + d + e)
        }
        addition3()
    }

    addition2()
}
addition()


////////////////////////////////////////////
// CLOSURES

// function greet(){
//     return function(){
//         console.log("hello")
//     }
// }
// let q1 = greet()
// console.log(q1)

// function addition(){
//     console.log(9+9) 
//     return 9+9
//     console.log("bye")
// }
// let q2 = addition()
// console.log(q2) 

function additionD() {
    let a = 10
    let b = 5
    return function () {
        console.log(a + b)
    }
}
let r1 = additionD()

// let r1 = function(){
//     console.log(a+b)
// }

r1()

//pg 2

function Cal() {
    console.log("hello")
    let a = 10
    let b = 30
    return a + b
    console.log(a + b)
}
Cal(23, 4)




/////////////////////////////////////////////

// function CalculateDiscount(numT){
    
//     if(numT > 0 && numT <=5){
//         return "10 % discount"
//     }

//     else if(numT > 5 && numT <= 10){
//         return "10 % discount"
//     }
//     else if(numT > 10){
//         return "15 % discount"
//     }

// }
// CalculateDiscount(5)

// function Calc(){
    //     let a = 10
    //     let b = 5
    
    //     return function(){
    //         console.log(a+b)
    //     }
    // }
    // let q = Calc()
    // q()
    // console.log(a)
    
    // let q  = function(){
    //     console.log(a+b)
    // }
    
//////////////////////////////////////
//27.8

function addition() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addition2() {
        let c = 100
        let d = 200
        console.log(a + b + c + d)
        //console.log(a1)
        function addition3() {
            let a1 = 10
            console.log(a + b + c + d + a1)
        }
        addition3
    }
    addition2()
}
addition()


/////////////////////////////////////////
// // lift up state
// // derived state

// let and const and var 


let a1 = 10
console.log(a1)
a1= 100
console.log(a1)

var h  = 8 
h = 50
console.log(h)

const j = 33
console.log(j)
j = 888

///////////////////////////////////////////
// scope 

// let and const are blocked scope

let q = 10
{
    let a = 100
    console.log(a) // 100
}
console.log(q) // 10

// program 3
let b = 399
{
    b = 900
    console.log(b)// 900
}
console.log(b) // 900

let n = 1000
{
    let n = 99
    console.log(n) // 99
    n = 9000
    console.log(n) // 9000
}
console.log(n) // 1000
n = 888
console.log(n) // 888


/////////////////////////////////////////////

// const are blocked scope
// program 3

// const h = 100
// {
//     h = 999
//     console.log(h) // 999
// }
// console.log(h) // 999

// program 4
const h = 100 //constant never update
{
    const h = 999
    console.log(h)  // 999
}
console.log(h)  // 100