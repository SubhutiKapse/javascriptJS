//condition statement

let numT=23
if(numT >20 && numT >21){
    console.log("10 % discount")
}
if(numT > 3 && numT >=5){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}




if(numT > 0 && numT <=5){
    console.log("10 % discount")
}
else if(numT > 0 && numT <=5){
    console.log("20 % discount")
}
else if(numT > 0 && numT <=5){
    console.log("30 % discount")
}
else{
    console.log("input incorrect")
}

//program 4
let a=10
let b =20
 if (a>b){
    console.log("a is greater")
 }
 else{
    console.log("b is greater")
 }

 //program 5
 let x1=100
 let x2=200
 let x3=300

 if(x1>x2 && x2>x3){
    console.log("x1 is greater")
 }
else if(x1>x2 && x2>x3){
    console.log("x2 is greater")
 }
 else{
    console.log("x3 is greater")
 }

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
let numA=100

if(numA >200 && numA >500){
    console.log("10% discount")
}
else if(numA >2000 && numA >50000){
    console.log("20% discount")
}
else if(numA >20){
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



//switch case without break statement
//program 1
let city = "jaipur"
switch (city) {
    case "pune":
        console.log("MH")
    case "bhopal":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("incorrect city name")
}

// let city1 = "jaipur"
// switch (city1) {
//     case "pune":
//     console.log("MH")
//     case "bhopal":
//     console.log("MP")
//     case "jaipur":
//     console.log("RJ")
//     default:
//         console.log("incorrect city name")
// }

//program 2
//switch using break statement
let city1="pune"
switch(city1){
    case"mumbai":
    console.log("MH")
    break
    case"bhopal":
    console.log("MP")
    break
    case"jaipur":
    console.log("RJ")
    break
    default:
        console.log("incorrect city name")

}

// let city2="mumbai"
// switch(city1){
//     case"mumbai":
//     console.log("MH")
//     break
//     case"bhopal":
//     console.log("MP")
//     break
//     case"jaipur":
//     console.log("RJ")
//     break
//     default:
//         console.log("incorrect city name")

// }


//program 3
let city3="indore"
switch(city3){
    case"pune":
    case"nagpur":
    console.log("MH")
    break

    case"bhopal":
    case"indore":
    console.log("MP")
    break

    case"jaipur":
    case"udaipur":
    console.log("RJ")
    break
    default:
        console.log("incorrect city")
}

//program 4
let Z1=2
let Z2=4
let Z3=8
let flag=true
switch(flag){
    case Z1>Z2 && Z1>Z3:
        console.log("Z1 is greater")
        break
        case Z2>Z1 && Z2>Z3:
        console.log("Z2 is greater")
        break
        default:
            console.log("Z3 is greater")
}