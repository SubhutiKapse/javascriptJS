//object---properties and methods

let info =["subhuti","kapse",21,534]
let subhuti={
    //keys:values
    //property:values
    fistname:"subhuti",
    lastname:"kapse",
    age:34,
    rollno:534
}
console.log(subhuti)
//retrive (dot notation and bracket notation)
console.log(subhuti.fistname)
console.log(subhuti['firstname'])
//update (dot notation and bracket notation)
subhuti.lastname="singh"
subhuti['lastname']="raisingh"
//add 
subhuti['language']="marathi"
subhuti.city="pune"
console.log(subhuti)
//delete
delete subhuti.firstname
delete subhuti['lastname']

vehicle={
    color:"black",
    type:"Rangerover"
}

//retrive  //update //add //delete
console.log(vehicle.color)
vehicle.color="white"
vehicle.regno=123
delete vehicle.color

//bracket notation
console.log(vehicle['color'])
vehicle['color']="blue"
vehicle['regno']=123
delete vehicle['regno']


// //
// let names= ["subhuti","shruti","shalakha","shyli"]
// for( let i=0;i< names.length; i++){
//     console.log(i)
//     console.log(names[i])
// }


// for (let i= names.length -1 ; i > -1 ;i++){
//     console.log(names[i])
//     console.log(i)
// }

let kamlesh ={
    //property:values
firstname:"sapeksha",
lastname:"singh",
age:21,
rollno:213
}
console.log(kamlesh['firstname'])
for(let prop in kamlesh){
    console.log(prop,kamlesh[prop])
}


let students=[
    {
      firstname:"subhuti",
      lastname:"kapse",
      age:23
    },
    {
        firstname:"subhuti",
        lastname:"kapse",
        age:23
    },
    {
        firstname:"subhuti",
      lastname:"kapse",
      age:23

    }
]

console.log(students[2].firstname)


//
let students1=[
    {
        firstname:"subhuti",
        lastname:"kapse",
        age:21,
        skills:["python","js","css","html"],
        city:"pune"
    },
    {
        firstname:"sapeksha",
        lastname:"vijaya",
        age:22,
        skills:["python","js","css","html"],
        city:"pune"
    },
    {
        firstname:"shanu",
        lastname:"mishra",
        age:23,
        skills:["python","js","css","html"],
        city:"hyderabad"
    },
    {
        firstname:"shalakha",
        lastname:"mishra",
        age:24,
        skills:["python","js","css","html"],
        city:"banglore"
    }
]
//firstname of all students
console.log(students[1].firstname)
for (let i=0;i<students1.length;i++){
console.log(students1[i].firstname)
}

//students1 with pune
for (let i=0;i<students1.length;i++){
    if (students1[i].city==="pune"){
        console.log(students1[i].firstname)
    }
}

//student in pune and age above 30
for (let i=0;i<students1.length;i++){
    if (students1[i].age >30 && students1[i].city==='pune'){
   console.log(students1[i].firstname)
    }
}

//add css skills to every students
for(let i=0;i<students1.length;i++){
    students1[i].skills.push("css")
}
console.log(students1)

//name:no of skills
for (let i=0;i<students1[i];i++){
    console.log(students1[i].firstname+":"+ students1[i].skills.length)
}


//average age of all students

let a1=students1.reduce(function(acc,el){
    return el.age + acc
},0)
console.log(a1/students.length)



let class =[ 

    {
       firstName:"subhuti",
       lastName:"kapse",
       age:21,
       skills:["python","js","css","html"],
       city:"nagpur"
    },
    {
        firstName:"shimla",
        lastName:"upadhyah",
        age:22,
        skills:["python","js","css","html"],
        city:"pune"
    },
    {
        firstName:"savan",
        lastName:"deshmukh",
        age:23,
        skills:["python","js","css","html"],
        city:"banglore"
    },
]

//firstname of all students
// for (let i=0;i< class.length;i++){
//     console.log(class.length.firstName)
// }


for ( let i=0;i<class.length;i++){
    console
}