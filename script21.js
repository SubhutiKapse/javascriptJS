//object literal
let subhuti={
    firstName:"subhuti",
    lastName:"kapse",
    age:21,
    rollno:11163
}

let sapeksha={
    firsttName:"sapeksha",
    lasttName:"singh",
    aage:22,
    rollno:121
}

//100----400 lines
//Es6 class
class Person{
    first_name="subhuti"
    last_name="kapse"
    Age=23
    Rollno=54

    display_name(){
        console.log(this.first_name+this.last_name)

    }

}

let sapeksha2=new Person()
let subhuti2=new Person()

console.log(sapeksha2.first_name)
console.log(sapeksha2.last_name)
console.log(sapeksha2.Age)
console.log(sapeksha2.Rollno)
console.log(sapeksha2)
sapeksha2.display_name()


sapeksha2.first_name="sapeksha1"
sapeksha2.last_name="kapse1"
sapeksha2.age=21
sapeksha2.Rollno=132
console.log(sapeksha2)

//program 3
//Es6 class with constructor
class PersonQ{
    constructor(fn,ln,age,rollno){
        this.firstName=fn
        this.lastName=ln
        this.rollno=rollno
        this.age=age
    }
    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}
let sapekshaA=new Person("sapekshaQ","kapseQ",23,4)
let shyli=new Person("shyli","singh",34,45)
shyli.city="pune"
console.log(shyli)


// for(let key in shyli){
//     console.log(key,shyli[key])
// }

// for(let key in Object.keys(shyli)){
//     console.log(key)
// }

// for (let val in Object.values(shyli)){
//     console.log(val)
// }

// for(let [k,v] in Object.entries(shyli))[
//     console.log(k,v)
// ]

