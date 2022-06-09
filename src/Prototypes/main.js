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

let shogun = new Samurai("John")
console.log(shogun.prototype) // нет
console.log(shogun.__proto__) // есть
console.log(shogun.__proto__ === Samurai.prototype) // есть

let shogun2 = new Samurai("Jack")
console.log(shogun.__proto__ === shogun2.__proto__) // true

const Component = (props) => {
    return "<h1>I need help</h1>"
}
console.log(Component.prototype) // нет
console.log(Component.__proto__) // есть
console.log(Component.__proto__ === Function.prototype) // true

function Samurai2(name) {
    this.name = name;
}

Samurai2.prototype.hello = function () {
    alert(this.name);
}

let shogun3 = new Samurai2("Helen");
shogun3.hello(); // shogun3.__proto__ => Samurai2.prototype, и там находит hello

let shogun4 = new Samurai2("Ann");
shogun4.hello(); // shogun4.__proto__ => Samurai2.prototype, и там находит hello


