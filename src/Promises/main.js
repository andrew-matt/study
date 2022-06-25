/*function sayHi(name, surname) {
    console.log(`${name} ${surname}`)
}

sayHi("Alex", "Viarhey")*/

/*function counterCreator() {

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
console.log(counter2())*/

/*function wait(ms) {
    return new Promise((res) => {
        setTimeout(() => {
            return res()
        }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()*/

/*let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});

pr.then(() => {
    console.log(pr)
})

console.log(pr)*/

let axios = {
    get() {
        let pr = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('hi');
            }, 1000)
        });
        return pr
    }
}

axios.get()
    .then((data) => console.log(data))
    .catch((data) => console.error(data));
