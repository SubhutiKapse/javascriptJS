let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headOne)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    headOne.textContent = "Sanvi"
    headOne.style.color = "red"
    headOne.style.background  = "green"
})



let info = {
    fullName:"Subhuti",
    parent:{
        mother:"shivmala kapse",
        father:"ajay kapse"
    }
}
info.parent.mother = "shivmala kapse"
info['parent']['mothe'] = "shivmala kapse"