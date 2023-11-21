"use strict"
// Try catch
try {
    let n = 5;
    n = 8;
    console.log(n);

} catch (e) {
    console.log("this above code has some errors")
} finally {
    console.log("im printing finally")
}
console.log("hii")

// Class and Constructor
class Person{
    name;
    age;

    // Giving values to the variables inside the class
    constructor(a,b) {
        this.name = a;
        this.age = b;
    }
}
let newPerson = new Person("java",20)
console.log(newPerson)


// Function and scope
let n = 5
// Without paramterized function
let n1=10
function addAndSub() {
    console.log("Its printing inside the function",n1)
    console.log(n+8*14)
}
console.log(n1)

addAndSub()

// With paramaters function
function addAndSub1(a) {
    console.log(a+8*14)
}
addAndSub1(15)
addAndSub1(8)

// Arrow function 
let newFunction = () => {
    console.log(n+8*14)
}
newFunction()

let n3 = 16
console.log(n3.toString()+5)

// Type conversion
console.log(parseInt("5") + 5)

let course="react"

// String Template
let word = `this is from ${course} course`
console.log(word)

