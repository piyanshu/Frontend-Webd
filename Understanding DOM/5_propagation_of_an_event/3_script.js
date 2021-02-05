// var innerDiv = document.getElementById('inner');
// innerDiv.addEventListener('click', function(){
//     console.log('Click innerDiv1');
// }); 
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function(){
    console.log('Click outerDiv');
});
document.addEventListener('click', function(){
    console.log('Click document');
});
// Agar humne webpage ke andar click kara lekin divs ke bahar to console me 'document' print hoga
// Agar humne outer div me click kara jaha color red hai to console me 'outerdiv' and 'document' print hoga
// Agar humne click kara innerdiv me jaha color cyan hai to console me 'innerdiv', 'outerdiv', 'document' print hoga

// Yaha par heirarchy hai - document->outerdiv(document ke andar)->innerdiv(document or outerdiv ke andar)
// Event target = It is that part where we clicks, then that part is known as event target

// If we click on innerdiv then it is event target and that is propagate upwards.
// This means after innerdiv it will going towards outerdiv as we wrote a func for outerdiv then that func will be execute
// Then it going towards document and we perform a func and that func will be execute

// If we click on innerdiv and wants to stop propagation upwards 
var innerdiv = document.getElementById('inner');
innerdiv.addEventListener('click', function(event){
    console.log('click innerDiv2');
    event.stopPropagation();
});