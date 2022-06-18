/*const man = { age: 33 }

function showAge() {
    console.log(this.age)
}

showAge() // undefined

showAge.call(man) // 33

showAge.apply(man) // 33

showAge.bind(man) // не вызовет функцию, но свяжет ее с объектом man

const boundFunc = showAge.bind(man)

boundFunc() // 33*/

/*const man = { age: 33 }

function showAge(a, b, c) {
    console.log(this.age)
    console.log(a)
    console.log(b)
    console.log(c)
}

showAge.call(man, 1, 2, 3) // 33, 1, 2, 3

showAge.apply(man, [1, 2, 3]) // 33, 1, 2, 3*/

class API {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    get() {
        // make request
    }
    update() {
        // make request
    }
}

class APIWithAlert extends API {
    get() {
        super.get()
        alert('success')
    }
}
