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

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

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

    function addTask(title: string) {
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

    function changeFilter(value: FilterValuesType, id: string) {
        let todolist = todolists.find((tl) => tl.id === id)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: v1(), title: "What to learn", filter: "active"},
        {id: v1(), title: "What to buy", filter: "completed"}
    ])

    return (
        <div className="App">
            {
                todolists.map((tl) => {
                    let tasksForTodoList = tasks;

                    if (tl.filter === "completed") {
                        tasksForTodoList = tasks.filter(t => t.isDone === true);
                    }

                    if (tl.filter === "active") {
                        tasksForTodoList = tasks.filter(t => t.isDone === false);
                    }

                    return <Todolist title={tl.title}
                                     key={tl.id}
                                     id={tl.id}
                                     tasks={tasksForTodoList}
                                     removeTask={removeTask}
                                     changeFilter={changeFilter}
                                     addTask={addTask}
                                     changeTaskStatus={changeStatus}
                                     filter={tl.filter}
                    />
                })
            }
        </div>
    );
}

export default App;

