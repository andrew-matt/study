function getImages(pageNumberEl) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumberEl}&count=1`)
    return promise.then(data => data.data)
}
