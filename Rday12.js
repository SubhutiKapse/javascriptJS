// //STRING

// let firstName = "subhuti"
// console.log(firstName)
// console.log(typeof firstName)

// // program 2

// let firstName2 = "subhuti"
// let lastName = "kapse"
// let middleName = `ajay`

// console.log(firstName2)
// console.log(lastName)
// console.log(middleName)

// // program 3

// // number + string  =====> string 
// // string + number  =====> string 
// // number + number  =====> number 
// // string + string  =====> string

// let a = 10
// let b = 20 
// let c = "hello"

// console.log(a + b + c)
// // number + number + string
//     // 30    +  "hello"
//         //  30hello

// console.log(c+b+a)
// // "hello" + 20 + 10
// // "hello20"  + 10
// // "hello2010"

// console.log(a+c+b)
// // 10 + "hello" + 20
// // "10hello" + 20
// // "10hello20"

// // program 4
// let fName = "subhuti"
// let lName = "kapse"
// // My firstName is subhuti and lastName is kapse
// console.log("My firstName is "+fName+" and lastName is "+lName)
// console.log(`My firstName is ${fName} and lastName is ${lastName}`)


// let namee=["subhu","shruti","shivani","suku"]
// console.log(namee)
// console.log(typeof(namee))
// console.log(namee[0])
// console.log(namee[1])
// console.log(namee[2])
// console.log(namee[3])
// console.log(namee.length)


// //for loop
// for (let i=0;i<namee.length;i++){
//     //console.log(i)
//     console.log(namee[i])
// }

// //while loop
// let i1=0
// while(i1<namee.length){
//     console.log(i1)
//     i1=i1+1
// }
// //for in reverse
// for (let i2=namee.length-1;i2>=0;i2--){
//     //console.log(i2)
//    console.log(namee[i2])
// }



// //while in reverse

// let i3=namee.length-1
// while(i3>=0){
//     console.log(i3)
//     console.log(namee[i3])
//   i3=i3-1
// }


//METHODS OF STRING
//String saves values by index



//charAt()
//concat()
//includes()
//indexof()
//replace()
//slice()
//startsWith()
//endsWith()
//trim()
//trimStart()
//trimEnd()
//toUpperCase()
//toLowerCase()
//Split()
//Substring()
//splice()





let city="Nagpur"
console.log(city)
console.log(city[0])
console.log(city[1])
console.log(city[2])

//charAt()
q1=city.charAt(0)
console.log(q1)

//concat()
let a=" i am fullstack developer"
let b="and also learning software testing"
let c= a.concat(b)
console.log(c)

//includes()
let city1= "banglore"
let a2=city1.includes("o")

console.log(a2)
//indexof()
let city2="Wardha"
let a3=city2.indexOf(0)
console.log(a3)
//replace()
let info="i am learning javascript"
q2=info.replace("python","javascript")
console.log(q2)
//slice()
let city3="chandrapur"     //reverse negative
                        //last index not included
console.log(city3.slice(2))
console.log(city3.slice(0,5))
console.log(city3.slice(1,-6))
console.log(city3.slice(2,8))
console.log(city3.slice(-1,-5))
//startsWith()
let city4="pune"
let t1=city4.startsWith("p")
console.log(t1)
//endsWith()
let city5="pune"
let t2=city4.endsWith("e")
console.log(t2)
//trim()
let city6="bali"
let w1=city6.trim()
console.log(w1.length)
//trimStart()
let city7="wardha"
let w2=city7.trimStart("wa")
console.log(w2.length)
//trimEnd()
let city8="wardha"
let w3=city7.trimEnd("")
console.log(w3.length)
//toUpperCase()
let city9="nagpur"
let s1=city9.toUpperCase()
console.log(s1)
//toLowerCase()
let city10="NAGPUR"
let s2=city9.toLowerCase()
console.log(s2)
//Split()
let email="subhutikapse@gmail9950.com"
let z1=email.split('a')
console.log(z1)
//Substring()
//splice()
let city11="pune"
let y1=city11.split()
console.log(y1)









