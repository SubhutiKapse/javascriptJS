//program 1
class Student {
        constructor(fn,ln,ad){
            this.firstName = fn
             this.lastName = ln
             this.adharNo = ad
    
         }
    
         displayName(){
             console.log(this.firstName + this.lastName)
         }
     }
    
     class Teacher extends Student {
    
         constructor(fn,ln,ad,sl){
            super(fn,ln,ad)
             this.salary = sl
    }
    
         displaySalary(){
             console.log(this.salary)
         }
}
let chinmayT = new Teacher("chinmay","deshpade",23,55)

//program 2
//multilevel
class StudentW {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherW extends StudentW {
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}
class ProfessorW extends TeacherW {

    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }

    displaySpecialization(){
        console.log(this.specialization)
    }
}

let avanti = new ProfessorW("avanti",'sathe',100000,"maths")
console.log(avanti.firstName)
console.log(avanti.lastName)
console.log(avanti.salary)
console.log(avanti.specialization)

avanti.displayName()
avanti.displaySalary()
avanti.displaySpecialization()