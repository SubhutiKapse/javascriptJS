let students = [
    {
        firstName: "subhuti",
        lastName: "kapse",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sharvari",
        lastName: "sudha",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "aditi",
        lastName: "nagarkar",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "madhura",
        lastName: "tripathi",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }

]
// firstName of all students
for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName)
}

students.forEach(function(el){
    console.log(el.firstName)
    console.log(el['firstName'])
})

// student with pune city

for(let i = 0 ; i < students.length ; i++){
    if(students[i].city == "pune"){
        console.log(students[i].firstName)
    }
}
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})
let r1 = students.filter(function(el){
    return el.city == "pune"
})

console.log(r1)
r1.forEach(function(el){
    console.log(el.firstName)
})

// students.filter(function(el){
//     return el.city == "pune"
// }).forEach(function(el){
//     console.log(el.firstName)
// })

//student in pune and age above 30
students.forEach(function(el){
    if(el.city == "pune" &&  el.age > 30){
        console.log(el.firstName)    
    }
})

// add css skill to every student
students.forEach(function(el){
    el.skills.push("css")
})

let r2 = students.map(function(el){
    el.skills.push("html5")
    return el
})
console.log(r2)

// name:numberofSkills
students.forEach(function(el){
    console.log(el.firstName + ":"+el.skills.length)
})
// average age of all students

let total = 0
for(let i = 0 ; i < students.length ; i++){
    total = total + students[i].age
}
console.log(total/students.length)

let q2 = students.reduce(function(acc,el){
    return acc  + el.age
},0)
console.log(q2/students.length)