import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

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
        {id: 1, title: "CSS&HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ])

    let[filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        setTasks(tasks.filter(t => t.id !== id));
    }

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
            />
        </div>
    );
}

export default App;

