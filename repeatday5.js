//conditional statements
//one input and multiple outcomes

//program 1
let num=10
if(num >2 && num >5){
    console.log("10% discount")
}
if(num >2 && num >5){
    console.log("20% discount")
}
if(num >2 && num >5){
    console.log("30% discount")
}

//program 2
let numT=100

if(num >200 && num >500){
    console.log("10% discount")
}
else if(num >2000 && num >50000){
    console.log("20% discount")
}
else if(num >20){
    console.log("30% discount")
}
else{
    console.log("incorrect output")
}

//program 3
let marks=94
if(marks >90){
    console.log("Grade A")
}
if(marks >=75){
    console.log("Grade B")
}
if(marks >60){
    console.log("Grade C")
}

//program 4
numQ=95
if( marks >90){
    console.log("Grade A")
}
else if( marks >90){
    console.log("Grade A")
}
else if( marks >90){
    console.log("Grade A")
}
else{
    console.log("plz try again")
}

//program 5
let a5=5
let b5=10
if(a5>b5){
    console.log("a5 id greater")
}
else {
    console.log("b5 is greater")
}

//program 6
let q1=10
let q2=20
let q3=30

if(q1>q2 && q1>q3){
    console.log("q1 is greater")
}
else if(q2>q1 && q2>q3){
    console.log("q2 is greater")
}
else{
    console.log("q3 is greater")
}

//program 7
let a1=10
let a2=100
if(a1>a2){
    console.log("a1 is greater")
}
else{
    console.log("a2 is greater")
}

//condition ? if true statement:false
//statement 2
a11=50
a22=100

a11>a22? console.log("a11 is greater"):console.log("a22 is greater")


age=21
q2=age>21?"candrive":"cannotdrive"
console.log(q2)