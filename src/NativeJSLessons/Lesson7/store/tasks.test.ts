import {ActionType, div, mult, salaryReducer, StateType, sub, sum} from "./tasks";

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

test("case SUM of salaryReducer", () => {
    const salary: StateType = 800
    const action: ActionType = {
        type: "SUM",
        n: 200
    }
    const testAction: ActionType = {
        type: "TEST",
        n: 200
    }

    const result = salaryReducer(salary, action)
    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(800)
})

test("case SUB of salaryReducer", () => {
    const salary: StateType = 700
    const action: ActionType = {
        type: "SUB",
        n: 50
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(650)
})

test("case DIV of salaryReducer", () => {
    const salary: StateType = 1200
    const action: ActionType = {
        type: "DIV",
        n: 2
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(600)
})

test("case MULT of salaryReducer", () => {
    const salary: StateType = 300
    const action: ActionType = {
        type: "MULT",
        n: 3
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(900)
})
