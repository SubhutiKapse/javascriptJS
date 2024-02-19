//for(initialization;CSSConditionRule;increment){
    //statements
//}

//program 1
for (let i=1; i<=3;i++){
    console.log(i)
}

//program 2
for (let i=1; i<=5;i++) {
    console.log(i)}

//program 3
//print 10 to 1
for (let i=10;i>1;i--) {
    console.log(i)
}   

//program 4
for (let i=1 ;i<=10;i++){
    console.log(i)
}
//table of 2
for (let i=2 ;i<=20;i=i+2){
    console.log(i)
}


//program 5
//print table in reverse order

for(let i=50;i>=5;i=i-5){
    console.log(i)
}

for (let i=70;i>=7;i=i-7){
    console.log(i)
}


for (let i=1;i<=3;i++){
    console.log(i)
}

for (let i=3;i>=1;i--){
    console.log(i)
}

for (let i=2;i<=20;i=i+2){
    console.log(i)
}

// for loops with break statement
//program 1

for (let i=1;i<=5;i++){//2//3
    console.log(i) //1//2//3
    if (i==3){
        break
    }
}

//program 2
for (let i=5;i>=1;i--){//4//3
    if(i==3){
        break
    } console.log(i)//5//4
}

//program 3
for (let i=2;i<=20;i=i+2){//4//3//2
    if(i==10){
        break
    }
    console.log(i)//2//4//3
}

//program 4
//continue statement with for loops
for (let  i=1;i<=5;i++){//2//3//4
    if(i==3){
        continue
    }
    console.log(i)//1//2//3//4//5
}

//program 5
for(let i=5;i>=1;i--){
    if(i==3){
    continue
}
console.log(i)}

//program 6
for (let o=4;o>=1;o++){
    if(o==2){
        continue
    }
}
console.log(o)

//program 7
for(let a=1;a<=3;a++){//2//3
    console.log(a)//1//2//3
}