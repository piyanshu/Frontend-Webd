var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
// At this line javscript dont gives any error because we cannot use strict mode
count = 0;
box.addEventListener('click', function(){
    // Here we use strict mode so javascript gives error for demo only
    'use strict'
    demo = 100;
    count++;
    clickCount.innerText = count + " ";
});

