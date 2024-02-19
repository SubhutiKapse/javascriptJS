let x=10
console.log(x)

let t=1239
console.log(t)

//arithmetic operations

q=12
r=34
console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

//function without parameter and without returntype
function addA(){
    console.log(9+9)
    
}
addA()


// function with parameter and without returntype
function addB(x,y){
console.log(x+y)
}
addB(7,6)

//function with parameter and with returntype
function addC(a,b){
    return a+b
    
}q1=addC(8,2)
console.log(q1)

let n=987
console.log(n)
console.log(typeof n)

let o=12.34
console.log(o)
console.log(typeof o)

p="subhuti"
console.log(p)
console.log(typeof p)


//comparision operator
//<,>,<=,>=,==.!=
console.log(10<109)
console.log(10>=109)
console.log(10<=109)
console.log(10==109)
console.log(10!=109)

//for loop
for (let i1=10;i1<=17;i1++){
    console.log(i1)
 }

for (let i=2;i<=5;i++){
    console.log(i)
}

for (let s=10;s>=1;s--){
    console.log(s)
}
//for loop with break statement
for (let aq=1;aq<=7;aq++){//2
    console.log(aq)//1//2
    if (aq==3){
        break
    }
}

for (let e=2;e<=9;e++){//3
    if (e==6){
        break
    }console.log(e)//2
}

//continue statement with loop
for (let y=1;y<=6;y++){
    if (y==3){
        continue
    }console.log(y)
}

for (let u=8;u>=1;u--){
    if(u==4){
        continue
    }console.log(u)
}