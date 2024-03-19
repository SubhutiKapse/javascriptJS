//program 1
let tagName=document.querySelector('h1')
let idName=document.querySelector('#one')
let idName2=document.querySelector('one')
console.log(idName)
console.log(idName2)

//program 2
let liList=document.querySelectorAll('li')
console.log(liList)
let liList2=document.getElementsByTagName('li')
console.log(liList2)
//program 3
let className=document.querySelectorAll('.fruits')
console.log(className)
let className2=document.getElementsByClassName('fruits')
console.log(className2)
//program 4
let byAttr=document.querySelectorAll('li[name="nm"]')
console.log(byAttr)
let byAttr2=document.getElementsByName('nm')
console.log(byAttr2)