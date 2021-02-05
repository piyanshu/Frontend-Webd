function sayHello()
{
    console.log('Hello');
}
// After every 2sec, sayHello func will execute only once
setTimeout(sayHello, 2000);
// Time is in milliseconds

var sec = 1;
function sayHello()
{
    console.log('after', sec);
    sec++;
}
// So after every 1sec, sayHello will execute continuously 
setInterval(sayHello, 1000);

var sec = 1;
function sayHello()
{
    console.log('after', sec);
    sec++;
    if(sec == 6)
    {
        clearInterval(id);
    }
}
var id = setInterval(sayHello, 1000);
