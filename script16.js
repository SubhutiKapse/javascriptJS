let names = ["subhuti","sayli","rupa","shyli"]
// retrive 
console.log(names[0])
// update 
names[0] = "sanvi"
console.log(names)
// add 
names.push("raj")
names.unshift("raj")
console.log(names)
// delete 
names.pop()
names.shift()
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

// objects 
//              0          1       2   3
let info2 = ["subhuti","kapse",34,45]

let info3 = {
    // key:value
    // property:value ------> item
    firstName:"subhutiQ",
    lastName:"kapseQ",
    rollNo:34,
    age:45
}

console.log(info3)
// object does not stores the value by index ??
// can object stores the duplicate element ??
//console.log(info3[0])

// C - create   R - retrive   U - Update  D - Delete

let subhutiR = {
    firstName:"subhutiT",
    lastName:"kapseT",
    age:34,
    rollNo:45,
    firstName:"sapeksha"
}
console.log(subhutiR)

// retrive (dot notation and bracket notation)
console.log(subhutiR.firstName)
console.log(subhutiR['firstName'])
// update (dot notation and bracket notation)
subhutiR.firstName = "ram"
subhutiR['lastName'] = "ramesh"
console.log(subhutiR)
// add (dot notation and bracket notation)
subhutiR['language'] = "marathi"
subhutiR['language'] = "marathi"
subhutiR.city = "pune"
subhutiR['language'] = "marathi"
console.log(subhutiR)
// delete (dot notation and bracket notation)
delete subhutiR.firstName
delete subhutiR['lastName']

let vehicle = {
    color:"red",
    type:"Rolls Royce",
    regNo:123
}

for(let key in vehicle){
    //console.log(key)
    console.log(key , vehicle[key])
}