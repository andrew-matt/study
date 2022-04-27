function getImages(pageNumberEl, successCallback) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl}&count=1`, {
        success: function (data) {
            successCallback(data)
        }
    })
}
