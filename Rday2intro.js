x=100
console.log(x)


//function without parameters and without returntype
function addA(){
    console.log(9+9)
}
 
addA()

//function with parameters and without returntype
function addB(x,y){
 console.log(x+y)
}
addB(2,6)

//function with parameters and with returntype
function addC(x,y){
    return x+y
    
}
let q1=addC(3,7)
console.log(q1)




//function without parameters and without returntype
function substract(){
    console.log(9-9)
}
substract()

//function with parameters and without returntype
function substract(x,y){
    console.log(x-y)
}
substract(3,7)


//function with parameters and with returntype

function substract(x,y){
    return x-y
}
q1=substract(3,5)
console.log(q1)


let a=100
console.log(a)
console.log(typeof a)

let b=true
console.log(b)
console.log(typeof b)

let c= "subhuti"
console.log(c)
console.log(typeof c)


//comparison operator

//<,>,<=,>=
// ==,=!---->value
//===,==!---->value and type



console.log(10==10)
console.log(10=='10')
console.log(10<=10)
console.log(10>=10)
console.log(10!=10)
console.log(10===10)

console.log(12>3)
console.log(12<3)
console.log(12==3)

console.log(12>=33)

//logical operator

//AND ---&&
// true && true--->true
// true && false--->true
// false && true--->true
// false && false--->true

console.log(3==3 || 9==9)
console.log(3=='3' || 9==9)
console.log(3==3 || 9==9)
console.log(3!==3 || 9!==9)
console.log(3=='3' || 9!==9)

//nor----!
console.log(!(2==2))

//conditional statement


let num=200
if (num>32 && num >3){
    console.log("10% discount")
}
if (num>32 && num >3){
    console.log("20% discount")
}
if (num>32 && num >3){
    console.log("30% discount")
}

// program 2

num=56
if (num>32 && num >3){
    console.log("10% discount")
}
else if (num>32 && num >3){
    console.log("20% discount")
}
else if (num>32 && num >3){
    console.log("30% discount")
}
else{
    console.log('incorrect input')
}


//program 3
//function without parameters and without returntype

function addA(){
console.log(9+9)
}
addA()

//function with parameters and without returntype

function addA(x,y){
    console.log(x+y)
}
addA(2,6)

//function with parameters and without returntype

function addA(x,y){
    return x+y
}

let Z = addA(7,8)
console.log(Z)


//arithmetic operations

 x=2
 y=4

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)



//function without parameters and without returntype
function subA(){
    console.log(3-3)
}
subA()
//function with parameters and without returntype
function subA(x,y){
console.log(4-3)
}
subA()
//function without parameters and without returntype
function subA(x,y){
    return x-y
}

q1=subA(3,1)
console.log(q1)

// //function without parameters and without returntype
// function add(){
//     console.log(2+2)
// }

// add()
// add()
// add()
// //function with parameters and without returntype
// function add(x,y){
//     console.log(x+y)
// }
// add(2,2)
// add(2,4)

// //function with parameters and with returntype
// function add(s,t){
//     return(s+t)
// }
// let q1=add(2,8)
// console.log(q1)

// //function without parameters and function without returntype
// function addA() {
//     console.log(2 + 2)
// }
// addA()
// //function with  parameters and function without returntype
// function addA(x, y) {
//     console.log(x + y)
// }
// addA(2, 2)

//function without parameters and without returntype

//function without parameters and without returntype
//function without parameters and without returntype



function Calculator(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}
Calculator(2,3)