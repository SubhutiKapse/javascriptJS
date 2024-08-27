// program 1
class Person {
    firtName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

    displayName(){
        console.log(this.firtName + this.lastName)
    }

}

let subhuti = new Person()
console.log(subhuti.firstName)
console.log(subhuti.lastName)
console.log(subhuti.age)
console.log(subhuti.rollNo)
subhuti.displayName()

subhuti.firstName  = "subhuti"
subhuti.lastName  = "kapse"
subhuti.age  = 34
subhuti.rollNo  = 55

// program 2
// constructor


class PersonB {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let subhuti2 = new PersonB("subhuti2","kapse2",21,2222)
console.log(subhuti2.firstName)
console.log(subhuti2.lastName)
console.log(subhuti2.rollNo)
console.log(subhuti2.age)
subhuti2.displayName()

// Es6 class with set method

class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
}
let subhuti3 = new PersonC()
console.log(subhuti3)
subhuti3.setAge(25)
subhuti3.setLastName("subhuti3")
subhuti3.setFirstName("kapse3")
subhuti3.setRollNo(1115)
console.log(subhuti3)

// Es6 class with set and get keyword 


class PersonD {
    set Fname(fn){
        this.firstName = fn
    }
    set Lname(ln){
        this.lastName = ln
    }
    get Fname(){
        return this.firstName
    }

    get Lname(){
        return this.lastName
    }
}

let subhuti4 = new PersonD()
subhuti4.Fname ="subhuti4"
subhuti4.Lname = "kapse4"
console.log(subhuti4.Fname)
console.log(subhuti4.Lname)

// Es6 class Bank example

class Bank {

    constructor(fullN, accNo ,bal){
        this.fullName = fullN
        this.accNo = accNo
        this.balance = bal
        this.transactions = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transactions.push(amt)
        return this.balance
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt
            this.transactions.push(-amt)
            return this.balance
         }
        else {
            console.log('Insufficient amount :'+this.balance)
        } 
    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }


}

let subhutiA = new Bank("subhuti kapse","12",1000)
subhutiA.withdrawl(500)
subhutiA.deposit(500)
subhutiA.withdrawl(5)
subhutiA.deposit(50)
subhutiA.withdrawl(2)
subhutiA.deposit(5)
subhutiA.withdrawl(5)
subhutiA.deposit(5000)

q1 = subhutiA.lastFiveTransactions()
console.log(q1)

////////////////////////////////////////////


// Es6 class and object

class PersonA {

    firstName = undefined
    lastName = undefined
    age = undefined

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let subhutiV = new PersonA()
let sapeksha = new PersonA()
console.log(subhutiV.firstName)
console.log(subhutiV.lastName)
console.log(subhutiV.age)
subhutiV.firstName = "subhuti"
subhutiV.lastName = "kapse"
subhutiV.age = 23
subhutiV.displayName()

sapeksha.firstName = "sapeksha"
sapeksha.lastName = "sigh"
sapeksha.displayName()

// program 2

class PersonN {

    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}
let sapekshaA = new PersonN("sapeksha","singh",23)
sapekshaA.displayName()




// program 3
// with set methods 


class PersonL {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
}

let sani = new PersonL()
console.log(sani)
sani.setFirstName("sani")
sani.setLastName("roy")
sani.setAge(12)
console.log(sani)

// program 4
// with set and get keyword 


class PersonK {

    set Fname(fn){
        this.firstName = fn
    }

    get Fname(){
        return  this.firstName
    } 

    set Lname(ln){
        this.lastName = ln 
    }

    get Lname(){
        return this.lastName
    }

}

let shruti = new PersonK()
shruti.Fname = "shruti"
shruti.Lname = "kapse"
console.log(shruti.Fname)
console.log(shruti.Lname)


// program 5 
// Bank class

class BankA {

    constructor(fullName,acc,bal){
        this.fullName = fullName
        this.account = acc
        this.balance = bal
        this.transactions = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transactions.push(amt)
        return this.bal
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt 
            this.transactions.push(-amt)
            return this.balance
        }
        else {
            console.log(`Insufficient balance : ${this.balance}`)
        }


    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }


}
let subhutiT = new Bank("subhutiT","kapseT",21,516)
subhutiT.withdrawl(100)
subhutiT.deposit(200)
subhutiT.deposit(2000)
subhutiT.deposit(2000)
subhutiT.deposit(20000)
subhutiT.deposit(200000)
subhutiT.withdrawl(1000)
console.log(subhutiT.lastFiveTransactions())