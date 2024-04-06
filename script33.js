let subhuti={
    firstName:"subhuti",
    lastName:"kapse",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
let veena={
    firstName:"veena",
    lastName:"limje"
}
// let displayName2 = subhuti.displayName

let displayName2 = function(){
    console.log(this.firstName + this.lastName)
}
displayName2()

//bind
//let q1=displayName2.bind(veena)
let q1=function(){
    console.log(veena.firstName + veena.lastName)
}
q1()
//program 2
let sapeksha={  
    firstName:"sapeksha",
    lastName:"singh"

}

let sunita={  
    firstName:"sunita",
    lastName:"chopra"

}

let vinita={  
    firstName:"vinita",
    lastName:"nikant"

}
let displayName3=function(){
    console.log(this.firstName + this.lastName)
}

displayName3.bind(sapeksha)()
displayName3.bind(sunita)()
displayName3.bind(vinita)()

//program 2
//call


let sapekshaA={  
    firstName:"sapeksha",
    lastName:"singh"

}

let sunitaA={  
    firstName:"sunita",
    lastName:"chopra"

}

let vinitaA={  
    firstName:"vinita",
    lastName:"nikant"

}

let displayName4=function(greet){
    console.log(this.firstName + this.lastName)
    console.log(greet)
}
displayName4.call(sapekshaA,"hello")
displayName4.call(sunitaA,"hello")
displayName4.call(vinitaA,"hello")

//apply
displayName4.apply(subhuti,["bye","hi","bye","goodbye" ,"tc"])
