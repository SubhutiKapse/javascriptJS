let names=["ram","sham","jay","veeru"]
// console.log(names.length)
// console.log(names)

let q1=names.length
console.log(q1)

//push()
// action - add the element to the last
// return - new length of array
let company=["Google","Microsoft","TCS","Accenture"]
let t1=company.push("ram")
console.log(t1)


//shift()
// Action - removes the first element of array
// Return - same element
let numbers=[1111,2222,3333,4444,5555]
let t2=numbers.shift(1111)
console.log(t2)

//unshift()
// action - add the element at the start of array
// return - new length of array
let numbersT=[1111,2222,3333,4444,5555]
let t3=numbers.unshift(6666)
console.log(t3)


//pop()
// Action - removes the last element of array
// Return - same element
let countrys=["USA","Indoneshia","China","Southkorea"]
let t4=countrys.pop()
console.log(t4)


//includes()
// action - search the element inside array
// return boolean --- true if found else false

let hobbies=["drawing","traveling","dancing","singing"]
let t5=hobbies.includes("painting")
console.log(t5)