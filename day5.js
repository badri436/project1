// String,number,array,object
let word = "This is string data type"

word = "updated"

const word1 = "this is comstatnt one"
console.log("Example of string", word)
console.log(word1)

let num = 15
console.log(num)

const arr = [4, 7, 8, 9]
console.log(arr[0])

let obj = {
    "name": "mfkfmf",
    "course":"full stack"
}

console.log(obj)

// Operators
// Arithmetic logical comparison ternary

// Arithmetic operator + - * / %
console.log(5 + 5)
console.log(10 / 2)

// Logical Operators >,>=,<,<=,==,!=
console.log(10 > 5)
console.log(6 != 5)
console.log(5 === "5")

// Comparison Operator
console.log(10 > 5 && 1 > 2)
console.log(10 > 5 || 1 > 2)

let num2=5
// Ternary Operator (condition)? : 
5> 4 ? num2 = num2 + 5 : console.log("no it was");
console.log(num2)


// Loops -> If,For,While
if (10 > 11) {
    num2 = num2 + 3 * 2
    console.log(num2)
    console.log("condition satisfied")
}
else if (5 > 6) {
    console.log("condition satisfied")
}
else {
    console.log("else condition started")
}

// For Loop
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
    if (arr[i] == 7) {
        break
    }
    console.log("im from for loop")
}

console.log("while loop concept started")
let y = 0;
while (y<arr.length) {
    
console.log(arr[y])
    y++
}

console.log("for of started")
for (let obj1 of arr) {
    console.log(obj1)
}

switch ("wednesday") {
    case "monday":
        console.log("monday is called");
        break;
    case "tuesday":
    console.log("tue is called");
        break;
    default:
        console.log("not a valid option");
        break;
}