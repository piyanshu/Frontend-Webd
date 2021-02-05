console.log(fact(5));          // 120
console.log(factorial(5));     // Error: factorial is not a function
function fact(n)
{
    var ans = 1;
    for(var i=1; i<=n; i++)
    {
        ans = ans*i;
    }
    return ans;
}
var factorial = function fact(n)
{
    var ans = 1;
    for(var i=1; i<=n; i++)
    {
        ans = ans*i;
    }
    return ans;
};
// In case of function expression the error is coming because variable factorial is hoisted upwards 
// When interpreter comes to the line console.log(factorial(5)) it does not knows var factorial is a func 
// So generally we can use func expression because of hoisting advantage
