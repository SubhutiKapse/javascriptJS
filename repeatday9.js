//for loop using break statement
//program 1
for(let i=1;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i)
}

//program 2
for(let i=1;i<=5;i++){
    console.log(i)
    if(i==3){
        break

        }
    
}

//program 3
for(let i=5;i>=1;i--){//4//3
    if(i==3){
        break

    }
    console.log(i)//5//4
}
//program 4
for(let i=5;i>=1;i--){//4//3
    if(i==3){
        continue

    }
    console.log(i)//5//4
}

//program 5
for(let i=1;i<=5;i++){//2//3//4
    console.log(i)//1//2//3//4
        if(i==4){
            break
        }
    }


    //program 6
    for(let i=1;i<=5;i++){//2//3
        if(i==3){
            break
        }
        console.log(i)//1//2
    }

    //program 7 for loopwith continue
    for(let i=1;i<=5;i++){
        
        if(i==2){
            continue 
        }
        console.log(i)
        }
    

        //program 8
        for (let i=1 ;i<=6;i++){
if(i==3){
    continue
}
console.log(i)
        }
        

//program 10
for(let i=1;i<=5;i++){//2//3
    console.log(i)//1//2
}        

//program 11
for(let i=0;i<=5;i++){//1//2//3
    console.log(i)//0//1//2//3
    if(i==3){
        break
    }
}

for(let i=0;i<=4;i++){
    if(i==2){
        break
    }
    console.log(i)
}

//program 12
for(let i=1;i<=6;i++){//2//3
    console.log(i)//1//2//3
    if(i==3){
        break
    }
}

for(let i=1;i<=7;i++){//2//3//4
    if(i==4){
        break
    }
    console.log(i)//1//2//3//4
}

// for(let i=1;i<=5;i++){
//     console.log(i)
//     if(i==3){
//         continue
//     }
//}

for(let i=1;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}