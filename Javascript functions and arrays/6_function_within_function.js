// 1.
function outer()
{
    var outerVar = 10;
    function Inner()
    {
        console.log(outervar);
    }
}
inner();     // Reference error: Inner is not defined
// 2. 
function outer()
{
    var outervar = 10;
    function inner()
    {
        console.log(outervar);      // 10
    }
    inner();
}
outer();
// Order of execution context global, outer, inner
// 3. 
function outer()
{
    var outervar = 10;
    function inner()
    {
        var innervar = 100;
        console.log(outervar);
    }
    inner();
    console.log(innervar);      // reference error innervar is not defined
}
outer();
// 4.
var name = 'global';
function outer()
{
    var name = 'outer';
    function inner()
    {
        var name = 'inner';
        console.log(name);      // inner
    }
    inner();
    console.log(name);          // outer
}
outer();
console.log(name);              // global
// 5.
var name = 'global';
function outer()
{
    var name = 'outer';
    function inner()
    {
        console.log(name);      // outer
    }
    inner();
    console.log(name);          // outer
}
outer();
console.log(name);              // global
// 6.
var name = 'global';
function outer()
{
    function inner()
    {
        console.log(name);      // global
    }
    inner();
    console.log(name);          // global
}
outer();
console.log(name);              // global

// sabse pehle name variable apne scope me search hoga hai to theek hai nahi to outer scope me aur agar vaha bhi nahi hai to phir usse bhi outer scope me
