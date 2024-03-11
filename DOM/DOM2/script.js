//<h1 id="one"class="two" name="nm">Hello</h1>
//tagName
let q1=document.querySelector('h1')
console.log(q1)
//id
let q2=document.querySelector('#one')
console.log(q2)
//class
let q3=document.querySelector('.two')
console.log(q3)
//attribute
let q4=document.querySelector('h1[id="one"]')
console.log(q4)

byAttribute.addEventListner('click',function(){
    byAttribute.textContent="bye"
    byAttribute.style.color="blue"
    byAttribute.style.backgroundColor="yellow"
})

//console.log(byAttribute.textContent)
//byAttribute.textContent="bye"
//let info={
   // firstName:"subhuti",
// lastName:"kapse"
//}
let info={
    fullname:"subhuti kapse",
    parent:{
        mother:"shivmala kapse",
        father:"ajay kapse"
    }
}
console.log(info.parent.father)
info.parent.father="ajay m kapse"