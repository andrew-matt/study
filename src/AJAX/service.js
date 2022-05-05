function getImages(pageNumberEl) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumberEl}&count=1`)
    return promise.then(response => response.data)
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=123`)
    return promise.then(response => response.data)
}

function createTasks(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=123&title=${title}`)
    return promise.then(response => response.data)
}

