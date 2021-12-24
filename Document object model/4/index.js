function pause(e) {
    body.classList.add("paused");
    note.removeAttribute("hidden");
}

function play(e) {
    body.classList.remove("paused");
    note.setAttribute("hidden", "");
}

const body = document.querySelector("body");
const note = document.querySelector(".note");

window.oncontextmenu = pause;
window.onpointerdown = play;