/*
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
console.log(shogun.__proto__ === Samurai.prototype) // true
console.log(shogun.__proto__.__proto__ === Object.prototype)
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype)
console.log(shogun.__proto__.__proto__.__proto__ === null)

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


// 1 - false prototype нет, а proto === Object.prototype
console.log(({}).prototype === ({}).__proto__)
console.log(({}).__proto__ === Object.prototype)

// 2 - false prototype есть, но proto === Function.prototype
function ITKamasutra() {}
console.log( ITKamasutra.prototype === ITKamasutra.__proto__)
console.log(ITKamasutra.__proto__ === Function.prototype)

// 3 - true false один proto === Function.prototype
// 4 - false разные prototype
function ITIncubator() {}
function ITKamasutra() {}
console.log( ITIncubator.__proto__ === ITKamasutra.__proto__)
console.log( ITIncubator.__proto__ === Function.prototype)
console.log( ITKamasutra.__proto__ === Function.prototype)
console.log( ITIncubator.prototype === ITKamasutra.prototype)

// 5 - false нет prototype и proto не равен Object.prototype а равен Function.prototype
let Component = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log( Component.prototype === Object.prototype )
console.log( Component.__proto__ === Function.prototype )

// 6 - false нет prototype
// 7 - true
let age = 18
console.log( age.prototype === Number.prototype )
console.log( age.__proto__ === Number.prototype )

// 8 - true
class Hacker {}
console.log( Hacker.__proto__ === Function.prototype )

// 9 - true Function.prototype
function ITIncubator() {}
console.log( ITIncubator.__proto__ === Function.prototype)

// 10 - true Number.prototype
const count = 12
console.log(count.__proto__ === Number.prototype)

*/

// const user = {
//     _name: 'John',
//     _lastName: 'Doe',
//
//     get name() {
//         return this._name + ' ' + this._lastName
//     },
//
//     set name(value) {
//         this._name = value
//     },
// }
//
// console.log(user.name)
//
// user.name = 'Alex'
//
// console.log(user.name)

// const baseUser = {
//     login: 'default'
// }
//
// const superBaseUser = {
//     login: 'super default'
// }
//
// const alex = {
//     name: 'Alex'
// }
//
// superBaseUser.__proto__ = baseUser
//
// alex.__proto__ = superBaseUser
//
// console.log(alex.login)

// function reduceByRules(numbers, rules) {
//     let arr = numbers
//     let rulesArr = rules
//     while (arr.length > 2) {
//         let a = rulesArr.shift()
//         let b = arr.splice(0, 2)
//         let c = b.reduce(a)
//         arr.unshift(c)
//         rulesArr.push(a)
//     }
//     return arr.reduce(rulesArr[0])
// }
//
// let rules = [ (a, b) => a + b ];
//
// console.log(reduceByRules([2, 2], rules))
//
// function User(name) {
//     this.name = name
// }
//
// User.prototype.nickname = 'Default'
//
// User.prototype.showName = function() {
//     console.log(this.name)
// }
//
// const user1 = new User('Alex')
// const user2 = new User('Hannah')
// const user3 = new User('John')
//
// user1.showName()
// user2.showName()
// user3.showName()
//
// console.log(User.prototype === Function.prototype)
//
// console.log(user1.nickname)

class BaseUser {

    age = 18

    constructor(name, age) {
        this.name = name
        // this.age = age
    }
    showName() {
        console.log(this.name)
    }
    showAge() {
        console.log(this.age)
    }
}

const baseUser1 = new BaseUser('Alex', 25)
const baseUser2 = new BaseUser('Alex')

console.log(baseUser1);
console.log(baseUser2);

