function sayHello(){
    alert('Hello!!');
}
function sayBye(){
    alert('Bye!!');
}
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', sayHello);
btn2.addEventListener('click', sayBye);