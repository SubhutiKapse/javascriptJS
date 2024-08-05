// //OBJECT
// //obj---properties and methods

// let names=["subhuti","shruti","shiva","shyli"]
// //retrive
// console.log(names[0])
// //update
// names[2]="shivani"
// //delete
// names.pop("shyli")
// console.log(names)
// //add
// names.push("shivani")
// console.log(names)

// //
// let birthYear = [1989, 1990, 1991, 1992]
// //[35,34,33,32]
// let ages = []
// for (let i = 0; i < 4; i++) {
//     //console.log(i)
//     //console.log(birthYear[i])

//     let age = 2024 - birthYear[i]
//     //console.log(age)
//     ages.push(age)
// }


// console.log(ages)


// //
// let birthYear2=[2000,2001,2002,2003,2004]
// console.log(birthYear2)

// for(let i=0;i<5;i++){
//     console.log(i)
//     console.log(birthYear2[i])
    
// let year=[]
// let year2=2024-birthYear2[i]
// console.log(year2)
// year.push(year2)
// }


//
let marks=[22,33,45,55,67,89,78]
let above40=[]
for (let i=0;i<marks.length;i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i]>40){
        above40.push(marks[i])
    }
        
}
console.log(above40)



//
let num=[2,3,5,6,7]
let total=0
for(let i=0;i<num.length;i++){
    total=total+num[i]
}
console.log(total)

//

let city = ["nagpur","mumbai","pune","hydrebad"]
for(let i=0;i<city.length;i++){
    console.log("welcome " + city[i])
}

let info2 = {
    firstName:"subhuti",
    lastName:"kapse",
    age:21,
    rollNo:52,
    mobile:84756874
}
// Retrive (dot notation and bracket notation)
console.log(info2['firstName'])
console.log(info2.firstName)

// Update (dot notation and bracket notation)
info2['firstName'] = "sapeksha"
info2['lastName'] = "singh"
console.log(info2)

info2.firstName = "sanu"
info2.lastName = "chaudhary"
console.log(info2)
 
// Add(dot notation and bracket notation)
info2.city = "banglore"
info2['country'] = "india"
console.log(info2)
// Remove(dot notation and bracket notation)

delete info2['city']
delete info2.firstName
console.log(info2)

let info  = ["shruti","chavan",22,45,847657548]
let infoA= {
    firstName:"shruti",
    lastName:"chavan",
    mobileNo:974439887,
    age:21,
    rollNo:90,
    age:44
}
console.log(infoA)

//Object does not stores the value by index 
//console.log(info2[0])
//Does not allow duplicate key-values 


info3  = {
    firstName:"subhuti",
    lastName:"kapse",
    mobileNo:847558445,
    age:22,
    rollNo:89,
    age:422
}

//retrive // . notation and bracket notation
console.log(info3.firstName)
console.log(info3['firstName'])
//update  // . notation and bracket notation
info3['firstName'] = "sapeksha"
info3.lastName = "singh"
console.log(info3)
//add // . notation and bracket notation
info3.city ="banglore"
info3['language']= "hindi"
console.log(info3)
//delete // . notation and bracket notation
delete info3.city
delete info3['lastName']
console.log(info3)

// program 2

let vehicle = {
    color:"blue",
    type:"Audi"
}
// console.log(vehicle.color)
// vehicle.color = "black"
// vehicle.model = "A1"
// delete vehicle.type

vehicle = {
    color:"black",
    type:"BMW"
}

console.log(vehicle['color'])
vehicle['color'] = "red"
vehicle['model']  = "A1"
delete vehicle['model']


let info33 = ["saniya","jivan",21,55]

for(let i = 0 ; i < info33.length ; i++){
    console.log(info33[i])
}

info4 = {
    firstName:"sapeksha",
    lastName:"kapse",
    mobileNo:9485798589,
    age:21,
    rollNo:43,
    age:22
}
// loop - bracket notation
for(let prop in info4){
    console.log(prop,info4[prop])
}

