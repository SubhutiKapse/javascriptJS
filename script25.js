//inheritance
//program 1
class Student{
    firstName="subhuti"
    lastName="kapse"

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student{
    salary =1000
    displaySalary(){
        console.log(this.salary)
    }
}
subhutiT=new Teacher()
console.log(subhutiT.firstName)
console.log(subhutiT.lastName)
console.log(subhutiT.salary)
subhutiT.displayName()
subhutiT.displaySalary()


//program 2
class StudentS{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
class TeacherT extends Student{
    salary=1000
    displaySalary(){
        console.log(this.salary)
    }
}

let SubhutiQ=new TeacherT("sanu","rathode")
console.log(SubhutiQ.firstName)
console.log(SubhutiQ.lastName)
console.log(SubhutiQ.salary)
SubhutiQ.displayName()
SubhutiQ.displaySalary()


// program 3

class StudentB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherB extends StudentB {
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let sanvi = new TeacherB("sanvi","shameer",100000)
console.log(sanvi.firstName)
console.log(sanvi.lastName)
console.log(sanvi.salary)

sanvi.displaySalary()
sanvi.displayName()

// program 4

class StudentC {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class TeacherC extends StudentC {

    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}

class Professor extends TeacherC {

    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }

    displaySpec(){
        console.log(this.specialization)
    }

}

let pro = new Professor("subhutiA","kapseA",21,11163)
console.log(pro.firstName)
console.log(pro.lastName)
console.log(pro.salary)
console.log(pro.specialization)
pro.displayName()
pro.displaySalary()
pro.displaySpec()