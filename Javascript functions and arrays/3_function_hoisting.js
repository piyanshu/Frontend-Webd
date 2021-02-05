console.log(j);
hoistDemo();
// hoistDemo func global scope me declare kara gaya hai to vo global scope me sabse upar hoist ho jayega
function hoistDemo()
{
    console.log(i);
    var i = 10;
}
var j = 10;

// Javascript interpreter moves all the functions and variable declarations at the top according to their scope 
