let promise = new Promise(() => {
}) // new Promise(…) – promise.__proto__ === Promise.prototype
let man = {} // new Object(…) – man.__proto__ === Object.prototype
let users = [] // new Array(…) – users.__proto__ === Array.prototype
let age = 18 // new Number(…) – age.__proto__ === Number.prototype

let dimych = {name: 'Dimych'}
console.log(dimych.prototype) // нет (undefined)
console.log(dimych.__proto__ === Object.prototype) // true

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.prototype) // нет (undefined)
console.log(numbers.__proto__ === Array.prototype) // true

class Samurai {
    constructor(name) {
        this.name = name
    }

    hello() {
        alert(this.name)
    }
}

console.log(Samurai.prototype) // есть
console.log(Samurai.__proto__) // есть
console.log(Samurai.__proto__ === Function.prototype) // true