let ilList=document.querySelector('ul')
let inputE=document.querySelector('input')
let buttonOne=document.querySelector('#one')

buttonOne.addEventListener('click',function(){
    let fruitText=input.value
    let newLi=document.createElement('li')
    newLi.textContent=fruitsText
    createButton(newLi)
    ulList.appendChild(newLi)
    input.value=""
})

ulList.addEventListener('click',function(event){
    console.log(event.target)
    console.log(event.target.tagName)
    console.log(event.target.className)
    if(event.target.tagName=="BUTTON"){
        if(event.target.className=="remove"){
        }
        else if(event.target.className=="up"){
        
            }
        else if(event.target.className=="up"){
        }
    }
})
function createButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" //<button>Remove</button>
    r.classList.add('remove') //<button class = "remove">Remove</button>
    li.append(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.append(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.append(d)



}