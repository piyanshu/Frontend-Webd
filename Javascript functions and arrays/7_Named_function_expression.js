// var a = 10;      expression 
/*
We can made a func with two types
1. function declaration
2. function expression - Variable can hold the value as function 
*/
var factorial = function fact(n)
{
    var ans = 1;
    for(var i=1; i<=n; i++)
    {
        ans = ans*i;
    }
    return ans;
};
console.log(factorial);         // It can prints the whole function
console.log(factorial(5));      // 120
// Named function expression - Function has name(fact) for the variable(factorial).
// We can use the fact inside the function expression factorial, but we cant use it outside
// If i call above function, console.log(fact(4)); then it shows error fact is not defined
var factorial = function fact(n)
{
    if(n == 0)
    {
        return 1;
    }
    // Using fact inside func
    return n*fact(n-1);
}

// Anonymous func expression - Did not give any name to a function
var factorial = function(n)
{
    var ans = 1;
    for(var i=1; i<=n; i++)
    {
        ans = ans*i;
    }
    return ans;
};
console.log(factorial);     // Prints the whole func
