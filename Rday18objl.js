// //OBJECT LITERALS

// let subhuti = {
//     firstName:"subhuti",
//     lastName:"kapse",
//     age:21,
//     city:"banglore"
// }
// console.log(subhuti)

// let shruti = {
//     firstName:"shruti",
//     lastName:"kane",
//     age:14,
//     city:"mumbai"
// }
// console.log(shruti)


// // class 

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined 
//     city = undefined
// }

// let subhutiB = new Person()
// let shrutiB  = new Person()
// console.log(subhutiB)
// console.log(shrutiB)


///////////////////////////////////////////////////////////////////////////

let subhuti = {
    firstName:"subhuti",
    lastName:"kapse",
    age:23,
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

console.log(subhuti.firstName)
console.log(subhuti.lastName)
console.log(subhuti.age)
subhuti.display()

// function constructor 

function Person(fn,ln,ag){
    this.firstName = fn 
    this.lastName = ln 
    this.age = ag
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }

}

let subhuti2 = new Person("subhuti2","kapse2",21)
console.log(subhuti2.firstName)
console.log(subhuti2.lastName)
console.log(subhuti2.age)
subhuti2.displayName()

let sanu = new Person("sanu","soni",22)
console.log(sanu.firstName)
console.log(sanu.lastName)
console.log(sanu.age)
sanu.displayName()

// Es6 class 
class PersonC {
    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let rani = new PersonC("rani","singh",21)
console.log(rani.firstName)
console.log(rani.lastName)
console.log(rani.age)
rani.displayName()


// object.create method
let shruti = Object.create({})
console.log(shruti)
shruti.firstName = "shruti"
shruti.lastName = "kapse"
shruti.age = 23
shruti.displayName = function(){
    console.log(this.firstName + this.lastName)
}
console.log(shruti)
shruti.displayName()


//Es6

//program 

class PersonK{
    firstName=undefined
    lastName=undefined
    age=undefined
    rollNo=undefined


displayName(){
    console.log(this.firstName + this.lastName)
}
}


let subhutiA= new PersonK()
console.log(subhutiA.firstName)
console.log(subhutiA.lastName)


// Prototype inheritance
function PersonD(fn,ln,ag){
    this.firstName = fn 
    this.lastName = ln 
    this.age = ag
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let saku = new PersonD("saku","raj",21)
let sanuA = new PersonD("sanuA","rai",22)
console.log(saku)
console.log(sanuA)

// Every object has obj.__proto__ === Parent.prototype
console.log(saku.__proto__ === PersonD.prototype)
console.log(sanuA.__proto__ === PersonD.prototype)


PersonD.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
PersonD.prototype.country = "India"
sanuA.displayName()
saku.displayName()
console.log(saku.country)