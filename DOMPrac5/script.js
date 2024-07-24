
//<h1 id = "one" class = "two" name ="three">Subhuti</h1>

let byTagName = document.querySelector('h1')
let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byName = document.querySelector('h1[name="three"]')

console.log(byTagName)
console.log(byId)
console.log(byClass)
console.log(byName)


// udating name 
// console.log(byName.textContent)
// byName.textContent = "Sapeksha"

// updating name on useraction

byClass.addEventListener('click',function(){
    byClass.textContent = "Tanmay"
})














// info = {
//     firstName:"subhuti",
//     lastName:"kapse"
// }

// info.firstName = "sapeksha"