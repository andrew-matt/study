const man = { age: 33 }

function showAge() {
    console.log(this.age)
}

showAge() // undefined

showAge.call(man) // 33

showAge.apply(man) // 33

showAge.bind(man) // не вызовет функцию, но свяжет ее с объектом man

const boundFunc = showAge.bind(man)

boundFunc() // 33
