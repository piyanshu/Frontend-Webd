// 1.
var a = 10;
if(a <= 10)
{
    let b = 40;
}
else
{
    let c = 50;
}
console.log(a, b, c);       // Reference error: b is not defined

// 2.
console.log(d);             // Undefined
var d = 10;
if(d <= 10)
{
    console.log(b);         // Reference Error
    let b = 20;
}
// In case of let and const variables hoisting does not takes place.
