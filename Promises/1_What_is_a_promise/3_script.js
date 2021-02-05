var userLoggedIn = true;
function isuserLoggedIn(){
    var promise = new Promise((resolve, reject) => {
        // task - If user is logged in, then task is successful
        setTimeout(() => {
            if(userLoggedIn){
                resolve();
            }
            else{
                reject('user not logged in');
            }
        }, 1000);
    });
    return promise;
}
setTimeout(() => {
    userLoggedIn = false;
}, 500);

isuserLoggedIn().then(() => {
    console.log('user Logged in');
}).catch((msg) => {
    console.log(msg);
});
// catch - function reject handler