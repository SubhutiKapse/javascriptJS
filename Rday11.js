// slice() 


// splice()


// reverse()
// let fruitsB = ["apple","mango","banana","orange","papaya"]
// fruitsB.reverse()
// console.log(fruitsB)

// sort()
// let country = ["india","pakistan","bangladesh","srilanka"]
// country.sort()
// console.log(country)

// fill()
//              0  1  2   3 4  5  6
// let marks = [97,96,95,94,93,92,91]
 //marks.fill("fill",startIndex,endIndex(not included))
 //let q7 = marks.fill("not selected",2,5)
// console.log(q7)

// flat()
//                  0                     1                   2
//             0          1          0        1         0           1
// let state = [["mumbai","nagpur"],["jaipur","udaipur"],["lucknow","kanpur"]]

// console.log(state[0][1])
// console.log(state[2][1])
// console.log(state[1][1])
// let q4  = state.flat()
// console.log(q4)

// at()  indexOf()
//              0        1       2        3
// let cities = ["pune","nagpur","mumbai","kolkata"]
// let c1 = cities.indexOf('nagpur')
// console.log(c1)

// let c3 = cities.at(1)
// console.log(c3)

//concat()
// let fruitsOne = ["apple","banana","grapes"]
// let fruitsTwo = ["papaya","chikoo","jamun"]
// let q2 = fruitsOne.concat(fruitsTwo)
// console.log(q2)

// // join()
// //             0           1          2
// let info = ["subhuti","kapse",834475695]
// // "subhuti-kapse-834475695"
// let q3 = info.join(' ')
// console.log(typeof q3)
// console.log(q3)
//       0   1  2  3 4
let hA = [11,22,33,44,55]
let q22 = hA.at(3)
console.log(q22)

let q23 = hA.indexOf(55)
console.log(q23)


//join
let nameT=["sapeksha","kapse",89564938]
let q1= nameT.join('-')
console.log(q1)

//concat()

// concat()
// let a1 = [11,22,33]
// let a2 = [33,44,55]
// let a3= n1.concat(a2)
// console.log(a3)

//slice()
//slice(startIndex, endIndex(not included))
             
let namesT = ["sapeksha","shruti","shamli","shanu","kamlesh","jablesh"]
             
e = namesT.slice(2)
console.log(e)
console.log(namesT.slice(1,5))
console.log(namesT.slice(1,4))
console.log(namesT.slice(-5))
console.log(namesT.slice(-5,-1))
console.log(namesT.slice(-5,4))
console.log(namesT.slice(-1,-5))

// splice()
//                0           1         2         3
let countriesT = ["india","pakistan","srilanka","bangladesh"]
//countriesT.pop()
//countriesT.shift()
//arrayName.splice(startIndex,numberOfElementsTobeDeleted,repl,repl)
// countriesT.splice(3,1)
// console.log(countriesT)
countriesT.splice(1,2,"china","cuba")
console.log(countriesT)

// flat()
//                    0                    1                    2
//               0        1          0          1         0          1
let stateT  = [["Nagpur","Mumbai"],["Kanpur","Lucknow"],["Jaipur","Udaipur"]]
console.log(stateT[0])
console.log(stateT[1][1])
console.log(stateT[2][1])
let f1 = stateT.flat()
console.log(f1)

// indexof // at
//             0   1  2  3
let numbersA = [11,22,33,44]
console.log(numbersA.at(2)) // pass the index
console.log(numbersA.indexOf(33))
console.log(numbersA.indexOf(54))

// reverse()
let countryT = ["india","srilanka","bangladesh","china"]
console.log(countryT.reverse())

// sort()
countriesT.sort()
console.log(countriesT)

// fill()
//fill("filledValue",startIndex,endIndex(not included))
             
let numbersQ= [11,22,33,44,55,66,77,88]
let h1 = numbersQ.fill(undefined,1,5)
console.log(h1)

// join()

let info  = ["subhuti","kapse",876438953]
let a = info.join('-')
console.log(a)

let b = info.join('@')
console.log(b)

// concat()
let z1 = [11,22,33]
let z2 = [33,44,55]
let z3= z1.concat(z1)
console.log(z3)

//slice()
//slice(startIndex, endIndex(not included))

let names = ["subhuti","shruti","shamli","vani","shima","shree"]

e = names.slice(2)
console.log(e)
console.log(names.slice(1,5))
console.log(names.slice(1,4))
console.log(names.slice(-5))
console.log(names.slice(-5,-1))
console.log(names.slice(-5,4))
console.log(names.slice(-1,-5))

// splice()
//                0           1         2         3
let countries = ["india","pakistan","srilanka","bangladesh"]
//countries.pop()
//countries.shift()
//arrayName.splice(startIndex,numberOfElementsTobeDeleted,repl,repl)
// countries.splice(3,1)
// console.log(countries)
countries.splice(1,2,"china","cuba")
console.log(countries)

// flat()
//                    0                    1                    2
//               0        1          0          1         0          1
let state  = [["Nagpur","Mumbai"],["Kanpur","Lucknow"],["Jaipur","Udaipur"]]
console.log(state[0])
console.log(state[1][1])
console.log(state[2][1])
let f = state.flat()
console.log(f)

// indexof // at

let numbers = [11,22,33,44]
console.log(numbers.at(2)) // pass the index
console.log(numbers.indexOf(33))
console.log(numbers.indexOf(54))

// reverse()
let country = ["india","srilanka","bangladesh","china"]
console.log(country.reverse())

// sort()
countries.sort()
console.log(countries)

// fill()
//fill("filledValue",startIndex,endIndex(not included))
//              0   1 2  3  4  5  6  7
let numbersN = [11,22,33,44,55,66,77,88]
let h = numbersN.fill(undefined,1,5)
console.log(h)


let namesY = ["subhuti","kapse",9348756394,21,45]
console.log(namesY)
// retrive 
console.log(namesY[0])

// udapte 
namesY[0]  = "sapeksha"
console.log(namesY)
// add 
namesY.push("banglore")
namesY.unshift("miss")
console.log(namesY)
// delete.

//used to delete element
//pop()
//shift()
//splice()
namesY = ["subhuti","kapse",9348756394,21,45]
namesY.pop()
namesY.shift()
namesY.splice(2,1)
