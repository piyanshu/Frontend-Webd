// The func name is written in the form of camelcase first word letter is small and second word letter is capital 
function showAlert()
{
    alert('Hey');
}
showAlert();
// There is no need to declare the parameter msg
// msg is parameter
function showAlert(msg)
{
    alert(msg);
}
showAlert('Hello!!');
// 'Hello!!' is an arguement

function sum(a, b)
{
    return a+b; 
}
var result = sum(3, 4);
console.log(result);                // 10

function sum(a, b)
{
    console.log(a, b);              // 4 Undefined
    return a+b;
}
// If we pass less no of arguements then it will set as undefined
var result = sum(4);
console.log(result);                // NAN

function sum(a, b)
{
    console.log(a, b);          // 4 6
    return a+b;
}
var result = sum(4, 6, 9);
console.log(result);            // 10
