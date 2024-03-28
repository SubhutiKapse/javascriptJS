class Calculator {
    addition(x,y){
        console.log(x+y)
    }
    addition(x,y,z){
        console.log(x+y+z)
    }
    addition(x,y,z,a){
        console.log(x+y+z+a)
}

addition(x,y,z,a){
    if(x != undefined && y !=undefined && z !=undefined && a !=undefined){
        console.log(x+y+z+a)
    }
else if (x != undefined && y !=undefined && z !=undefined ){
    console.log(x+y+z)
}
else if(x != undefined && y !=undefined){

}
}
}

a=new Calculator()
a.addition(134,5)
a.addition(23,4,5)
a.addition(223,44,5,7)

console.log(undefined+ 3)
console.log(undefined+"add")

//method overrriding
//different class,same method name,same signature
class WorldBank{
    save(){
        console.log("I am save method from worldbank")
    }
    loan(){
        console.log("I am loan method from PNB")
    }

}
class SBI extends WorldBank{
    save(){
        console.log("I am save method from SBI")
    }
    loan(){
        console.log("I am loan method from PNB")
    }

}
class PNB extends WorldBank{
    save(){
        console.log("I am save method from PNB")
        super.save()
    }
    loan(){
        console.log("I am loan method from PNB")
        super.loan()
    }

}
let nagpur=new SBI()
nagpur.save()
nagpur.loan()

let nagpurB=new PNB()
nagpurB.loan()
nagpurB.save()