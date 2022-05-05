function getImages(pageNumberEl) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumberEl}&count=1`)
    return promise.then(response => response.data)
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=123&count=30`)
    return promise.then(response => response.data)
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 123,
        title: title
    })
    return promise.then(response => response.data)
}

function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=123&taskId=${id}`)
    return promise.then(response => response.data)
}

