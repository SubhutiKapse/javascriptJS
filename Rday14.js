let students=[{
    firstname:"subhuti",
    lastname:"kapse",
    age:21,
    skills:["nodejs","python","javascript"]
},{
    firstname:"shruti",
    lastname:"singh",
    age:20,
    skills:["python"]
},{
    firstname:"shivani",
    lastname:"nagarkar",
    age:25,
    skills:["sql"]
},{
    firstname:"lavi",
    lastname:"tika",
    age:30,
    skills:["cpp","python"]
}
]

console.log(students[0].firstname)

//printing all first name

//using forEach
students.forEach(function(el){
    console.log(el.firstname)
})


//printing all skills
students.forEach(function(el){
    console.log(el.skills)
})


// printing  firstName of people age < 30

students.forEach(function(el){
    if(el.age <30){
        console.log(el.firstname)
    }
})

//adding country 
students.forEach(function(el){
    el.country ="india"
})
console.log(students)


//print firstname and lastname

students.forEach(function(el){
    console.log('${el.firstName)${el.lastName}')
})


//print name of students with python skills

students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstname)
    }
})


//print name of students with cpp skills

students.forEach(function(el){
    if(el.skills.includes("cpp")){
        console.log(el.firstname)
    }
})



// students.forEach(function(el){
//     if(el.skills.includes("python") || el.skills.includes("javascript")){
//         console.log(el.firstName)
//     }
// })

// // name of people with python and sql skill
// students.forEach(function(el){
//     if(el.skills.includes("python") || el.skills.includes("sql")){
//         console.log(el.firstName)
//     }
// })

// //name of people age > 30 and with python skill 
// students.forEach(function(el){
//     if(el.age > 30 && el.skills.includes("python")){
//     console.log(el.firstName)
//     }
// })

//add country = "India" for every object 
students.forEach(function(el){
    el.country = "india"
})
console.log(students)

// add html skill to every user

students.forEach(function(el){
    el.skills.push("html")
})
console.log(students)