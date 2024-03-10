// let first_name="subhuti"
// console.log(first_name)

// let last_name="kapse"
// console.log(last_name)

// let fn="subhuti"
// let ln="kapse"


// //my firstname is subhuti and my lastname is deshpande
// console.log("My firstName is "+fn+" and my lastName is "+ln)


// //program 2 string interpolation
// console.log('My firstname is ${fn} and my lastname is ${ln}')


// //program 3
// //string + number ---->string
// //number  + string ---->string
// //string + string ---->string
// //number + number ---->number

// let a=10
// let b=15
// let c="hello"

// console.log(a+b+c)
// //number + number + string
// //25+"hello"
// //25hello

// console.log(b+c+a)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// //string ----> object ----properties and methods

// let city="pune"
// console.log(city[0])
// console.log(city[1])
// console.log(city[2])
// console.log(city[3])

// //program 2
// let city1="chandrapur"
// console.log(city1.length)
// for (let i=0; i<10;i++){
//     console.log(i) //index
//     console.log(city1[i])
// }

// for (let i = city1.length-1;i>=0;i--){
//     console.log(i)
//     console.log(city1[i])
// }

// //program 3
// let city3="nagpur"
// let i1=0

// while(i1<city3.length){
//     //console.log(i1)
//     console.log(city3[i1])
//     i1=i1+1
// }


// let i2=city3.length-1
// while(i2 >=0){
//     console.log(city3[i2])
//     i2=i2-1 
// }



//string
let firstName="subhuti"
console.log(firstName)


let lastName="kapse"
console.log(lastName)


// let middleName="ajay"
// console.log(middleName)

let fn="subhuti"
let ln="kapse"


//my firstname is subhuti and my lastname is kapse
console.log('firstname is "+fn+ and my lastname is "+ln')

//string interpolation
console.log('my firstname is ${fn} and my lastname is ${ln}')


let a=10
let b=12
let c=16
console.log(a+b+c)

let a1=10
let b1=12
let c1="hello"
console.log(a1+b1+c1)


//string---object

let first_name="subhuti"
console.log(first_name)
console.log(typeof first_name)


let q1="subhuti"
console.log(q1)

let last_name="kapse"


//program 1
let s1=last_name.toUpperCase()
console.log(s1)

let middle_name="Sapeksha"
let s2=middle_name.toLowerCase()
console.log(s2)

//program 2
let s3="hello".toUpperCase().toLowerCase().length
console.log(s3)

//program 3
let fruit="banana"
let w1=fruit.startsWith("ba")
console.log(w1)

let w2=fruit.endsWith("na")
console.log(w2)

let w3=fruit.startsWith("Ba")
console.log(w3)

//program 4
let vegetable="brinjal"
let z1=vegetable.includes('i')
let z2=vegetable.includes('in')
let z3=vegetable.includes('ill')
console.log(z1)
console.log(z2)
console.log(z3)


//program 5
let a11="hello"
console.log(a11)

console.log(a11.length)
s11=a11.trimStart()
console.log(s11.length)





console.log(a11.length)
s11=a11.trimEnd()
console.log(s11.length)

a12='hello'
w1=a12.trim()
console.log(w1)


//program 6
info='i am learning javascript'
s18=info.replace("javascript","python")
console.log(s18)


let firstname_="subhuti"
console.log(firstname_)


y1="chandrapur"
let b3=firstname_.slice(2)
let b2=firstname_.slice(1,6)
console.log(b3)
console.log(b2)

//program 2
let last1name="kapse"
let fullname=last1name.concat("").concat("subhuti")
console.log(fullname)

//program 3
let city1="warDha"
console.log(city1.charAt(1))
console.log(city1.charCodeAt(3))

let info2="i am learning javascript"
console.log(info2.substring(2,45))