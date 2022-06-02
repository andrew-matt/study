let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {name: "Alex"}

        resolve(user)

        reject({status: 400, message: 'Bad request'})

    }, 1000)
})

p
    .then(
        (res) => {
            console.log('Inside then first arg')
            console.log(res)
        })
    .catch(
        (err) => {
            console.log('Inside then second arg')
            console.log(err)
        })

