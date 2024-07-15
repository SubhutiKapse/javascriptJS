//ARRAY
let num=[11,22,33,44,55]
console.log(num)
console.log(typeof(num))

//
let names=["subhuti","shruti","shivmala","shivani"]
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names.length)

//update
names[0]="vimla"
console.log(names)

//forward
for(let i=0;i<names.length;i++){
    console.log(i)
}

//reverse
for(let i=names.length-1;i>=0;i--){
    console.log(i)
}

// //program 1
// let country=["India","Srilanka","Bangladesh","China"]
// //retrive the value
// console.log(country[0])
// console.log(country[1])
// //update the value
// country[0]="Pakistan"
// console.log(country)


// //find length

// //program 1
// let country1=["India","Srilanka","Bangladesh","China"]
// console.log(country1.length)


// for (let i=0;i<4;i++){
//     console.log(i)//print index
//     console.log(country1[i])//print element
// }

// //program 2
// fruits=["apple","banana","orange","straberry"]
// for (let i=0;i<4;i++){
//     console.log[i]
//     console.log(fruits[i])
// }

// let vegetable = ["tomato","potato","brinjal","onion"]
// console.log(vegetable[0])
// for(let i = 0 ; i < 4; i++ ){
//     //console.log(i)
//     console.log(vegetable[i])
// }

// let fruits1=["mango","banana","orange","chikoo"]
// //retrive
// console.log(fruits1[0])
// //update
// fruits1[0]="grapes"
// console.log(fruits1)
// //add
// fruits1.push("papaya")
// console.log(fruits1)
// //delete
// fruits1.pop()
// console.log(fruits1)

// //program 
// let animals = ["lion","tiger","rabbit","snake"]
// console.log(animals.length)
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])
// console.log(animals[3])

// //using loop--forward
// for(let i=0;i=animals.length;i++){
//     console.log[i]
    
// }

// // //using loop--reverse
// // for(let i=animals.length-1;i>=0;i--){
// //     console.log[i]
// // }

// //program 4

// let numbers = [11,22,33,44,55] 
// console.log(numbers.length)
// console.log(numbers.length-1)
// console.log(numbers[numbers.length-1])

// // while loop
  
// let grades2 = ["A","B","C","D","E"]

// let i1 = 0 
// while(i1 < grades2.length){
//    // console.log(i1)
//     console.log(grades2[i1])
//     i1 = i1 + 1
// }



let country = ["india","srilanka","cuba","china"]

let i1 = 0
while(i1 <  country.length){
    //console.log(i1)
    console.log(country[i1])
    i1 = i1 + 1
}

let i2 = country.length -1
while(i2 >= 0){
    //console.log(i2)
    console.log(country[i2])
    i2 = i2 - 1
}

// // name2=["ram","sham","jay","veeru"]
// // console.log(name2.length)
// // console.log(name2)

let vegetables=["tomato","potato","brinjal","onion"]
console.log(vegetables)
console.log(vegetables[0])
for(let i=0;i <vegetables.length;i++){
    console.log(i)
}




//ARRAY METHODS

let namesP = ["subhuti","shruti","shamli","shyli"]
let t1 = namesP.push("shyli")
console.log(namesP)
console.log(t1)

///             0        1        2          3
let cities = ["pune","mumbai","bangalore","kolkata"]
let y1 = cities.unshift("nagpur")
console.log(cities)
console.log(y1)

// push() , unshift()

// program 3
let countryA = ["india","pakistan","srilanka","bangladesh"]
let y2 = countryA.pop()
console.log(countryA) 
console.log(y2)

//program4
let y3 = country.shift()
console.log(y3)
console.log(country)

// push() , unshift() , pop() , shift()
// program 5
let namesB = ["chinmay","sarika","amol","amit"]
let y4 = namesB.includes("Sarika")
console.log(y4)


// map() , filter() , reduce(), forEach()
// find() , findIndex() , every(), some()

// program 1
//                0     1   2    3
let birthYear = [1989,1990,1991,1992]
//  [35,34,33,21]

let q1 = birthYear.map(function(el,index,arr){
    // console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})

console.log(q2)


// program 2
// filter()
let marks = [33,44,56,33,44,55,66,77]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

// program 3 

let transactions = [-900,1000,2000,3400,4500,-500]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// program 3
// reduce()

let numbersA = [11,22,33]
numbersA.reduce(function(acc,el,index,arr){
    return acc + el // 0 + 11 ==> 11 ===> 11 + 22 ===> 33 ===> 33 + 33 ===> 66
},0)
console.log(numbersA)

// program 4
// forEach()
let citiesQ = ["pune","mumbai","banglore","kolkata"]
citiesQ.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

// map() , filter() , reduce(),forEach()


// find()
//              0  1  2  3  4  5 6  7 8
let marsksN = [12,88,55,66,77,12,3,45,55]
let q6 = marsksN.filter(function(el){
    return el > 50
})
console.log(q6)

// onlt first occurence
let q7 = marsksN.find(function(el){
    return el > 50
})
console.log(q7)

let q8 = marsksN.findIndex(function(el){
    return el > 50
})
console.log(q8)

// every()

let numberC = [11,22,33,44,55,6]
let q9 = numberC.every(function(el){
    return el > 10
})
console.log(q9)

// some()
let q10 = numberC.some(function(el){
    return el > 500
})
console.log(q10)







