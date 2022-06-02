let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {name: "Alex"}
    }, 1000)

    reject({status: 400, message: 'Bad request'})
})

p.then(
    (res) => {
        console.log('Inside then first arg')
        console.log(res)
    },
    (err) => {
        console.log('Inside then second arg')
        console.log(err)
    },
)

