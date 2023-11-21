// String inbuilt function
let word = "This is a frontend class is frontend"

let text1="hello"
console.log(word)
console.log(word.length)
console.log(word.split("a"))
console.log(word.toUpperCase())
console.log(word.toLocaleLowerCase())
console.log(word.concat(" updated"))
console.log(word.charAt(5))
console.log(word.trim())
console.log(text1.padEnd(7, "hi"))

console.log(word.includes("backend"))

console.log(word.slice(-6,-2))
console.log(word.substring(5, 11))
console.log(word.substr(5, 3))

console.log(text1.repeat(3))

console.log(word.replace(/Frontend/i,"backend"))

// String search methods
console.log(word.indexOf("is",10))
console.log(word.lastIndexOf("is"))
console.log(word.search(/Is/i))
console.log(word)
console.log(word.match(/FRONTEND/gi))

// Array Methods
let arr = [4, 5, 7, 8, 9]

console.log(arr.length)
arr.push(45)
arr.unshift(22)

arr.pop()
arr.shift()
console.log(arr.toString())
console.log(arr)

console.log(arr.includes(87))