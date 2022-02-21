import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export function Counter() {
    debugger
    console.log("Counter rendered");
    let arr = useState(5)
    let data = arr[0]
    let setData = arr[1]
    return <div onClick={() => {
        setData(data + 1)
    }}>{data}</div>
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    let [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: v1(), title: "CSS&HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])

    function removeTask(id: string) {
        setTasks(tasks.filter(t => t.id !== id));
    }

    function addTask (title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodoList = tasks;
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false);
    }

    function changeFilter (value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
            />
        </div>
    );
}

export default App;

