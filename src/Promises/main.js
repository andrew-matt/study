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

/*let axios = {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    G: 2,
                    g3: 4,
                    message: 'YoYoYo'
                });
            }, 1000)
        });
    }
}*/

/*axios.get()
    .then((data) => console.log(data))
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then()
    .then(() => console.log(3))
    .then()
    .then(() => console.log(4))
    .catch((data) => console.error(data));*/

// let a = {
//     sum(a, b) {
//         console.log(a + b)
//         return {
//             ...this
//         }
//     }
// }
//
// a
//     .sum(3, 6)
//     .sum(2, 4)
//
// let pr1 = a.sum(1, 2)
// let pr2 = a.sum(1, 2)
// console.log(pr1 === pr2);

/*
let promise = axios.get();
promise.then((data) => {
    return data.message;
})
    .then((message) => {
        console.log(message)
        return message
    })
    .then((message2) => console.log(console))*/

//     const newPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(Math.random())
//     }, 0)
// })
//
// newPromise.then((number) => {
//     console.log(number)
// })

// let myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         alert('myPromise')
//         resolve()
//     }, 1000)
// })
//
// myPromise.then(() => {
//     console.log('myPromise resolved')
// })

// let myPromise = new Promise((resolve, reject) => {
//     resolve(Math.random())
// })
//
// myPromise.then(number => {
//     console.log('myPromise: ' + number)
// })
//
// myPromise.then(number => {
//     console.log('myPromise: ' + number)
// })
//
// console.log('finish')