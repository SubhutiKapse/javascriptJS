let sita={
    first_name:"sita",
    last_name:"mahalaxmi",
    displayName:function(){
        console.log(this.first_name + last.last_name)
    }
}

let subhuti={
    first_name:"subhuti",
    last_name:"kapse",
    displayName:function(){
        console.log(this.first_name +this.last_name)
    }

}

//program 2
class Person{
    first_name="subhutiS"
    last_name="kapseS"
    displayName(){
        console.log(this.first_name +this.last_name)

        }
    }
let sulbha=new Person()
let Shubhi=new Person()
Shubhi.first_name="subhuti"


//program 3

//constructor
class PersonA{
    constructor(fn,ln){
        this.first_name=fn
        this.last_name=ln
    }
    displayName(){
        console.log(this.first_name +this.last_name)
    }
}
let surbhi=new PersonA("surbhi","chavan")
let sanu=new PersonA("sanu","kalpesh")


//program 4
class PersonB{
    setFirstName(fn){
        this.FirstName=fn
    }
    setLastName(ln){
        this.LastName=ln
    }

    getFirstName(){
        return this.firstName
    }
    getlastName(){
        return this.lastName
}
}

let subhutiB= new PersonB()
subhutiB.setFirstName("subhutiB")
subhutiB.setLastName("kapseB")


//program 5
let info={
    first_name:"sapeksha",
    last_name:"kapseD"
}
info.first_name="shalakha"
info.city="pune"


class PersonT{
    set fn(fn){
        this.firstName=fn
    }
    set ln(ln){
        this.lastName=ln   
    }
    get fn(){
    return this.firstName
    }
    get ln(){
    return this.lastName
    }
}
let shreya=new PersonT()


shreya.fn = "shreya"
console.log(shreya)

console.log(shreya.fn)



// info = {
//     firstName:"chinmay"
// }
// info.first_name = "sarika"
// info.city  = "pune"
// console.log(info.city)
