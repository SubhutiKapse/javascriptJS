let num=178
if (num >0 && num>12){
    console.log("10 % discount")
}
if (num <87 && num>182){
    console.log("20 % discount")
}
if (num>34 && num>312){
    console.log("30 % discount")
}

//program 2
//if else
numT=17
if (num >0 && num>12){
    console.log("10 % discount")
}
else if (num <87 && num>182){
    console.log("20 % discount")
}
else if (num>34 && num>312){
    console.log("30 % discount")
}
else {
    console.log("imcorrect input")
}

//program 3
marks=91
if(marks >90){
    console.log("grade A")
}
if(marks >90){
    console.log("grade B")
}
if(marks >90){
    console.log("grade C")
}


//program 4
marks=91
if(marks >90){
    console.log("grade A")
}
else if(marks >90){
    console.log("grade B")
}
else if(marks >90){
    console.log("grade C")
}
else ("fail")

//program 5
let a=100
let b=500
if (a>b){
    console.log("a is greater")
}
if (b>a){
    console.log("b is greater")
}


// program 6
let x1=10
let x2=500
let x3=300

if  (x1 > x2 && x2 >x3){
console.log("x1 is greater")
}
else if (x2>x3 && x2>x3){
    console.log("x2 is greater")
    }
else{
    console.log("x3 is greater")
}    

//program 7

let city="Pune"
switch(city){
    case"Pune":
    console.log("MH")
    break
    case"Jaipur":
    console.log("Rj")
    break
    case"Bhopal":
    console.log("MP")
    break
default:
    console.log("Incorrect city")
}