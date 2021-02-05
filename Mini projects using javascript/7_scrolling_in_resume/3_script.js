var targetPos = 1000;
var currentPos = 0;
var scrollInterval = setInterval(function(){
    if(currentPos >= targetPos){
        clearInterval(scrollInterval);
        return;
    }
    currentPos += 50;
    window.scrollBy(0, 50);
}, 50);
var educationSection = document.getElementById('education');
var coordinates = educationSection.getBoundingClientRect();
console.log(coordinates);
// coordinates include height, bottom, right, bottom, top, x, y
// y ==> It is the distance from the top of the web-page to the education section 
