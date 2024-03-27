//program 1
x=10
console.log(x)
console.log(typeof(x))
//program 2
console.log("hello")
let balance=0
console.log(balance)
balance=100
console.log(balance)
//program 3 arithmetic operation
let a=5
let b=10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
//program 4
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(2,6)
Calculator(6,3)

//function without parameter and without returntype
function addition(){
    console.log(2+4)
}
addition()

function substraction(){
    console.log(9-9)
}
substraction()

//function with parameter and without returntype
function addition(x,y){
    console.log(x+y)
}
addition(9,2)
addition(10,3)


//function without parameter and without returntype
function addA(){
    console.log(9+9)
}
addA()

//function with parameter and without returntype

function subA(x,y){
    console.log(x-y)
}
subA(9,5)

//function with parameter and with returntype

function addB(x,y){
    return x+y
    
}
q1=addB(12,34)
console.log(q1)

let s=10
console.log(s)
console.log(typeof s)

let t=12.4
console.log(t)
console.log(typeof t)

let u=true
console.log(u)
console.log(typeof u)

let firstName="subhuti"
console.log(firstName)
console.log(typeof firstName)

//comparison operator
//>,<,<=,>=
//==,!=
//===,!==

console.log(2==='2')
console.log(2===2)
console.log(2==2)
console.log(2!=2)
console.log(2!==2)
console.log(2>=2)
console.log(2<=2)

//logical operator
//and --- &&
//true && true---true
//true && false---false
//false && true---false
//false && false---false

console.log(1==1 && 2==2)
console.log(1==1 && 2===2)
console.log(1!=1 && 2==2)
console.log(1==7 && 22==2)

//or --- ||
//true || true---true
//true || false---true
//false || true---true
//false || false---false

console.log(1==1 || 2==2)
console.log(1==1 || 2===2)
console.log(1!=1 || 2==2)
console.log(1==7 || 22==2)

//! not
console.log((8==8))
console.log(!(8==8))

//if condition  checks all conditions
let num=20
if(num >0 && num >2){
    console.log("10% discount")
}
if(num >10 && num >8){
    console.log("20% discount")
}
if(num >5){
    console.log("30% discount")
}

//if else condition 
let numT=20
if(num >0 && num >2){
    console.log("10% discount")
}
else if(num >10 && num >8){
    console.log("20% discount")
}
else if(num >5){
    console.log("30% discount")
}
else{
    console.log("incorrect input")
}

let x1=100
let x2=20
let x3=30
if(x1>x2 && x1>x3){
    console.log("x1 is greater")
}
else if(x2>x1 && x2>x3){
    console.log("x2 is greater")
}
else{
    console.log("x3 is greater")
}

//switch case

let city="Pune"
switch(city){
    case "pune":
        console.log("MH")
        case "jaipur":
        console.log("RJ")
        case "Bhopal":
        console.log("MP")
        default:
            console.log("Incorrect city")
}

let city2="Pune"
switch(city2){
    case "Pune":
        case "Nagpur":
            console.log("MH")
            break
            case "Jaipur":
        case "Udaipur":
            console.log("RJ")
            break
            case "Bhopal":
        case "Indore":
            console.log("MP")
            break
            default:
                console.log("Incorrect city")

}

let s1=10
let s2=5
let s3=2
let isgreatest=true
switch(isgreatest){
    case s1 >s2 && s1>s3:
        console.log("s1 is greater")
        break
        case s2 >s1 && s2>s3:
        console.log("s1 is greater")
        break
        default:
            console.log("s3 is greater")

}

//loops for / while 
for (let i=1;i<=5;i++){
    console.log(i)
}

for (let i=2;i<=10;i++){//3//4
    console.log(i)//2//3
}

//program to print table of 5
for (let i=5;i<=50;i=i+5){
    console.log(i)
}
//program to print table of 5 in reverse
for (let i=50;i>=5;i=i-5){
    console.log(i)
}

//table of 6 
for (let i=6;i<=60;i=i+6){
    console.log(i)
}

//reverse table of 6
for (let i=60;i>=6;i=i-6){
    console.log(i)
}

//for loop with break statement
for (let i=1;i<=5;i++){//2
    console.log(i)//1
    if (i==3){
        break
    }
}

for (let i=1;i<=5;i++){//2
    
    if (i==3){
        
        break
        console.log(i)
    }
}

for( let i=1;i<=7;i++){
    console.log(i)
    if(i==4){
        break
    }
}

for(let i=0;i<=10;i++){
    if(i==5){
        break
        
    }
    console.log(i)
}

//continue
for (let i=1;i<=8;i++){
    console.log(i)
    if(i==4){
        console.log(i)

    }
}

for (let i=2;i<=9;i++){
if (i==5){
    continue
}
console.log(i)
}

//function without parameter and without returntype
function AdditionA(){
    console.log(2+2)
}
AdditionA()

//function with parameter and without returntype
function substractionA(x,y){
    console.log(9-5)
}
substractionA()
//function with parameter and with returntype
function  additionB(x,y){
    return x+y
    
}
q1=additionB(2,4)
    console.log(q1)


//table of 2
for(let i=2;i<=20;i=i+2){
    console.log(i)
} 


for (let i=20;i>=2;i=i-2){
    console.log(i)
}

for (let i=5;i<=50;i=i+5){
    console.log(i)
}

for(let i=50;i>=5;i=i-5){
    console.log(i)
}

for (let i=10;i<=100;i=i+10){
    console.log(i)
}

for (let i=100;i>=10;i=i-10){
    console.log(i)
}
//print reverse no from 10 to 1
a1=10
for (let a1=10; a1>=0;a1=a1-1);
console.log(a1)

let names=["subhuti","shyli","sapeksha","lavi"]
console.log(names)


