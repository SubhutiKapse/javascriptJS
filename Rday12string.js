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


let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

// 3 ways to define string 


let firstN = 'subhuti'
let lastName = "kapse"
let middleName = `ajay`

console.log(firstN)
console.log(lastName)
console.log(middleName)

// program 3

// number + number  ======> number 
// string + number  ======> string 
// number + string  ======> string 
// string + string  ======> string

let x= 10 
let y = 20 
let z=  "hello"

console.log(x+y+z)
// number + number + string
  //     number   + string 
                // string

console.log(y+a+b)
// string + number + number 
        // string + number  // 'hello20" + 10
                // string    // hello2010

console.log(x+z+y)
// number + string + number
        // string + number 
            // string
// 10hello20


// program 4
// string contact
let firstNamee = "subhuti"
let lastNamee = "kapse"
// My firstName is subhuti and lastName is kapse

console.log("My firstName is "+firstNamee+" and lastName is "+lastNamee)
console.log(`My firstName is ${firstNamee} and lastName is ${lastNamee}`)


// program 5
// does string stores the value by index ??

let city0 = "pune"
console.log(city0[0])

city0[0] = "n"
console.log(city0)

let city00 = "nagpur"

// 0   1   2  3  4  5
// N   a   g  p  u  r
//-6  -5  -4 -3 -2 -1

// for loop 
for(let i = 0 ; i < city00.length ; i++){
    //console.log(i)
    console.log(city00[i])
}

// while 
let i2  = 0 
while(i2 < city2.length){
    //console.log(i2)
    console.log(city2[i2])
    i2 = i2 + 1
}

// for reverse 
city2 = "nagpur"

for(let i = city2.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city2[i])
}
// while reverse

let i3 = city2.length-1
while(i3 >= 0){
    console.log(city2[i3])
    i3 = i3 -1
}


// program 6
// String ---- Object ------ properties and method

// toUpperCase()
let citi = "nagpur"
let q2 = citi.toUpperCase()
console.log(q2)

// toLowerCase()
city = "Nagpur"
let q3 = city.toLowerCase()
console.log(q3)


// includes()

let cityP = "bhopal"
let q4 = cityP.includes("bho")
let q5 = cityP.includes("o")
let q6 = cityP.includes("O")
console.log(q4)
console.log(q5)
console.log(q6)

// indexOf()

let cityL = "wardha"
// 0    1    2    3     4     5
// W    a    r    d     h     a

let q7 = cityL.indexOf("r")
let q8 = cityL.indexOf("R")
let q9 = cityL.lastIndexOf("a")
console.log(q7)
console.log(q8)
console.log(q9)

// slice()

let cityy  = "chandrapur"

//  0     1     2   3    4    5     6    7    8     9
//  c     h     a   n    d    r     a    p    u     r
// -10   -9    -8  -7   -6   -5    -4   -3   -2    -1
//cityy.slice(startIndex,endIndex(notIncluded))
console.log(cityy.slice(3))
console.log(cityy.slice(3,8))
console.log(cityy.slice(-4))
console.log(cityy.slice(-9,-4))
console.log(cityy.slice(-9,4))
console.log(cityy.slice(1,-4))
console.log(cityy.slice(-1,-4))

// spilit()

let infoA = ["sapeksha","kamlesh","kapse",98576485]
let q11 = infoA.join("-")
console.log(q11)
let q12 = q11.split('-')
console.log(q12)



let city12 = "chandrapur"
let q13 = city12.split("a")

console.log(q13)

// replace()

let infoE  = "I am learning javascript"
let q14 = infoE.replace("javascript","python")
console.log(q14)

// startswith()

let city13 = "jaipur"
console.log(city13.startsWith('ja'))
console.log(city13.startsWith('j'))
console.log(city13.startsWith('J'))

// endswith()
console.log(city13.endsWith("r"))
console.log(city13.endsWith("pur"))
console.log(city13.endsWith("Pur"))

// trim()

let city14 = " goa "
// console.log(city14.length)
// let t1 = city14.trim()
// console.log(t1.length)

// trimStart()
// let t2 = city14.trimStart()
// console.log(t2.length)

// trimEnd()
let t3 = city14.trimEnd()
console.log(t3.length)
// charAt()

let cityB = "mumbai"
// 0  1 2  3  4  5
// m  u m  b  a  i
console.log(cityB.charAt(1))

// charCodeAt()

let qq = city10.charCodeAt(2)
console.log(qq)






