let headOne = document.querySelector('h1')
let buttonA = document.querySelector('button')

//  <h1>Subhuti</h1>
//

buttonA.addEventListener('click',function(){
    headOne.style.color = "green"
    headOne.style.backgroundColor = "yellow"
    headOne.textContent = headOne.textContent.toUpperCase()

})

//console.log(headOne.textContent)
//headOne.textContent = "Sapeksha"
//headOne.textContent = headOne.textContent.toUpperCase()