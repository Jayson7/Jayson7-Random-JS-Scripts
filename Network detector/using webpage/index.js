var networkInformation = navigator.connection;

const speed = networkInformation.downlink;

var infobox1 = document.querySelectorAll(".info-box div")[0];
var infobox2 = document.querySelectorAll(".info-box div")[1];
var infobox3 = document.querySelectorAll(".info-box div")[2];
var infobox4 = document.querySelectorAll(".info-box div")[3];
var infobox5 = document.querySelectorAll(".info-box div")[4];

outputInfo = () => {
    infobox1.textContent = "Speed : " + speed;
    infobox4.textContent = "SaveData : " + networkInformation.saveData;

    infobox3.textContent = "RRT : " + networkInformation.rtt;
    infobox5.textContent = "Online : " + window.navigator.onLine;

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