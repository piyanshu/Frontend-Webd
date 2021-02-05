// The value of this keyword will depends on how we can calling the function.
// 1. global context - Agar hum global context ke andar this keyword ko use karte hai to vo global object ko point karega jo ki window hai.
// 2. function context - Agar humlog func ke andar this keyword ko use karte hai to vo depend karta hai ki hum func ko kis tarah se call kara rahe hain

console.log(this);
// This code can be wriiten in global scope. So javascript engine makes this point to the global object which is window.

var obj = {
    prop1: 20,
    print: function(){
        console.log(this);
    }
}
obj.print();
// Har ek function ke pass this keyword hota hai...to yaha par print ke pass bhi this keyword hoga 
// But print func ko obj object call kar rha hai. to isliye this keyword point kar rha hai object obkj ko 

function demo(){
    console.log(this);
}
var demo2 = function(){
    console.log(this);
}
demo();
demo2(); 
// Har ek function ke pass this keyword hota hai...to yaha par demo ke pass bhi this keyword hoga 
// Humne demo func ko call nahi karaya with the help of object. So by default this keyword takes the value of global object



