// // call , bind , apply
// // object literal
let subhuti = {
    firstName:"subhuti",
    lastName:'kapse',
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
subhuti.displayName()

let sanu  = {
    firstName:"sanu",
    lastName:"tirpude",
}

//let displayName2  = subhuti.displayName
let displayName2 = function(){
    console.log(this.firstName + this.lastName)
}

//bind() 

//let arr = displayName2.bind(sanu)
let arr = function(){
        console.log(sanu.firstName + sanu.lastName)
    }

//call()
//apply()

console.log(subhuti.firstName)
console.log(subhuti.lastName)
subhuti.displayName()

// program 2

let ram = {
    firstName:"ram",
    lastName:"raj"
} 
let laxman = {
    firstName:"laxman",
    lastName:"bharadwaj"
} 

let krishna = {
    firstName:"krishna",
    lastName:"kumar"
} 

let displayName = function(){
    console.log(this.firstName + this.lastName)
}
let q1 = displayName.bind(ram)
let q2 = displayName.bind(laxman)
let q3 = displayName.bind(krishna)


let displayName3 = function(greet){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}

displayName3.call(ram,"hello")
displayName3.call(laxman,"hello2")
displayName3.call(krishna,"hello3")


displayName3.apply(ram,["bye"])
displayName3.apply(ram,["bye2"])
displayName3.apply(ram,["bye3"])



//function declaration
function displayColor(cl){
    return cl + "G"
}
let r = displayColor("green")
console.log(r)



let  displayColor3 = function(cl){
    return cl + "G"
}
let r2 = displayColor3("green")
console.log(r2)

// let  displayColor4 = (cl)=>{
//     return cl + "G"
// }
// let r3 = displayColor4("green")
// console.log(r3)

let  displayColor4 = (cl)=>cl + "G"
let r3 = displayColor4("green")
console.log(r3)