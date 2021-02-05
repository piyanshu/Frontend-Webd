var button = document.getElementById('btn1');
button.addEventListener('click', function(){
    // 1. window.scrollTo(x, y) se humlog jump kar jayenge (x, y) coordinate pe web-page ke.window.scrollTo(0, 200);
    window.scrollTo(0, 400);
    // It gives the Y coordinate of the web-page
    console.log(window.pageYOffset);
});
var button = document.getElementById('btn2');
button.addEventListener('click', function(){
    setInterval(function(){
        // ye humlogo ko smooth scroll karne me madad karta hai
        // It scrolls 20-20px continuously
        window.scrollBy(0, 20);
    }, 50)
});
// scrollTo ki madad se humlog (x,y) coordinate par jump kar jayenge
// scrollBy se dheere dheere (x,y) coordinate par jayenge.
