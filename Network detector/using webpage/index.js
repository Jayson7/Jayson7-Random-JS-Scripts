var networkInformation = navigator.connection;

const speed = networkInformation.downlink;

var infobox1 = document.querySelectorAll(".info-box div")[0];
var infobox2 = document.querySelectorAll(".info-box div")[1];

outputInfo = () => {
    infobox1.textContent = "Speed : " + speed;
    infobox2.textContent =
        "Network Type : " + networkInformation["effectiveType"];
    console.log(networkInformation);
};
document.addEventListener("load", outputInfo());
// setInterval(() => {
//     outputInfo();
// }, 10);
networkInformation.addEventListener("change", () => {
    outputInfo();
    window.location.reload();
    // console.log(infobox1);
});