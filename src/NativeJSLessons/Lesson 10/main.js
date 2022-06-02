let p = new Promise((resolve, reject) => {
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
})


