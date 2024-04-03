let subhuti={
    firstName:"subhuti",
    lastName:"kapse",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(subhuti.firstName)
console.log(subhuti.lastName)
subhuti.displayName()

//function constructor

function Person(fn,ln){
         this.firstName = fn 
    this.lastName = ln
          this.displayName = function(){
              console.log(this.firstName + this.lastName)
        }
    
    }
    let subhutiA = new Person("subhutiA","kapseA")
    let Sapeksha = new Person("sapeksha","singh")
    console.log(subhutiA)
    console.log(Sapeksha)
    
     // every object has __proto__ === Parent.protype
    
    console.log(subhutiA.__proto__ === Person.prototype)
    console.log(Sapeksha.__proto__ === Person.prototype)
    Person.prototype.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
    Person.prototype.city = "pune"
    
    subhutiA.displayName()
    Sapeksha.displayName()
    
    console.log(subhutiA instanceof Person)
    console.log(Sapeksha instanceof Person)
    
    console.log(subhutiA.hasOwnProperty('firstName'))
    console.log(subhutiA.hasOwnProperty('lastName'))
    console.log(subhutiA.city)
    console.log(Sapeksha.city)
    
    
    let names = ["sanu","shyli"]
    console.log(names)
    console.log(names.__proto__ === Array.prototype)
    names.pop()
    
    // Es6 class 
    
    class PersonA {
        //country = "india"
        constructor(fn,ln){
            this.firstName = fn 
            this.lastName = ln
            // this.displayName = function(){
            //     console.log(this.firstName + this.lastName)
            // }
        }
    
        displayName(){
            console.log(this.firstName + this.lastName)
        }
    }
    
    let sanvi = new Person("sanvi","deshmukh")
    let shyli = new Person("shyli","war")
    console.log(sanvi)
    console.log(shyli)
    sanvi.displayName()
    shyli.displayName()
    
    // Object.create()
    let info = {
        init:function(fn,ln){
            this.firstName = fn 
            this.lastName = ln
        },
        displayName(){
            console.log(this.firstName + this.lastName)
        }
    }
    let sapekshaQ = Object.create(info)
    console.log(sapekshaQ)
    sapekshaQ.init("soniya","binz")
    sapekshaQ.displayName()