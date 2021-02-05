var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        interval = setInterval(scrollVertically, 20, targetSection);
    });
}
function scrollVertically(targetSection){
    var coordinates = targetSection.getBoundingClientRect();
    if(coordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}
