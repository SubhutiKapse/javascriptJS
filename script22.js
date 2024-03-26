//object literal 

let sanu = {
    firstName:"sanu",
    lastName:"rokde",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let ram = {
    firstName:"ram",
    lastName:"kumar",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}


class Person {
    first_name  = "sangeeta"
    last_name = "deshpande"

    displayName(){
        console.log(this.first_name + this.last_name)
    }
}
let kamlesh =  new Person()
let sujata =  new Person()
console.log(sujata)
kamlesh.first_name = "kamlesh"
kamlesh.last_name = "rao"


//program 2
class PersonB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let shiva = new PersonB("shiva","chaubey")
let satya = new PersonB("satya","kumar")
shiva.displayName()
satya.displayName()




//get and set method     
class PersonC {
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }

    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let subhuti=new PersonC()
console.log(subhuti)
subhuti.setFirstName("subhuti")
subhuti.setLastName("kapse")
let q1=subhuti.getFirstName()
let q2=subhuti.getLastName()
console.log(q1)
console.log(q2)


let sapeksha= new PersonC()
sapeksha.setFirstName("sapeksha")
sapeksha.setLastName("singh")