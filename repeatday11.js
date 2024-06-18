
//for loop
for(let q1=1;q1<=5;q1++){
    console.log(q1)
}

//for using break
for(let q2=1;q2<=5;q2++){
    if(q2==3){
        break
    }
    console.log(q2)
}

for(let q3=1;q3<=5;q3++){
    console.log(q3)
    if(q3==3){
        break
    }
}

//for using continue
for(let q4=5;q4>=1;q4--){
    if(q4==3)
        continue
    console.log(q4)
}

//while loop
let i=1
while(i<=5){
    console.log(i)
    i++
}

//while using break
let i1=1
while(i1<=5){
    if(i1==3){
        break
    }
    console.log(i1)
        i1++
    
}

//while using continue
let i2=1
while(i2<=5){
    if(i2==3){
        i2=i2+1
        continue
    }
    console.log(i2)
    i2=i2+1
}