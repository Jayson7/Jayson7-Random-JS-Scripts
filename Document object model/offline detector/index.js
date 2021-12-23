// document.addEventListener("onoffline", () => {
//     console.log("you are offline");
//     alert("you are offline");
// });

if (window.navigator.onLine) {
    alert("online");
} else {
    alert("offline");
}