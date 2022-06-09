/*let p = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(1)

    }, 1000)
})

p
    .then(
        (res) => {
            console.log(res)
            return res
        })
    .then(
        (res) => {
            console.log(res)
        })

let all = Promise.all([
    new Promise(res => setTimeout(() => res(1), 3000)),
    new Promise(res => setTimeout(() => res(2), 2000)),
    new Promise(res => setTimeout(() => res(3), 1000)),
])

all.then(res => {
    console.log(res)
})*/

/*
setTimeout(function() {
    console.log(1)
}, 0)

new Promise((resolve, reject) => {
    console.log(2)
    resolve()
}).then(() => {
    console.log(3)
})

console.log(4)*/

/*setTimeout(function () {
    console.log("s1")
}, 1);

setTimeout(function () {
    console.log("s2")
}, 1000);

new Promise(function (resolve) {
    console.log("p1");
    resolve();
    console.log("p2");
}).then(function () {
    console.log("p3")
});

console.log("w1");

async function test1() {
    console.log("a1");
    await test2();
    console.log("a2");
}

async function test2() {
    console.log("a3");
}

test1();

console.log("w2")

// p1 p2 w1 a1 a3 w2 p3 a2 s1 s2*/

console.log(1)

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3)
    });
});

new Promise((resolve, reject) => {
    console.log(4)
    resolve(5)
}).then((data) => {
    console.log(data);

    Promise.resolve().then(() => {
        console.log(6)
    }).then(() => {
        console.log(7)

        setTimeout(() => {
            console.log(8)
        }, 0);
    });
})

setTimeout(() => {
    console.log(9)
})

console.log(10)

// 1 4 10 5 6 7 2 3 9 8
