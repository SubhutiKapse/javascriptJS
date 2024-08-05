// // //CONSTRUCTOR

// // class Person {
// //     constructor(fn, ln, ag, rn) {
// //         this.firstName = fn
// //         this.lastName = ln
// //         this.age = ag
// //         this.rollno = rn
// //     }
// // }
// // let shubhi = {
// //     firstName: "shubhi",
// //     lastName: "shukla",
// //     age: 21,
// //     rollNo: 111
// // }

// // let students = [
// //     new Person("shubhiB", "shuklaB", 21, 111),
// //     new Person("shubhiC", "shuklaC", 21, 111),
// //     new Person("shubhiD", "shuklaD", 21, 111),
// //     new Person("shubhiE", "shuklaE", 21, 111)
// // ]

// // console.log(students[2].firstName)
// // //print firstname and lastname--foreach never returns
// // students.forEach(function (el) {
// //     console.log(el.firstName + el.lastName)
// // })

// // //print average of all students


// // let total = students.reduce(function (acc, el) {
// //     return acc + el.age
// // }, 0)
// // console.log(total / students.length)


// //map
// //keys --values
// //keys in any different type

// //defining empty map
// let roles=new Map()
// console.log(roles.size)//gives size
// roles.set(1,"admin")//1--value admin--key
// roles.set(2,"customer")
// roles.set(3,"manager")
// roles.set(4,"support")
// console.log(roles)
// console.log(roles.size)


// //define map with values

// let rolesA=new Map(
//     [
//         [1,"admin"],
//         [2,"customer"],
//         [3,"manager"],
//         [4,"support"]

//     ]
// )

// console.log(rolesA)
// console.log(rolesA.size)
// //stores duplicate values

// //methods
// //set
// //get
// //has

// //set--used to set the values
// let mapB=new Map()
// mapB.set(1,"admin")
// console.log(mapB)

// mapB.set(2,"customer")
// console.log(mapB)

// let mapC=mapB.set(3,"manager")
// console.log(mapC)

// //get--used to get the values--retrive 
// let q1=mapB.get(1)//key passes
// console.log(q1)
// console.log(mapB)

// //has--gives boolean value


// let q2=mapB.has(2)//true buz it is present
// console.log(q2)

// let q3=mapB.has(3)//true
// console.log(q3)


// let q4=mapB.has(5)//false
// console.log(q4)


// let q5 = mapC.has(2)
// console.log(q5)

// if(mapC.has(2)){
//     console.log(mapC.get(2))
// }
// else {
//     console.log("key not avaialble")
// }
// // has() , get(), set()-- to set and update value

// // program 4
// let skills = ["python","javascript","sql"]
// let mapD = new Map([
//     ["firstName","subhuti"],
//     [skills,3],
//     [true,"candrive"]
// ])
// console.log(mapD)
// console.log(mapD)
// // mapD.clear()
// console.log(mapD)

// mapD.forEach(function(a,b){
//     //console.log(a)
//     console.log(b)
// })

// for(let key of mapD.keys()){
//     console.log(key)
// }
// for(let val of mapD.values()){
//     console.log(val)
// }
// for(let arr of mapD.entries()){
//     console.log(arr)
// }

// mapD.delete(skills)
// console.log(mapD)


// //program 1
// let mapA=new Map()
// console.log(mapA)

// let mapB=new Map([
//     [1,"admin"],
//     [2,"customer"],
//     [3,"support"],
//     [4,"manager"]
// ])
// console.log(mapB.size)//gives size


// let skills = ["python", "html", "css", "javascript"]
// let parent = { father: "ajay", mother: "shivmala" }


// let mapC=new Map([
//     [1,"subhuti kapse"],
//     [skills,"skills.length"],
//     [parent,"familyinfo"],
//     [true,"candrive"]
//  ])

// console.log(mapC)

// mapC.set(3,"manager")
//     console.log(mapC.get(true))
// console.log(mapC.has(parent))//boolean
// // mapC.delete(1)
// // console.log(mapC)
// // mapC.clear()
// // console.log(mapC)
// console.log(mapC.size)

// mapC.forEach(function(el){
//     console.log(mapC)
// //})

// for (let key in mapC.keys()){
//     console.log(key)
// }

// for (let value in mapC.values()){
// console.log(value)
// }

// for(let arr of mapC.entries()){
//         console.log(arr)
// }

let setA = new Set([11,22,33,33])
let setB=new Set()
setA.add(2)
setB.add(33)
setB.add(44)
setB.add(55)
console.log(setB.size)

console.log(setB.has(55))

// setB.clear()
// console.log(setB)

// setB.delete(33)
// console.log(setB)

// setB.forEach(function(el){
//     console.log(el)
// })

// console.log(setB.entries())
// console.log(setB.keys())
// console.log(setB.values())


class Person{
    firstName = undefined
   lastName = undefined
    age = undefined
    rollNo = undefined
}