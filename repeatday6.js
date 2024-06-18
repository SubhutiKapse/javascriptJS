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
let x1=2
let x2=4
let x3=8
let flag=true
switch(flag){
    case x1>x2 && x1>x3:
        console.log("x1 is greater")
        break
        case x2>x1 && x2>x3:
        console.log("x1 is greater")
        break
        default:
            console.log("x3 is greater")
}