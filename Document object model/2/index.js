// event handler example

document.onclick = inputChange;

function inputChange(e) {
    let log = document.getElementsByClassName("log");
    console.log(e.clientX);
    console.log((log.textContent = `Position: (${e.clientX}, ${e.clientY})`));
}