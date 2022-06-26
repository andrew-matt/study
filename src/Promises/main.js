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

let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});

pr.then(() => {
    console.log(pr)
})

console.log(pr)

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
//
// const doAfter = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(seconds)
//         }, 1000 * seconds)
//     })
// }
//
// let pr = doAfter(3)
//     .then(() => {
//         console.log('resolved')
//         return new Promise((res, rej) => {
//             res(123)
//         })
//     })
//     .then((name) => {
//         console.log('resolve value: ' + name)
//     })
//
// let callback1 = () => {
//     console.log('Мой промис зарезолвился')
//     return 5
// };
// let callback2 = (num) => console.log('Мой промис тоже зарезолвился следом ' + num);
//
// let pr1 = doAfter(3);
// let pr2 = pr1.then(callback1);
// pr2.then(callback2);


// doAfter(5).then((seconds) => console.log('я сработал через ' + seconds + ' секунд'))
// doAfter(6).then((seconds) => console.log('я сработал через ' + seconds + ' секунд'))
// doAfter(10).then((seconds) => console.log('я сработал через ' + seconds + ' секунд'))
//
// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );

// let promise = doAfter(5)
//
// setTimeout(() => {
//     promise.then(() => console.log('0'))
// }, 0)
//
// setTimeout(() => {
//     promise.then(() => console.log('1'))
// }, 4000)

// let promise = new Promise((resolve) => {
//     let i = 0;
//     setInterval(() => {
//         i++;
//         resolve(i);
//     }, 5000)
// })
//
// promise.then((res) => {
//     console.log(res)})

// let pr = new Promise( (resolve) => {
//     let data = {
//         cities: [{title: "Minsk"}, {title: "Kiev"}],
//         website: "it-kamasutra.com"
//     };
//     resolve(data);
// });
//
// pr.then( data => {
//     console.log(data);
//     return data
// })
//     .then( data => {
//         console.log(data.website);
//     })

// let pr1 = doAfter(4); // один промис
// let pr2 = doAfter(7); // второй промис
//
// pr1.then( () => console.log("pr1 resolved") ); // индивидуально подписываемся на каждый
// pr2.then( () => console.log("pr2 resolved") );
//
// let aggregatedPromise = Promise.all([pr1, pr2]); // получаем общий промис
//
// aggregatedPromise.then( () => console.log("pr1 and pr2 resolved")); // сработает наш подписчик ТОЛЬКО когда все промисы, переданные в массиве в all будут resolved

// const getRandomAfter = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 1000 * seconds)
//     })
// }
//
// // getRandomAfter(4).then( number => console.log(`я получил ${number} спустя 4 секунды`))
//
// let promises = [getRandomAfter(1),getRandomAfter(2), getRandomAfter(3)];
// let commonPromise = Promise.all(promises);
// commonPromise.then( (data) => {
//     console.log(data)
// } );
