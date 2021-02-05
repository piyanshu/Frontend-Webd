// var outerDiv = document.getElementById('outer');
// // When we take mouse over the outer div the function will execute and prints mouseover
// outerDiv.addEventListener('mouseover', function(){
//     console.log('Mouse over');
// });
// // Jab hum mouse ko outer se bahar leke ayenge to function execute hoga aur print karega mouseout
// outerDiv.addEventListener('mouseout', function(){
//     console.log('Mouse out');
// });
// // Jab kabhi bhi hum searchInput me kisi bhi key ko press karenge aur release karenge tab func execute aur keypress print hoga
// // up, down, left, right, shift, tab, space will not work
// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress', function(){
//     console.log('Key press');
// });
// // jab kabhi bhi hum keypress karenge to function execute hoga aur keydown print hoga
// document.addEventListener('keydown', function(){
//     console.log('key down');
// });
// // Jab kabhi bhi hum pressing key ko release karenge to function execute hoga aur keyup print hoga
// document.addEventListener('keyup', function(){
//     console.log('key up');
// });

// In 4 and 5 all keys will work even up, down, left, right, ctrl, alt.

document.addEventListener('keydown', function(event){
    console.log('key down', event.keyCode);
    console.log(event);
});
// Event is called the event object. It is that part where we clicks