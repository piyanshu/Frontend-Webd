var var1 = 10;
function outer(){
    var b = 40;
    console.log(b);
}
console.log(var1);

// var1 and func outer has global execution context.
// b has func execution context.

// Anything which we are creating in a global scope are the properties of window object
console.log(window.var1);
window.outer();
// With the help of above two properties now window object has two additional properties 
// var1 : 10
// outer