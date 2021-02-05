// 'use strict'
var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
// At this line if we do not write var it dont give any error. Javascript automatically creates the global variable
count = 0;
box.addEventListener('click', function(){
    // At this line also javascript automatically creates variable in this func
    demo = 100;
    count++;
    clickCount.innerText = count + " ";
});

// If we want errors on both the lines and do not allow the javascript to interfere in our code. Use 'strict mode'.
// In js file write use strict at the top
// Strict mode is by default available in scratchjs. Almost all browsers can allow strict mode.