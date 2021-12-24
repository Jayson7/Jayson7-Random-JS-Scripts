window.oncontextmenu = (e) => {
    e.preventDefault();
    document.querySelector("body").innerHTML = "i did it, its disabled 🤣";
};