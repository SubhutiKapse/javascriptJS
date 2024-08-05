let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let comP = inputT.value
    let newE = document.createElement('li') 
    newE.textContent = comP 
    ulList.appendChild(newE)
    inputT.value = ""
})