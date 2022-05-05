console.log(0)

const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");
const createTaskButton = document.querySelector("#create-task");
const taskTitleEl = document.querySelector("#task-title");
const deleteTaskButton = document.querySelector("#delete-task");
const taskIdToDeleteEl = document.querySelector("#task-id-to-delete");
const updateTaskButton = document.querySelector("#update-task");
const taskNewTitleEl = document.querySelector("#task-new-title");
const taskIdToChangeEl = document.querySelector("#task-id-to-change");

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived)
});

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksReceived)
});

createTaskButton.addEventListener("click", () => {createTask(taskTitleEl.value)})

deleteTaskButton.addEventListener("click", () => {deleteTask(taskIdToDeleteEl.value)})

updateTaskButton.addEventListener("click", () => {updateTask(taskIdToChangeEl.value, taskNewTitleEl.value)})

function onTasksReceived(tasks) {
    const result = document.querySelector('#tasks-result')
    result.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        li.dataset.id = task.id
        result.appendChild(li);
    });
}

function onImagesReceived(array) {
    array.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}