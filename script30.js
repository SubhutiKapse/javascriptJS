// let amol = {
//     fn:"subhuti",
//     ln:"kapse",
//     displayName:function(){
//         console.log(this.fn+this.ln)
//     }
// }
// console.log(subhuti.fn)
// console.log(subhuti.ln)
// subhuti.displayName()

// program 2

// function Person(fn,ln){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let subhutiA = new Person("subhi","raj")
// let linasha = new Person("lavi","nagar")
// console.log(subhutiA)
// console.log(linasha)

// // subhutiA.displayName()
// // linasha.displayName()

// // program 3

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
}

let subhutiA = new Person("subhi","raj")
let linasha = new Person("lavi","nagar")
console.log(subhutiA)
console.log(linasha)

// every object has one property __proto__ === Parent.protype

console.log(subhutiA.__proto__ === Person.prototype)
console.log(linasha.__proto__ === Person.prototype)

Person.prototype.displayName  = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

subhutiA.displayName()
linasha.displayName()

let names = ["sanu","shyli","shruti"]
console.log(names)
names.pop()
console.log(names.__proto__ === Array.prototype)

// Array.prototype.sapeksha = function(){
//     console.log("hello sapeksha !")
// }
// names.sapeksha()

console.log(names instanceof Array)
console.log(subhutiA instanceof Person)
console.log(linasha instanceof Person)

let q1 = subhutiA.hasOwnProperty("firstName")
let q2  = subhutiA.hasOwnProperty("lastName")
let q3 = subhutiA.hasOwnProperty("country")
console.log(q1)
console.log(q2)
console.log(q3)