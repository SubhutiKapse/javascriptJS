//lexical scope

function addition() {
    let a = 10
    let b = 5

    function additionB() {
        let q = 10
        let r = 5
        console.log(a + b + q + r)

        function additionC() {
            let s = 6
            let t = 3
            console.log(a + b + q + r + s + t)

        }
        additionC()

    }
    additionB()
}
addition()

//closure

function displayName() {
    return function () {
        return "hello"
    }
}
let q1 = displayName()
console.log(q1())

function displayName2() {
    console.log("hello")
    return "bye"
    console.log("hello good bye")
}
let q2 = displayName2()
console.log(q2)


function additionE() {
    let x = 100
    let y = 50

    return function () {
        console.log(x + y)
    }
}

let s1 = additionE()

let s2 = function () {
    // console.log(x+y)
}
s1()
s2()

//actual difference arrow function and function declaration / function expression
//function declaration


function addition(x, y) {
    return x + y
}
let w1 = addition(12, 4)
console.log(w1)

// function expression 
let additionB = function (x, y) {
    return x + y
}
let w2 = additionB(12, 4)
console.log(w2)

// arrow function

let additionC = (x, y) => {
    return x + y
}
let w3 = additionC(12, 4)
console.log(w3)


// call bind apply