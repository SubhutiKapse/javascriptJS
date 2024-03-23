//let roles =new Map()
//let roles2=new Map([
//     [1,"admin"]
//     [2,"manager"]
//     [3,"customer"]
// ])
console.log(roles2)
//program 2
let q1=roles2.size
console.log(q1)

//set() used to set values or information
roles2.set(3,"support")
console.log(roles2)
//get()used to get information
let q2=roles2.get(3)
console.log(q2)

//has()
// let q3 = roles2.has(3)
// console.log(q3)

// //clear()
// //roles2.clear()
// //console.log(roles2)

// // delete()
// roles2 = new Map([
//     [1,"admin"],
//     [2,"manager"],
//     [3,"customber"]
// ])

// roles2.delete(1)
// console.log(roles2)

// // forEach()
// roles2.forEach(function(v,k){
//     console.log(v,k)
// })

// // key()
// for(let key of roles2.keys()){
//     console.log(key)
// }
// // values()
// for(let val of roles2.values()){
//     console.log(val)
// }

// for(let [k,v] of roles2.entries()){
//     console.log(k,v)
// }

// roles2.set(2,"newValue")
// console.log(roles2)

//array
let names=["subhuti","sapeksha","shyli","shivani"]
console.log()

//define without element
let names2=new Set()
console.log(names2)

//with elements
let names3=new Set(["subhuti","sapeksha","shyli","shivani"])
console.log()

names3.add("vimla")
console.log(names3)

let q4=names3.has("subhuti")
console.log(q4)

names3.delete('chinmay')
console.log(names3)

names3.forEach(function(el){
    console.log(el)
})


let students = new Set([
    {firstName:"sapeksha1",lastName:"kapse1"},
    {firstName:"sharvari",lastName:"vyas"}
]) 



for(let key of students.keys()){
    console.log(key)
}
for(let key of students.values()){
    console.log(key)
}
for(let [k,v] of students.entries()){
    console.log(k,v)
}

