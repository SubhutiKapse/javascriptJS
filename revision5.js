// // //revision
// // x=10
// // console.log(x)
// // y=2.3
// // console.log(y)
// // z=true
// // console.log(z)

// // //arithmetic operator
// // let a=10
// // let b=5
// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)
// // console.log(a%b)

// // function Cal(x,y){
// //     console.log(x+y)
// //     console.log(x-y)
// //     console.log(x*y)
// //     console.log(x/y)
// //     console.log(x%y)

// // }
// // Cal(2,7)
// // Cal(3,8)


// // //program 2
// // //function without prameter and without returntype
// // function addA(){
// //     console.log(2+2)
// // }
// // addA()
// // addA()

// // //function with prameter and without returntype
// // function addB(x,y){
// //     console.log(x+y)
// // }
// // addB(2,3)
// // addB(34,5)

// // //function with prameter and with returntype
// // function addC(i,j){
// //     return i+j
// // }
// // let q1=addC(2,4)
// // console.log(q1)

// // //program 3
// // let a1=2
// // console.log(a1)
// // console.log(typeof a1)


// // let a2=true
// // console.log(a2)
// // console.log(typeof a2)

// // let a3="subhuti"
// // console.log(typeof a3)

// //comparison operator
// //===,!==---- comparison between value and type
// //==,!=---value
// console.log(2==='2')
// console.log(2=='2')
// console.log(2!=='2')
// console.log(2!=2)
// console.log(2<2)
// console.log(2>2)
// console.log(2<=21)
// console.log(2>=2)

// //logical opoerator
// //&&
// //||
// //!!

// //&&
// // true && true---true
// // true && false---false
// // false && true---false
// // false && false---false

// console.log(5 == 5 &&  5== 5)
// console.log(5 != 5 &&  5== 5)
// console.log(5 == 5 &&  5!= 5)
// console.log(5 != 5 &&  5!= 5)


// //||

// // true && true---true
// // true && false---true
// // false && true---true
// // false && false---false

// console.log(5 == 5 &&  5== 5)
// console.log(5 != 5 &&  5== 5)
// console.log(5 == 5 &&  5!= 5)
// console.log(5 != 5 &&  5!= 5)


// //!false--true
// //!true--false
// console.log(!(2==2))
// console.log(!(2==='2'))

// //conditional statement
// //one input multiple outcomes

// //if statemnt
// let num=10
// if(num >=2 && num <=11){
//     console.log("10 % discount")
// }
// if(num >=2 && num <=11){
//     console.log("20 % discount")
// }
// if(num >=2){
//     console.log("30 % discount")
// }


// //else if statement
// let numT=100
// if(numT >=2 && numT <=11){
//     console.log("10 % discount")
// }
// else if(numT >=2 && numT <=11){
//     console.log("20 % discount")
// }
// else if(numT >=2){
//     console.log("30 % discount")
// }
// else{
//     ("incorrect input")
// }

// //marks ex
// let marks=50
// if(marks<=60){
//     console.log("A grade")
// }
// if(marks<=60){
//     console.log("B grade")
// }
// if(marks<=60){
//     console.log("C grade")
// }
// let numT1=55
// if(numT1>=30 && numT1<=60){
//     console.log("A grade")
// }
// else if(numT1>=30 && numT1<=60){
//     console.log("A grade")
// }
// else if(numT1>=30 && numT1<=60){
//     console.log("A grade")
// }
// else{
//     console.log("fail")
// }

// let t1=10
// let t2=20
// if(t1>t2){
//     console.log("a is greater")
// }
// if(t2>t1){
//     console.log("b is greater")
// }

// let s1=5
// let s2=10
// let s3=15
// if(s1>s2 && s1>s3){
//     console.log("s1 is greter")
// }
// if(s2>s1 && s2>s3){
//     console.log("s2 is greter")
// }
// if(s3>s1 && s3>s2){
//     console.log("s3 is greter")
// }

// //ternary operator
// let p1=2
// let p2=4
// p1>p2?console.log("p1 is greater"):console.log("p2 is greater")

// age =21
// let a1=age>=12?"can drive":"cannot drive"
// console.log(a1)

// //arithmeric operation
// let a=2
// let b=4
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// function Calculator(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x%y)
// }
// Calculator(2,4)

// //function without parameter and function without returntype
// function add(){
//     console.log(2+2)
// }
// add()
// add()
// //function with parameter and function without returntype


// function addA(x,y){
//     console.log(x+y)
// }
// add(2,4)
// //function with parameter and function with returntype
// function addB(x,y){
//     return x+y
//         }
//         let q1=addB(2,6)
//         console.log(q1)

//         function addC(p1,p2){
//             return p1+p2
//         }
//         let w2=addC(3,4)
//         console.log(w2)









        // //switch case without break statement
// //program 1

// let city="jaipur"
// switch(city){
//     case"pune":
//     console.log("MH")
//     case"jaipur":
//     console.log("RJ")
//     case"bhopal":
//     console.log("MP")
//     default:
//         console.log("incorrect city name")
// }


// //switch case using break statement
// let city2="jaipur"
// switch(city){
//     case"pune":
//     console.log("MH")
//     break
//     case"jaipur":
//     console.log("RJ")
//     break
//     case"bhopal":
//     console.log("MP")
//     break
//     default:
//         console.log("incorrect city name")
// }

// //multiple cases same output
// let city3="nagpur"
// switch(city3){
//     case"pune":
//     case"nagpur":
//     console.log("Maharashtra")
//     break
//     case"bhopal":
//     case"indore":
//     console.log("MadhyaPradesh")
//     break
//     case"jaipur":
//     case"Udaipur":
//     console.log("Rajasthan")
//     break
//     default:
//         console.log("incorrect city name")
// }

// //program 4
// let x1=2
// let x2=4
// let x3=6
// let greater=true
// switch(greater){
//    case  x1>x2 && x1>x3:
//     console.log("x1 is greater")
//     break
//     case x2>x1 && x2>x3:
//         console.log("x2 is greter")
//         break
//         default:
//             console.log("x3 is greter")
// }


// //for loop
// for(let i=1;i<=5;i++){
//     console.log(i)
// }
// //for loop with break
// for(let i=1;i<=6;i++){
//     if(i==3){
//         break

//     }
//      console.log(i)
// }
// //for loop with continue
// for(let i=1;i<=7;i++){
//     if(i==4){
//         continue
//     }
//     console.log(i)
// }
// // //while loop
// let i=1 
// while(i<=5){
//     console.log(i)
//     i++
// }
// // //while loop with break
// let i2=5
// while(i2>=1){
//     if(i2==3){
// break
//     }
// console.log(i2)
// i2=i2-1
// }
// // //while loop with continue
// let i3=1
// while(i3<=10){
//     if(i3==5){
//         i3=i3+1
//         continue
        

//     }
//     console.log(i3)//1//2
// i3=i3+1//2//3
// }

//for loop
// for(let i=2;i<=5;i++){
//     console.log(i)
// }

//for loop with break

//for loop with continue
//while loop
//while loop with break
//while loop with break


x=10
console.log(x)

y=20
console.log(y)

//arithmetic operator
x1=2
y1=4
console.log(x1+y1)
console.log(x1-y1)
console.log(x1*y1)
console.log(x1/y1)
console.log(x1%y1)




//function without parameter and without returntype

function addA(){
    addA(4+2)
}
addA()
addA()
//function with parameter and without returntype
function addB(x,y){
    console.log(x+y)
}
addB(2,4)
addB(4,5)




