
// // push() , 
// //pop() , 
// //shift() ,
// // unshift(),
// // includes()

// let birthYear = [2000,2001,2002,2003]
// let ages = []

// for(let i = 0 ; i < birthYear.length ; i++){
//     console.log(i)
//     console.log(birthYear[i])
//     let age = 2024 - birthYear[i]
//     ages.push(age)
// }

// console.log(ages)
// birthYear = [2000,2001,2002,2003]
// let q1 = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2024 - el
//  })
//  console.log(q1)
 

//  // program 2
//  //map
//  let numbers = [22,33,44,55,66,77,88,99]
// //[23,34,45,56,67,78,89,100]
// let q2 = numbers.map(function(el,index,arr){
//     return el + 1
// })
// console.log(q2)

// // program 3
// //filter
// let marks = [60,62,44,77,33,44,56]
// let above50 = []

// for(let i = 0 ; i < marks.length ; i++){
//     if(marks[i] > 50){
//         above50.push(marks[i])
//     }
// }
// console.log(above50)

// let q3 = marks.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(q3)


// // program 3
// //reduce
// let numbersC  = [11,22,33]
// let total = 0

// for(let i = 0 ; i < numbersC.length ; i++){
//     total = total + numbersC[i]
// }
// console.log(total)
// //fn(acc,el,index,arr)
// let q4 = numbersC.reduce(function(acc,el,index,arr){
//     return acc + el // acc - 66
// },0)
// console.log(q4)






// //map()
// let numbers=[11,22,33,44,55]
// let q1=numbers.map(function(el,index,arr){
//     //console.log(el,index,arr)
//   return el+1
// })
// console.log(q1)
// //filter()
// let numbersA=[45,34,57,89,90,54]
// let q2=numbersA.filter(function(el,index,arr){
//     //console.log(el,index,arr)
//     return el>40
// })
// console.log(q2)
// //reduce()
// let numbersC=[5,7,9]
// let q3=numbersC.reduce(function(acc,el,index,arr){
//     return el + acc
// })
// console.log(q3)
// //forEach() //return nhi karta
// let city=["nagpur","mumbai","pune","wardha"]
// city.forEach(function(el,index,arr){
//     console.log("welcome "+el)
// })
// //find()
// let num=[12,34,45,66,88,98]
// let q4=num.filter(function(el,index,arr){
//     return el >50
// })
// console.log(q4)
// //findIndex()
// let q5=num.findIndex(function(el,index,arr){
//     return el >50   
// })
// console.log(q5)
// //some()
// let numT=[12,23,45,65,78,90,3,4]
// let q6=numT.some(function(el,index,arr){
//     return el <5
// })

// console.log(q6)
// //every()
// let q7=numT.every(function(el,index,arr){
//     return el >10
// })
//  console.log(q7)

 //map 
 //filter
 //reduce

//  //map()
//  let numbersQ=[11,22,33,44,55]
//  let a1=numbersQ.map(function(el,index,arr){
//     return el +1
//  })
//  console.log(a1)

// //filter()
//  let numb=[11,22,33,44,55]
//  let a2=numb.filter(function(el,index,arr){
//     return el >30
//  })
//  console.log(a2)

//  //reduce()
//  let numbe=[11,22,33,44,55]
//  let a3=numbe.reduce(function(acc,el,index,arr){
//     return el+acc
//  })
//  console.log(a3)

 //map()

// let num=[11,22,33,44,55]
// let q1=num.map(function(el,index,arr){
//    return el +1
// })
// console.log(q1)

// //filter()
// let numT=[11,22,33,44,55]
// let q2=numT.filter(function(el,index,arr){
//    return el >30
// })
// console.log(q2)

// //reduce()
// let numY=[11,22,33,44,55]
// let q3=numT.reduce(function(acc,el,index,arr){
//    return el +acc
// })
// console.log(q3)



// map(), filter(), reduce(), forEach()
// find() ,findIndex(),every() , some()


