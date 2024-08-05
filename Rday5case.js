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


//switch case without break statement
//program 1
let cityy = "jaipur"
switch (cityy) {
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




// //switch case without break statement
// //program 1

// let city="jaipur"
// switch(city){
//     case"pune":
//     console.log("MH")
//     case"jaipur":
//     console.log("RJ")
//     case"bhopal":
//     console.log("MP")
//     default:
//         console.log("incorrect city name")
// }


// //switch case using break statement
// let city2="jaipur"
// switch(city){
//     case"pune":
//     console.log("MH")
//     break
//     case"jaipur":
//     console.log("RJ")
//     break
//     case"bhopal":
//     console.log("MP")
//     break
//     default:
//         console.log("incorrect city name")
// }

// //multiple cases same output
// let city3="nagpur"
// switch(city3){
//     case"pune":
//     case"nagpur":
//     console.log("Maharashtra")
//     break
//     case"bhopal":
//     case"indore":
//     console.log("MadhyaPradesh")
//     break
//     case"jaipur":
//     case"Udaipur":
//     console.log("Rajasthan")
//     break
//     default:
//         console.log("incorrect city name")
// }

// //program 4
// let x1=2
// let x2=4
// let x3=6
// let greater=true
// switch(greater){
//    case  x1>x2 && x1>x3:
//     console.log("x1 is greater")
//     break
//     case x2>x1 && x2>x3:
//         console.log("x2 is greter")
//         break
//         default:
//             console.log("x3 is greter")
// }

