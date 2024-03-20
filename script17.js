//program 1
let names=["subhuti","sapeksha","shyli"]
let q1=names[0]
let q2=names[1]
let q3=names[2]

console.log(q1)
console.log(q2)
console.log(q3)

let [s1,s2,s3]=names
console.log(s1)
console.log(s2)
console.log(s3)

//program 2
let vegetables=["tomato","cauliflower","brinjal","ladyfinger"]
let [a1,,a2]=vegetables
console.log(a1)
console.log(a2)

//program 3
let cities=[["Nagpur","wardha"],["bhopal","indore"],["lucknow","agra"]]
let [[x11,x22],[x44,x55],[x66,x77]]=cities
console.log(x55)

//program 4
let info={
    firstname:"subhuti",
    lastName:"kapse"
}

let {firstname,lastName}=info
console.log(firstname)
console.log(lastName)

let Vehicle={
    color:"black",
    type:"RangeRover"
}
let {color:cl,type:ty}=Vehicle
console.log(cl)
console.log(ty)

//program 4
let info2={
    fullName:"subhuti kapse",
    parent:{
        mother:"shivmala kapse",
        father:"ajay kapse"
    }
}

let {fullName,parent:{mother,father}}=info2
console.log(fullName)
console.log(mother)
console.log(father)


//program 5
let students=[{
    fn:"subhuti",
    ln:"kapse"
},
{
    fn:"sapeksha",
    ln:"singh"

}]

let[{fn:f1,ln:l1},{fn:f2,ln:l2}]=students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

//program 6
let info3={
    firstname:"subhuti",
    lastName:"kapse",
    skills:["python","javascript"]
}
let {firstname:f3,lastName:l3,skills:[sub1,sub2]}=info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)