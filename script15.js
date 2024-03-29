// Object ---- properties and methods

let info = ["subhuti","kapse",21,64]

let vishakha = {
    // key:values
    // property:values
    firstName:"subhutiA",
    lastName:"kapseA",
    age:21,
    rollNo:65
}
console.log(vishakha)
// retrive (dot notation and bracket notation)
console.log(vishakha.firstName)
console.log(vishakha['firstName'])
// update (dot notation and bracket notation)
chinmay.lastName = "ishita"
chinmay['lastName'] = "deshmukh"
console.log(vishakha)
// add 
chinmay['language'] = "marathi"
chinmay.city = "pune"
console.log(chinmay)
//delete 
delete vishakha.firstName
delete vishakha['lastName']

vehicle = {
    color:"red",
    type:"sedane"
}

// retrive  // update // add // delete
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.regNo = 123
delete vehicle.color
// brakcet notation

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 123
delete vehicle['regNo']

//               0        1        2      3
let names = ["subhutiB","shanti","rupa","ravi"]
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

for(let i = names.length -1 ; i > -1 ; i--){
    //console.log(i)
    console.log(names[i])
}


let jaiswal = {
    //property:values
    firstName:"kamlesh",
    lastName:"satvik",
    age:34,
    rollNo:45
}
//console.log(ninad['firstName'])

for(let prop in jaiswal){
    console.log(prop,jaiswal[prop])
}







// let ninad2 = {
//     //property:values
//     firstName:"ninad",
//     lastName:"dani",
//     age:34,
//     rollNo:45
// }

// for(let x in ninad2){
//     console.log(x,ninad2[x])
// }

let students = [

    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34
    },
    {
        firstName:"tanmay",
        lastName:"dani",
        age:32
    },
    {
        
        firstName:"ninad",
        lastName:"dani",
        age:31

    }

]
console.log(students[2].firstName)