class StudentA{
    firstName="subhuti"
    lastName="kapse"
    adharNo=11623

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
class TeacherA{
    firstName="sapeksha"
    lastName="singh"
    adharNo=13475
    salary=100000

    displayName(){
        console.log(this.firstName + this.lastName)
    }
    displaySalary(){
        console.log(this.firstName + this.lastName)
    }
    displaySalary(){
        console.log(this.salary)
    }
}
//program 2
class StudentB{
    firstName="subhutiA"
    firstName="kapseA"
    adharNo=4789

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherB extends StudentB {
    
            salary = 1000

            displaySalary(){
                console.log(this.salary)
             }
        
        }
    let kavita=new TeacherB()


    //program 3

    //single inheritance

class  StudentC {

    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln
        this.adharNo = adharNo
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class TeacherC extends StudentC {
    salary = 100000
    displaySalary(){
        console.log(this.salary)
    }

}


let sanvi = new TeacherC("sanvi","thakur",9765)
console.log(sanvi.firstName)
console.log(sanvi.lastName)
console.log(sanvi.adharNo)
console.log(sanvi.salary)
sanvi.displayName()
sanvi.displaySalary()
