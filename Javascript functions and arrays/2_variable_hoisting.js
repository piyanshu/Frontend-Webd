// In javascript we have two types of scope global scope and func scope 
// agar variable ko func me create nahi kara to vo global scope me sabse upar hoist ho jayega
// agar variable ko func me create kara hai to vo func scope me sabse upar hoist hoga
console.log(j);                 // Undefined
function hoistDemo()
{
    console.log(i);             // Undefined
    var i = 10;
}
hoistDemo();
var j = 10;

// Above code can be rewritten as 
/*
var j;
console.log(j);
function hoistDemo()
{
    var i;
    console.log(i);
    i = 10;
}
hoistDemo();
j = 10;
*/