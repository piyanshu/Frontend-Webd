var name = "global";
function scopeDemo()
{
    console.log(name);
}
scopeDemo();
console.log(name);
// Execution context of any code is created when that part of code is executed
// Firstly the global scope is executed so global execution context is created
// When scopeDemo func is called at that point of time the func execution context of scopeDemo is created
// global execution context has two things 
/* 1. variable environment - declaration of variables
   2. this pointer
*/ 
// function execution context has three things
/* 1. variable environment - declaration of variables
   2. this pointer
   3. Reference to the outer environment
*/

function c()
{
    console.log('Inside c');
}
function b()
{
    c();
    console.log('Inside b');
}
function a()
{
    b();
    console.log('Inside a');
}
a();
console.log('global context');
// 1. Global execution context
// 2. execution context of func a
// 3. execution context of func b
// 4. execution context of func c