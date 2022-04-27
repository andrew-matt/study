console.log(0)

const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const pageNumber = document.querySelector("#page-number");

function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}

clickMeButton.addEventListener("click", () => {
    getImages(pageNumber.value, onDataReceived);
});

