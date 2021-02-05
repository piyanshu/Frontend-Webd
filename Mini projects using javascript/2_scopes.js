// There are two types of scope 
// 1. Global scope
// 2. Function Scope

// 1. Global scope
// i.)
var a = 10;
if(a <= 10)
{
    var b = 40;
}
else
{
    var c = 40;
}
console.log(a, b, c);           // 10 40 undefined
// In this case variable b and c are hoisted outside if and else i.e. in global scope. Thats why they are accessible 

// ii.)
console.log(i);
for(var i=0; i<=5; i++)
{
    console.log(i);
}

// 2. function scope
var d = 10;
function helper()
{
    var e = 20;
}
console.log(e);             // Reference error: e is not defined
// In this case b is hoisted in function scope not in global. so b is accessible within function.
