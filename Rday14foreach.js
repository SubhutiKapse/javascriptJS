// let students=[{
//     firstname:"subhuti",
//     lastname:"kapse",
//     age:21,
//     skills:["nodejs","python","javascript"]
// },{
//     firstname:"shruti",
//     lastname:"singh",
//     age:20,
//     skills:["python"]
// },{
//     firstname:"shivani",
//     lastname:"nagarkar",
//     age:25,
//     skills:["sql"]
// },{
//     firstname:"lavi",
//     lastname:"tika",
//     age:30,
//     skills:["cpp","python"]
// }
// ]

// console.log(students[0].firstname)

// //printing all first name

// //using forEach
// students.forEach(function(el){
//     console.log(el.firstname)
// })


// //printing all skills
// students.forEach(function(el){
//     console.log(el.skills)
// })


// // printing  firstName of people age < 30

// students.forEach(function(el){
//     if(el.age <30){
//         console.log(el.firstname)
//     }
// })

// //adding country 
// students.forEach(function(el){
//     el.country ="india"
// })
// console.log(students)


// //print firstname and lastname

// students.forEach(function(el){
//     console.log('${el.firstName)${el.lastName}')
// })


// //print name of students with python skills

// students.forEach(function(el){
//     if(el.skills.includes("python")){
//         console.log(el.firstname)
//     }
// })


// //print name of students with cpp skills

// students.forEach(function(el){
//     if(el.skills.includes("cpp")){
//         console.log(el.firstname)
//     }
// })



// // students.forEach(function(el){
// //     if(el.skills.includes("python") || el.skills.includes("javascript")){
// //         console.log(el.firstName)
// //     }
// // })

// // // name of people with python and sql skill
// // students.forEach(function(el){
// //     if(el.skills.includes("python") || el.skills.includes("sql")){
// //         console.log(el.firstName)
// //     }
// // })

// // //name of people age > 30 and with python skill 
// // students.forEach(function(el){
// //     if(el.age > 30 && el.skills.includes("python")){
// //     console.log(el.firstName)
// //     }
// // })

// //add country = "India" for every object 
// students.forEach(function(el){
//     el.country = "india"
// })
// console.log(students)

// // add html skill to every user

// students.forEach(function(el){
//     el.skills.push("html")
// })
// console.log(students)

////////////////////////////////////////////

let studentsA=[
    {
    firstNamee:"subhu",
    lastNamee:"kapse",
    age:21,
    skills:"html"
},
{
    firstNamee:"shruti",
    lastNamee:"kapse",
    age:3,
    skills:"sql"
},{
    firstNamee:"sani",
    lastNamee:"kapse",
    age:2,
    skills:"js" 
}
]
//retrive
console.log(studentsA[1].firstNamee)

console.log(studentsA[1].lastNamee)


//print all firstname

studentsA.forEach(function(el){
    console.log(el.firstNamee)
})

//print firstname noof skills
studentsA.forEach(function(el){
    console.log('${el.firstName}:${el.skills.length}')
})

//print first name of people age <21
studentsA.forEach(function(el){
    if(el.age<21){
        console.log(el.firstNamee)
    }
})

//adding property india
studentsA.forEach(function(el){
    el.country="India"
})
console.log(studentsA)

//print firstname and lastname
studentsA.forEach(function(el){
    ('${el.firstNamee} + $el.lastNamee}')
})

//print name with sql
studentsA.forEach(function(el){
    if(el.skills.includes("sql")){
        console.log(el.firstNamee)
    }
})




let studentts=[
    {
        firstName:"subhuti",
        lastName:"kapse",
        age:34,
        skills:["python","javascript"],
        city:"banglore"
    },
    {
        firstName:"shruti",
        lastName:"kane",
        age:33,
        skills:["python","sql","power BI"],
        city:"pune"

    },
    {
        firstName:"sami",
        lastName:"tijare",
        age:31,
        skills:["cypress","playwright","selenium"],
        city:"ujjain"

    },
    {
        firstName:"shivani",
        lastName:"nagpure",
        age:33,
        skills:["cypress","playwright","selenium","sql"],
        city:"nagpur"

    }

]

console.log(students[0])
console.log(students[0].firstName)
console.log(students[0]['firstName'])

// program2
students.forEach(function(el){
    console.log(el.firstName)
})

// program 3
// print all firstName and lastName 
students.forEach(function(el){
    console.log(`${el.firstName} ${el.lastName}`)
})

// program 4
// chinmay:numbersOfSkills
students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})
// program 5
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})

// program 6 
// name of people with python skills 

students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})
// name of people with python and sql skill
students.forEach(function(el){
    if(el.skills.includes("python") || el.skills.includes("sql")){
        console.log(el.firstName)
    }
})

//name of people age > 30 and with python skill 
students.forEach(function(el){
    if(el.age > 30 && el.skills.includes("python")){
        console.log(el.firstName)
    }
})

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