// define array
//array stores the value by index
//how to f=define length of array using .length

let names=["minal","sonal","krupa","shyli"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

let q1=names.length
console.log(q1)


//program 2
let animals=["tiger","lion","cat","leapord"]
console.log(animals)
console.log(animals.length)


for (let i=0;i<=animals.length;i++){
console.log(animals)
console.log(animals[i])}

let NAME=["minal","sonal","krupa","shyli"]
for (let i=0;i<5;i++){
    console.log(i)
}

// programs 3
let ANIMALS=["tiger","lion","cheetah","snake","elephant"]
console.log(ANIMALS)
console.log(ANIMALS[0])
console.log(ANIMALS[1])
console.log(ANIMALS[2])
console.log(ANIMALS[3])
console.log(ANIMALS[4])
console.log(ANIMALS.length)
for(let i=0;i<ANIMALS.length;i++){
    console.log(i)
    console.log(animals[i])
}


//program 4
let fruits=["apple","banana","orange","grapes"]
console.log(fruits)
console.log(fruits.length)

for (let i=0;i<fruits.length;i++){
    console.log(fruits[0])
    console.log(animals[i])
}

//progrm 5
//print elements in reverse
// length -1 is always last index

for (let i=fruits.length;i>=0;i--){
    console.log(fruits[i])
}

//program 6
let wild=["tiger","lion","cheetah","snake","elephant"]
for (let i=0;i<wild.length;i++){
    console.log(i)
    console.log(wild[i])
    if(wild[i]=="snake"){
        break
    }console.log(wild[i])
}

//program 7
let flowers=["rose","lotus","lily","jasmine","champa"]
for (let i=0;i<flowers.length;i++){
    console.log(i)
    console.log(flowers[i])

    if (flowers[i]=="lily"){
        continue
    }
console.log(flowers[i])}


//program 8
let country=["India","sri lanka","bangladesh","afganisthan"]
console.log(country)
let y=0
while (y<country.length){
    console.log(country[y])
}
y=y+1