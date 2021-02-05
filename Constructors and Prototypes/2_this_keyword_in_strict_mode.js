'use strict'

function demo(a, b){
    console.log(this);
    console.log(a, b);
}
demo();
// strict mode ko use karne se..this keyword ke pass window object ki value nahi hogi.this keyword ke pass undefined hoga

var obj = {
    prop1: 20,
    print: function(){
        console.log(this);
    }
}
obj.print();

demo.call(obj, 4, 5);
// call func ke andar obj object pass karne se demo func ke pass jo this keyword hai..ab vo point kar rha hoga obj object ko 
// demo func call hua aur uske andar jo this keyword hai vo point kar rha hai obj ko..to obj print ho jayega
// call func ke andar pehle hume object dalna hota hai jisse bhi hum point karana chahte hain...uske baad arguements

demo.apply(obj, [4, 5]);
// apply func ke andar obj object pass karne se demo func ke pass jo this keyword hai..ab vo point kar rha hoga obj object ko 
// demo func call hua aur uske andar jo this keyword hai vo point kar rha hai obj ko..to obj print ho jayega
// apply func ke andar pehle hume object dalna hota hai jisse bhi hum point karana chahte hain...uske baad arguements hume as array pass karne honge
