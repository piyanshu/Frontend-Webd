var a = 10;
function outer(){
    var a = 20;
    var b = 40;
    function inner(){
        var a = 100;
        console.log("Inner", a, b); 
    }
    inner();
    console.log("Outer", a, b);
}
outer();
console.log("Global");

// Every execution context associated with a lexical environment which includes three things
/* 1. declarations of variables
   2. this
   3. reference to the outer environment - jis bhi scope func define hua hai vo scope reference hoga outer environment
*/
// sabse pehle global execution context create hoga 
/* 1. var a
   2. this
   3. uska koi outer environment nahi hota to uske pass reference nahi hoga
*/
// uske baad outer execution context create hoga 
/* 1. var a, b
   2. this
   3. outer func global scope main define hua hai to uska pass reference hoga global scope ka
*/ 
// uske baad inner execution context create hoga 
/*
   1. var a
   2. this
   3. inner func outer scope main define hua hai to uske pass reference hoga outer scope ka
*/