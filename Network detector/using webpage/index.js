var networkInformation = navigator.connection;
var effectiveType = NetworkInformation.effectiveType;
const speed = networkInformation.downlink;
var type = navigator.connection.type;
var infobox = document.querySelectorAll(".info-box div")[0];

outputInfo = () => {
    infobox.textContent = speed;
    console.log(infobox);
};
document.addEventListener("load", outputInfo());

networkInformation.addEventListener("onchange", () => {
    outputInfo();
    console.log(infobox);
});