class Person {
        firstName = undefined
        lastName = undefined
        age = undefined
        rollNo = undefined
    }


let subhuti=new Person()
let sapeksha=new Person()
console.log(subhuti)
console.log(sapeksha)

//retrive
console.log(subhuti.firstName)
console.log(subhuti.lastName)
console.log(subhuti.age)
console.log(subhuti.rollNo)


//update
subhuti.firstName="sani"
subhuti.lastName="sani"
subhuti.age="sani"
subhuti.rollNo="sani"

// // .dot notation and bracket notation

// Setting the value at the time of object creation


class PersonS{
    
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName  = ln
        this.age = ag 
        this.rollNo = rollNo
    }
}

let subhutiB=new PersonS("subhuti","kapse",21,334)
console.log(subhutiB)

subhutiB.city="banglore"
console.log(subhutiB)
subhutiB.position="CEO"
console.log(subhutiB)



// Setting the value using get and set methods

class PersonT {
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName  = ln
    }
}


let subhutiC=new PersonT()
console.log(subhutiC)
subhutiC.setFirstName("shubhi")
console.log(subhutiC)
subhutiC.setLastName("sanvi")
console.log(subhutiC)
subhutiC.setAge(21)
console.log(subhutiC)
subhutiC.city="banglore"
console.log(subhutiC)

// set and get keyword

let info = {
    firstName:"subhuti",
    lastName:"kapse"
}
info.firstName = "savi"

class PersonD{

    set Fname(fn){
        this.firstName = fn
    }

    get Fname(){
        return this.firstName
    }

    set Lname(ln){
        this.lastName = ln
    }
    get Lname(){
        return  this.lastName
    }

}
