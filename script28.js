//object literal 
let subhuti  = {
    firstName:'subhuti',
    lastName:"kapse",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(subhuti.firstName)
console.log(subhuti.lastName)
subhuti.displayName()


let sapeksha  = {
    firstName:'sapeksha',
    lastName:"raisingh",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(subhuti.firstName)
console.log(subhuti.lastName)
subhuti.displayName()

// program 2
// function constructor 

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }

}

let supriyaA  = new Person("supriya","raj")
console.log(supriyaA)
supriyaA.displayName()


function Vehicle(color,type){
    this.color = color 
    this.type = type
    this.displayColor = function(){
        console.log(this.color)
    }
}
let rollsroyce = new Vehicle("black","XUV")
let rangerover = new Vehicle("white","BMW")

console.log(rollsroyce)
console.log(rangerover)
rangerover.displayColor()

// Es6 


class PersonC  {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class VehicleC {
    constructor(color,type){

        this.color = color
        this.type = type
    }

    displayColor(){
        console.log(this.color)
    }
}

let audi = new VehicleC("blue","ford")
let Shubhi = new PersonC ("shubhi","jaysingh")

// Object.create()

let audiQ = Object.create({})
console.log(audiQ)
audiQ.color = "red"
audiQ.type = "sedane"
audiQ.displayColor = function(){
    console.log(this.color)
}
console.log(audiQ)