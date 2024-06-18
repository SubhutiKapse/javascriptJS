// program 1
console.log("hello")



// program 2

var firsName = "subhuti"
var lastName = "kapse"
//console.log(window.firstName)
//console.log(window.lastName)

let sonu = {
    firsName:"sonu",
    lastName:"raj",
    displayName:function(){
        // this --- sonu
        console.log(this.firsName + this.lastName) // sonuraj
        let displayName2 = function(){
            // this ---> window
            console.log(this.firsName + this.lastName) // subhutikapse
        }
        displayName2()
    }
}
sonu.displayName()


//program 2
let raj = {
    firsName:"raj",
    lastName:"thakur",
    displayName:function(){
        // this --- raj
        console.log(this.firsName + this.lastName) // rajthakur
        let displayName2 = () =>{
            // this - raj
            console.log(this.firsName + this.lastName) // rajthakur
        }
        displayName2()
    }
}
raj.displayName()





let  kamlesh = {
    firsName:"kamlesh",
    lastName:"kumar",
    displayName:()=>{
        // this --- window
        console.log(this.firsName + this.lastName) // 
        let displayName2 = () =>{
            // this - window
            console.log(this.firsName + this.lastName) // 
        }
        displayName2()
    }
}
kamlesh.displayName()