// //INHERITANCE
// //single
// //multi level
// //hierarchical

// class Student{
//     constructor(fn,ln){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student{
//     salary=2000000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let subhutiA=new Teacher("subhuti","kapse")
// console.log(subhutiA.firstName)
// console.log(subhutiA.lastName)
// console.log(subhutiA.salary)
// subhutiA.displayName()
// subhutiA.displaySalary()







// //////////////////////////////////
// //program 2

// class StudentB{
//     constructor(fn,ln){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     displaySalary(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class TeacherB extends StudentB{
//     constructor(fn,ln,salary){
//         super(fn,ln)
//         this.salary = salary
// }
//     displaySalary(){
//     console.log(this.salary)
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let subhuti=new TeacherB("subhuti","kapse",20000)
// console.log(subhuti.firstName)
// console.log(subhuti.lastName)
// console.log(subhuti.salary)


// subhuti.displayName()
// subhuti.displaySalary()



//multi level


class GrandFather {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayGName(){
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }

    displayFname(){
        console.log(this.fname + this.lastName)
    }
}

class Daughter extends Father{
    constructor(fn,ln,ffn,ddn){
        super(fn,ln,ffn)
        this.sname = ddn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}

let subhutiB = new Daughter("veer","kapse","ajay","subhu")

console.log(subhutiB.firstName)
console.log(subhutiB.lastName)
console.log(subhutiB.fname)
console.log(subhutiB.sname)

subhutiB.displayFname()
subhutiB.displayGName()
subhutiB.displaySname()




// class HelloWorld {
    //     public static void main(String[] args) {
    //         System.out.println("Try programiz.pro");
    //         // polymorphism -- overloading 
    //         // same class , same methodname , different signature
    //         addition(12,3);
    //         addition(12,3,3);
    //         addition(12,3,3,3);
            
    //     }
        
    //     public static void addition(int x , int y){
    //           System.out.println(x+y);  
    //     }
    //     public static void addition(int x , int y ,int z){
    //           System.out.println(x+y+z);  
    //     }
    //     public static void addition(int x , int y ,int z , int a){
    //           System.out.println(x+y+z+a);  
    //     }
        




// program 3

class Human {
    talk(){
        console.log("hello hi")
    }
}
class Duck {
    talk(){
        console.log('quack quack')
    }
}

class Dog {
    bark(){
        console.log("bow bow")
    }
}

function call_talk(obj){
    obj.talk()
}
aa = new Human()
bb = new Duck()
cc = new Dog()

call_talk(aa)
call_talk(bb)
call_talk(cc)



// program 2
// Different class , same method name and same signature
class WorldBank {
    save(){
        console.log("save - worldBank")
    }
    loan(){
        console.log("loan - worldbank")
    }
}
class SBI extends WorldBank {
    save(){
        console.log("save -SBI 10%")
    }
    loan(){
        console.log("loan -SBI 10%")
    }

}
let sbiNagpur = new SBI()
sbiNagpur.loan()
sbiNagpur.save()



/////////////////////////////////////////////////////////////////


// function declartion

function addition(x, y) {
    return x + y
}

let a = addition(12, 4)
console.log(a)

// function expression 

let addition2 = function (x, y) {
    return x + y
}
let a2 = addition2(23, 4)
console.log(a2)

// arrow function

let addition3 = (x, y) => {
    return x + y
}
let q3 = addition3(23, 4)
console.log(q3)

// if only 1 statement 

let addition4 = (x, y) => x + y
let q4 = addition4(3, 4)
console.log(q4)

// if only one statement one parameter
let addition5 = x => x + x
let q5 = addition5(3)
console.log(q5)

// lexical scope

function addition() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addition2() {
        let c = 8
        let d = 4
        console.log(a + b )

        function addition3() {
            let e = 19
            console.log(a + b + c + d + e)
        }
        addition3()
    }

    addition2()
}
addition()

// closures

// function greet(){
//     return function(){
//         console.log("hello")
//     }
// }
// let q1 = greet()
// console.log(q1)

// function addition(){
//     console.log(9+9) // 18
//     return 9+9
//     console.log("bye")
// }
// let q2 = addition()
// console.log(q2) // 18

function additionD(){
    let a = 10 
    let b = 5
    return function(){
        console.log(a+b)
    }
}
let r1 = additionD()

// let r1 = function(){
//     console.log(a+b)
// }

r1()




