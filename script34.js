let subhuti={
    firstName:"subhuti",
    lastName:"kapse",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let krishna={
    firstName:"krishna",
    lastName:"das"
}
//let displayName2=subhuti.displayName

let displayName2=function(){
    console.log(this.firstName + this.lastName)
}
displayName2()

//bind 

let q =displayName2.bind(krishna)
let q2= function(){
    console.log(krishna.firstName + krishna.lastName)
}
q()

//program 2
let sapeksha ={
    firstName:"sapeksha",
    lastName:"singh"
}
let sanvi ={
    firstName:"sanvi",
    lastName:"tika"
}
let megha ={
    firstName:"megha",
    lastName:"das"
}
let displayName3=function(){
    console.log(this.firstName + this.lastName)
}
displayName3.bind(sapeksha)()
displayName3.bind(sanvi)()
displayName3.bind(megha)()



//program 2 call


let sapekshaA ={
    firstName:"sapekshaA",
    lastName:"singh"
}
let sanviA ={
    firstName:"sanviA",
    lastName:"tika"
}
let meghaA ={
    firstName:"meghaA",
    lastName:"das"
}
let displayName4 =function(a){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}
displayName4.call(sapekshaA,"hello")
displayName4.call(sanviA,"hello")
displayName4.call(meghaA,"hello")