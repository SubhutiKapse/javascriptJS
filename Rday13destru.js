//DESTRUCTING

let cities=["nagpur","pune","mumbai","banglore"]
let [p1,p2,p3,p4]=cities
console.log(p1)

let companies=["accenture","tcs","infyosis","pwc"]
console.log(companies)
console.log(typeof(companies))
let [t1,t2,t3,t4]=companies
console.log(t1)
console.log(t2)
console.log(t3)
console.log(t4)


let animal=["tiger","lion","cheetah","horse"]
let [w1,w2,w3,w4]=animal
console.log(w1)
console.log(w2)
console.log(w3)
console.log(w4)


//nested array

let states = 
[["Nagpur","Mumbai"],["Kanpur","Lucknow"],["Jaipur","Udaipur"]]
let [[k1,k2],[k3,k4],[k5,k6]] = states
console.log(k1)
console.log(k2)
console.log(k3)




let num=[[11,22,33],[44,55,66],[77,88,99]]
console.log(num[1][1])
console.log(num[0][2])
console.log(num[2][2])

let [[a1,a2,a3],[b1,b2,b3],[c1,c2,c3]]=num
console.log(a1)
console.log(a1,a2,a3,b1,b2,b3,c1,c2,c3)




//with object
let person={
    firstname:"subhuti",
    lastname:"kapse",
    rollno:11163
}
let{firstname,lastname,rollno}=person
console.log(firstname)
console.log(lastname)

let {firstname2:f1,lastname2:l1}=person
console.log(f1)
console.log(l1)

let vehicle={
    color:"red",
    wheel:4
}
let{color:cl,wheel:wl}=vehicle
console.log(cl)
console.log(wl)


//nested object

// let info={
//     firstname1:"sapeksha",
//         family:{
//         father:"kamlesh",
//     mother:"jhilmil"
//         }
//     }
    
  
let studentss = [
    {
        firstName:"subhuti",
        lastName:"kapse"
    },
    {
        firstName:"sapeksha",
        lastName:"singh"
    }

]

let [{firstName:q1,lastName:r1},{firstName:q2,lastName:r2}] = studentss
console.log(q1)
console.log(r1)
console.log(q2)
console.log(r2)



