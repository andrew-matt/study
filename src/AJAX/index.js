console.log(0)

const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const pageNumberEl = document.querySelector("#page-number");

clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onDataReceived)
});

function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}
