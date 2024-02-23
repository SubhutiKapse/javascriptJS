// //1--->push()
// let names=["subhuti","shruti","kamla","vimla"]
// //console.log(names)
// let q1 = names.push("shyli")
// console.log(q1)


let birthyear=[1989,1990,1991,1992]
let age=[]
//2024-1989,2024-1990,2024-1991,2024-1992
//[35,34,33,32]

for (let i=0;i<birthyear.length;i++){
   // console.log(i)
    //console.log(birthyear[i])
    //console.log(2024-birthyear[i])
    let x=2024-birthyear[i]
    age.push(x)
    
}
console.log(age)

//program 2
let year=[2001,2002,2002,2004,2005]
let ttu=[]
for (let i=0;i< year.length;i++){
    let y=2024-year[i]
    ttu.push(y)

}
console.log(ttu)

//program 3

let yr=[1920,1921,1922,1923,1924]
let we=[]
for (let i=0;i<yr.length;i++){
    let u=2024-yr[i]
    we.push(u)

}
console.log(we)

//program 4
let rollno=[1223,3445,3456,3456]
let yui=[]
for (let i=0;i<rollno.length;i++){
    let d=2024-rollno[i]
    yui.push[d]
    
}
console.log(yui)



//program 1
let marks=[11,22,34,44,55,66]
let above30=[]
for (let i=0;i<marks.length;i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i]>30){
        //console.log(marks[i])
     above30.push(marks[i])
    }
}
console.log(above30)

//program 2

let id=[12,34,56,67,87]
let abo12=[]
for(let i=0;i<id.length;i++){

if (id[i]>12){
abo12.push(id[i])
}
}
console.log(abo12)

//program 4
let numbers=[11,22,33]//66
let total=0
for (let i=0;i<numbers.length;i++){
    //console.log(i)
    //console.log(numbers[i])
total =total+numbers[i]
}console.log(total)

let num=[55,66,77]//198
let total1=0
for (let i=0;i<num.length;i++){
    total1=total1+num[i]
}console.log(total1)


//program 1
let city=["nagpur","chandrapur","wardha","pune"]
for (let i=0;i<city.length;i++){
    //console.log(i)
    //console.log(city[i])
    console.log("welcome "+city[i])
}




//program 1
let birthYear=[1989,1990,1991,1992]
let ages=[]
for (let i=0;i<birthYear.length;i++){
    //console.log(i)
    //console.log(birthYear[i])
    let x=2024-birthYear[i]
    ages.push(x)
    
}

console.log(ages)

//map
birthyr=[1989,1990,1991,1992,1993]
let q1=birthyr.map(function(el,index,arr){
     return 2024-el
})
console.log(q1)

let numT=[11,22,33,44,55,66,77]//+1
let w2=numT.map(function(el,index,arr){
    return el+1
})
console.log(w2)

//program 2
let Marks=[55,66,77,88,99,100]
let above50=[]
for (let i=0;i<marks.length;i++){
    if (Marks[i]>50){
        above50.push(Marks[i])

    }
}
console.log(above50)

//filter
let e4= marks.filter(function(e4,index,arr){
    return e4 > 50
})
console.log(e4)

//program
let transactions=[11,22,33,44,55,-66,-77]
let deposit =transactions.filter(function(e8,index,arr){
    return e8 > 0
})
console.log(deposit)
let withdrawl =transactions.filter(function(e8,index,arr){
    return e8 < 0
})
console.log(withdrawl)

//program 3 reduce
let NUM=[11,22,33] //sum of arraays
let total7 =0
for (let i=0;i<NUM.length;i++){
    total7=total7+NUM[i]
}
console.log(total1)
let e7=NUM.reduce(function(acc,e1,index,arr){
    return acc+e1
})
console.log(e7)

//map
let Birthyear=[1980,1981,1982,1983]
let q11=Birthyear.map(function(el,index,arr){
    return 2024-el

})
console.log(q11)

let NUMs=[11,22,33,44,55]//add 10
let d1=NUMs.map(function(el,index,arr){
    return el+10

})
console.log(d1)

//filter() 
let markS=[23,55,47,89,76,99]
k9=markS.filter(function(el,index,arr){
return el>20 && el<88
})
console.log(k9)

//reduce() 
let roll=[12,34,45,67,88]//addition
o0=roll.reduce(function(acc,el,index,arr){
    return acc+el


})
console.log(o0)

//forEach()
let cities=["pune","mumbai","banglore","hyderabad"]
p0=cities.forEach(function(el,index,arr){
console.log("Hello "+el)
})
console.log(p0)

//filter()
let ele=[11,22,33,44,55]//above 30
p1=ele.filter(function(el,index,acc){
    return el>30
})
console.log(p1)
//find()
let a1=ele.find(function(el,index,arr){
return el<40
})
//findIndex()
//let no=[34,45,67,78,89]

// let l1=no.findIndex(function(el,index,arr){
//     return el>20
// })
// console.log(l1)
//every() returns boolean values true/false
let numh=[11,2,34,33,45,55,65,65,78]
let y1=numh.every(function(el,index,arr){
return el>10
})
console.log(y1)
//some()
let d3= numh.some(function(el,index,arr){
    return el >540

})
console.log(d3)
//slice()

let numm=[111,222,333,444,555,666,777,888,999]
//numm.slice(startinded,endindex(not included))
console.log(numm.slice(3))
console.log(numm.slice(-3))
console.log(numm.slice(-10,4))
console.log(numm.slice(1,-6))
console.log(numm.slice(-1,-3))
console.log(numm.slice(1,6))

//splice
let citieS=["pune","mumbai","banglore","kolkata"]
citieS.pop()//removes last element
cities.shift()//removes 1st element
console.log(citieS)

//fill()
let numA=[11,22,33,44,55,66]
l1=numA.fill('@',1,5)//1-index,5-not included
console.log(l1)


                 //    0                  1                     2
//flat()        0       1          0        1           0          1
let states=[["nagpur","wardha"],["indore","bhopal"],["jaipur","udaipur"]]
console.log(states[0][1])//0-index1 ,1-index2
console.log(states[1][1])
let aq=states.flat()
console.log(aq)



//sort(only alphabets)
//at()
//join()

let fruits=["apple","banana","orange","straberry"]
aa=fruits.sort()
//console.log(fruits)
console.log(aa)



let t1=[111,222,333,444,555]
let t2=t1.indexOf(444)//element
let t3=t1.at(3)//index
console.log(t2)
console.log(t3)


//join()
let info1=["subhuti","kapse",9119457080]
r1=info1.join('@')
console.log(r1)

d1=info1.join('  ')
console.log(d1)

