let arr = [4, 5,16, 7, 8, 9,16]
let arr2 = [4, 31, 32]
let arr3=[54,46,78]
// arr=arr.reverse()
console.log(arr)
// arr.sort()
console.log(arr)

// arr.splice(1, 2, 16, 83)

let combineArray=[...arr,...arr2,...arr3]
console.log(arr)
console.log(arr.concat(arr2))
console.log(combineArray)
console.log(arr)
console.log(arr.indexOf(16))
console.log(arr.lastIndexOf(16))

let forEachex=arr.forEach((e) => {
    console.log(e)
    return e+5
})
console.log(forEachex)

// Array Important methods

let mapExample = arr.map((e) => {
    return e+5
})

console.log(mapExample)

let filterExample = arr.filter((e) => {
    return e>5
})
console.log(filterExample)

let findExample = arr.find((e) => {
    return e>5
})
console.log(findExample)

let someExample = arr.some((e) => {
    return e<0
})
console.log(someExample)
let everyEx = arr.every((e) => {
    return e>5
})
console.log(everyEx)

let reduceEx = arr.reduce((ans,i) => {
    return ans+i
})
console.log(reduceEx)

let MapEx = new Map([["id", 5], ["name", 2]])
console.log(MapEx)
MapEx.set("course","full stack")
console.log(MapEx.get("id"))
MapEx.set("name", "fnfjf")
console.log(MapEx)
// MapEx.delete("name")
// MapEx.clear()
console.log(MapEx.has("name"))


let setExample = new Set([4, 5, 55, 4, 7, 8])
console.log(setExample)

let newDate = new Date()
console.log(newDate.getDate())
