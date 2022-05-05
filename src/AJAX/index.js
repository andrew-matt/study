console.log(0)

const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");
const createTaskButton = document.querySelector("#create-task");
const deleteTaskButton = document.querySelector("#delete-task");

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived)
});

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksReceived)
});

createTaskButton.addEventListener("click", () => {createTask('learn HTML')})

deleteTaskButton.addEventListener("click", () => {deleteTask("e0d3dd2a-570e-4ef5-b98e-ad0cfd23488b")})

function onTasksReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        li.dataset.id = task.id
        document.querySelector('#tasks-result').appendChild(li);
    });
}

function onImagesReceived(array) {
    array.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}