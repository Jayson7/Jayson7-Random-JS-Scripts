let promise = new Promise(function(resolve, reject) {
    let x = 2;
    if (x >= 0) {
        resolve("success");
    } else {
        reject("failure");
    }
});
promise.then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log(error);
    }
);