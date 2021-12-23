window.oncontextmenu = (e) => {
    e.preventDefault();
    document.querySelector("body").innerHTML = "i did it, its disabled 🤣";
};
document.addEventListener("keyup", (e) => {
    console.log(e.code);
});