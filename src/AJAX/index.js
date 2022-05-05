console.log(0)

const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived)
});

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksReceived)
});

createTasks('learn JS').then(data => {
    debugger
    console.log(data)
})

function onTasksReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task;
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