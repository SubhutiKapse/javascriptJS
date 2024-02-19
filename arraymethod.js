//araays methods
//1....push() ------>add element in last
let names=["subhuti","shruti","shubhangi","shubhi","sapeksha"]
let w1=names.push("shyli")
console.log(w1)
console.log(names)

//2....unshift()------>adds elements in start
let w2=names.unshift("poorva")
console.log(w2)
console.log(names)
//3....pop()---->removes last element
let fruits=["apple","banana",,"orange","grapes"]
let w3=fruits.pop()
console.log(w3)
//4....shift()---->shift 1st element
let w4=fruits.shift()
console.log(w4)



//5....indexof()---->returns index
let animals=["tiger","lion","monkey","kangaroo","chittah"]
let w5=animals.indexOf('lion')
console.log(w5)



//6....includes()--> returns in boolean  true/false
let city=["nagpur","pune","mumbai","banglore"]
let w6=city.includes('pune')
console.log(w6)
//7....reverse()--->reverse array
let w7=city.reverse()
console.log(w7)
//8....at()--->index
let w8=city.at(2)
console.log(w8)

//9....concat()-->joins 2 list
let x=[11,22,33,44,55]
let y=[66,77,88,999,10]
let a1=x.concat(y)
console.log(a1)
console.log(x)
console.log(y)

//10...join()
let info=["subhuti","kapse",12346567]
let s=info.join('-')
let t=info.join('@')
console.log(s)
console.log(t)