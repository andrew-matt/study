const names = ["Bob", "Ted", "Alex", "Fred", 100, "bob"]

//console.log([...names].sort())
//console.log(names)

const numbers1 = [-1, 100, 0, -999, 33, 456, 321, 1111]

const compareFunc = (a, b) => {
    if (a <= b) {
        return -1
    } else {
        return 1
    }
}

//console.log(numbers.sort(compareFunc))
//console.log(numbers.sort((a, b) => b - a).reverse())

let numbers = '45385593107843568'
let numbersArr = numbers.split('')
const func = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) <= 5) {
            arr[i] = '0'
        } else {
            arr[i] = '1'
        }
    }
    return arr
}

func(numbersArr)
let numbersStr = numbersArr.join('')
//console.log(numbersStr)

const students = [
    {name: "bob", age: 22, isMarried: true, scores: 95},
    {name: "Bob", age: 22, isMarried: true, scores: 95},
    {name: "Alex", age: 23, isMarried: true, scores: 89},
    {name: "Helge", age: 21, isMarried: true, scores: 89},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 121},
    {name: "alex", age: 23, isMarried: true, scores: 89},
]

console.log(students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
console.log(students.sort((a, b) => b.age - a.age))