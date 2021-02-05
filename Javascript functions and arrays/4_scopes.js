var name = 'global';
function scopeDemo()
{
    var name = 'function';
    console.log(name);              // function
}
scopeDemo();
console.log(name);                  // global

// When an interpreter at this point it will search the variable name in its current scope, if it is not present their it will search outside

var name = "global";
function scopeDemo()
{
    console.log(name);              // global
}
scopeDemo();
console.log(name);                  // global