// // map()
// let birthYear = [2000,2001,2002,2003]
// // [2024 - 2000 , 2024 - 2001 ,2024 - 2002 ,2024 - 2003]
// // [24,23,22,21]

// let q1 = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2024 - el
// })
// console.log(q1)

// // program 2
// let numbers = [11,22,33,44,55]
// let q2 = numbers.map(function(el){
//     return el + 10
// })
// console.log(q2)


// // program3
// let marks = [78,66,55,66,33,44,88,99,33]
// // [78,66,55,66,89,99]
// let q3 = marks.filter(function(el,index,arr){
//     return el > 60
// })
// console.log(q3)

// let transactions = [-100,100,10000,-900,899,67,-67,100,344]

// let deposit = transactions.filter(function(el){
//    return el > 0
// })
// console.log(deposit)

// let withdrawl = transactions.filter(function(el){
//    return el < 0
// })
// console.log(withdrawl)

// // reduce()

// let nums = [11,22,33]
// let q4 = nums.reduce(function(acc,el,index,arr){
//    return acc + el 
// },0)
// console.log(q4)


// // forEach()
// let cities = ["pune","mumbai","banglore","nagpur"]
// cities.forEach(function(el,index,arr){
//    console.log("welcome "+ el)
// })

// // map() , filter() ,reduce() , forEach()
// //              0  1  2  3  4  5  6  7
// let numbersB = [9,33,44,55,66,77,44,66]
// let q5 = numbersB.filter(function(el,index,arr){
//    return el > 40
// })
// console.log(q5)

// let q6 = numbersB.find(function(el,index,arr){
//    return el > 40
// })
// console.log(q6)

// let q7 = numbersB.findIndex(function(el){
//     return el > 40
// })
// console.log(q7)

// // every()
// let counts = [11,22,33,44,55] 
// let q8 = counts.every(function(el,index,arr){
//     return el > 50
// })
// console.log(q8)

// //some()
// counts = [11,22,33,44,55] 
// let q9 = counts.some(function(el,index,arr){
//     return el > 55
// })
// console.log(q9)

//map()
//filter()
//reduce()
//forrech()
let cities = ["pune","mumbai","banglore","nagpur"]
cities.forEach(function(el,index,acc){
  console.log("welcome "+el )
})
   console.log()



//every()
let no=[11,22,33,44,55]
let y1=no.every(function(el,index,arr){
   return el>10
})
console.log(y1)

//some()
let noQ=[11,22,33,44,55]
let w1=noQ.some(function(el,index,arr){
   return el > 20
})
console.log(w1)


// slice()

//               0      1      2        3         4         5       6
let cities2 = ["pune","goa","nagpur","wardha","chennai","jaipur","udaipur"]
//               -7    -6     -5       -4       -3         -2         -1
//cities2.slice(startIndex,endIndex(not included))
////cities2.slice(startIndex)
console.log(cities2.slice(1))
console.log(cities2.slice(1,5))
console.log(cities2.slice(-5))
console.log(cities2.slice(1,-3))
console.log(cities2.slice(-7,4))
console.log(cities2.slice(-1,-4))

//splice() 
//                     0        1         2        3
let vegetabales = ["carrot","brinjal","potato","cabbage"]
// vegetabales.shift()
// vegetabales.pop()

//vegetabales.splice(startIndex,numberOfElementTobeDeleted)
// vegetabales.splice(1,1)
// console.log(vegetabales)
vegetabales.splice(2,2,"cauliflower","ladyfinger")
console.log(vegetabales)

//fill() 

let markss = [45,43,41,40,33,12,31,29,9,8]
let q12 = markss.fill('try again',5,8)
console.log(q12)

//sort()

let nms = ["subhuti","shruti","sani","sanvi","sania"]
nms.sort()
console.log(nms)

//flat()


let state = [["pune","nagpur"],["jaipur","udaipur"],["kanpur","lucknow"]]

console.log(state[1][0])
console.log(state[0][1])
console.log(state[2][1])
let q1 = state.flat()
console.log(q1)

