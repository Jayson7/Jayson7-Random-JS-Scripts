// var networkInformation = navigator.connection;
// console.log(networkInformation);
// var effectiveType = NetworkInformation.effectiveType

// const speed = networkInformation.downlink;
// console.log(speed);
// rtt = NetworkInformation.rtt
// var type = netInfo.type

// Get the connection type.
// var type = navigator.connection.type;

// function changeHandler(e) {
//    // Handle change of connection type here.
// }

// // Register for event changes:
// navigator.connection.onchange = changeHandler;

// // Another way: navigator.connection.addEventListener('change', changeHandler);

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