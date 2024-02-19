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