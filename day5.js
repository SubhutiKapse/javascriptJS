let x=100
let y=50

if(x >y){
    console.log("x is greater")
}
else{
    console.log("y is greater")
}

//program 1
x >y? console.log("x s greater"):console.log("y is greater")

//program 2
age =21
let q1=age>=18?'can drive':'cannot drive'
console.log(q1)


//program 3
//switch case without break


let city="jaipur"
switch(city){
    case"pune":
    console.log("MH")
    case"jaipur":
    console.log("RJ")
    case"indore":
    console.log("MP")
    case"gangtok":
    console.log("assam")
    default:
        console.log("city not found")
    
}

//program 4
//switch case with break statement

let city2="jaipur"
switch(city2){
    case"pune":
    console.log("MH")
    break
    case"jaipur":
    console.log("RJ")
    break
    case"kanpur":
    console.log("UP")
    break
    case"shilong":
    console.log("meghalaya")
    break
    default:
        console.log("incorrect city")
    
}
 
//program 6

let x1=1000
let x2=5000
let x3=300

let isgreatest=true
switch(isgreatest){
    case x1 >x2 && x1>x3 :
        console.log("x1 is greater")
      break  
      case x2 >x1 && x2>x3 :
        console.log("x2 is greater")
      break  
      default:
        console.log("x3 is greater")
}