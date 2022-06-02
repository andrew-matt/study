// function sayHi(name, surname) {
//     console.log(`${name} ${surname}`)
// }
//
// sayHi("Alex", "Viarhey")

 function counterCreator() {

    let count = 0;

    return function () {
        return count++
    }
 }

let counter = counterCreator();
let counter2 = counterCreator();

counter();
counter();
counter();
counter();
counter();
counter2();
counter2();
counter2();

console.log(counter())
console.log(counter2())
