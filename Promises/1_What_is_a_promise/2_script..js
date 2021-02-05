// callback - Once the task is completed then execute this function
// resolve - success callback(When the task is successfully completed execute this function)
// reject - failure callback(When the task is unsuccessfully completed execute this function)
var promise = new Promise((resolve, reject) => {
    // task - Wait for 1 sec, then promise is successful
    setTimeout(() => {
        resolve();
    }, 1000);
});
// handler for successfull call back
promise.then(() => {
    console.log('successful');
});