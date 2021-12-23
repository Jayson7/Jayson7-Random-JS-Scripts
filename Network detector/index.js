// var networkInformation = navigator.connection;
// console.log(networkInformation);
// var effectiveType = NetworkInformation.effectiveType

// const speed = networkInformation.downlink;
// console.log(speed);

function logConnectionType() {
    var connectionType = "not supported";
    var downlinkMax = "not supported";

    if ("connection" in navigator) {
        connectionType = navigator.connection.effectiveType;

        if ("downlinkMax" in navigator.connection) {
            downlinkMax = navigator.connection.downlinkMax;
        }
    }

    console.log(
        "Current connection type: " +
        connectionType +
        " (downlink max: " +
        downlinkMax +
        ")"
    );
}

logConnectionType();
navigator.connection.addEventListener("change", logConnectionType);