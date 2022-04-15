import {div, mult, sub, sum} from "./tasks";

test("sum", () => {
    const salary: number = 800
    const n: number = 200
    const result = sum(salary, n)
    expect(result).toBe(1000)
})

test("sub", () => {
    expect(sub(1200, 200)).toBe(1000)
})

test("div", () => {
    expect(div(500, 2)).toBe(250)
})

test("mult", () => {
    expect(mult(700, 3)).toBe(2100)
})