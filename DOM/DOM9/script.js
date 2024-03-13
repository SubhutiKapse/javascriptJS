let buttonOne=document.querySelector('#one')
let inputText=document.querySelector('input')
let ulList=document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text=inputText.value
    let newLi=document.createElement('li')
    newLi.textContent=text

   createButton("Remove",'remove',newLi)
   createButton("Up",'up',newLi)
   createButton("Down",'down',newLi)

   //CreateButton(newLi)
   ulList.appendChild(newLi)
   inputText.value=''
})

function createButton(textContent,className,li){
    let newButton=document.createElement('button')
    newButton.textContent=textContent
    newButton.classList.add(className)
    li.appendChild(newButton)
}

// function CreateButtons(li){
//     let y = document.createElement('button') // <button></button>
//     y.textContent = "Remove" // <button>Remove</button>
//     y.classList.add('remove') // <button class = "remove">Remove</button>
//     li.appendChild(y)

//     let u = document.createElement('button')  // <button></button>
//     u.textContent = "Up"  // <button>Up</button>
//     u.classList.add('up') // <button class = "up">Up</button>
//     li.appendChild(u)

//     let d = document.createElement('button')  // <button></button>
//     d.textContent ='Down' // <button>Down</button>
//     d.classList.add('down') // <button class = "down">Down</button>
//     li.appendChild(d)
// }