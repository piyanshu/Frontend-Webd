var heading = document.getElementById('one');
heading.style.color = 'red';
heading.style.backgroundColor = 'cyan';

// We can get an array of all headings in our web-page
var headings = document.getElementsByTagName('h1');
headings[1].innerText = 'Hey';

// We get all the elements having class name 'para'
var para = document.getElementsByClassName('para');
para[0].style.backgroundColor = 'cyan';

var heading = document.querySelector('#one');
heading.innerText = 'Hello';

// This will give us only first matching result
var para = document.querySelector('.para');
para.innerText = 'para1';

// This will give us all results
var paras = document.querySelectorAll('.para');
paras[0].innerText = 'random';
paras[1].innerText = 'random';