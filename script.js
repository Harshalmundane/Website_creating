
const changeText = function() {
    document.querySelector('h1').innerHTML = "best in GCOEN";
}

const timeoutID = setTimeout(changeText, 2000);

document.querySelector(".primary-button").addEventListener('click', function() {
    clearTimeout(timeoutID);
    console.log("stop");
});
