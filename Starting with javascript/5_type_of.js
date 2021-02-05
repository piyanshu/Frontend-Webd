var a = 10;
console.log(typeof(a));          // Number

a = true;
console.log(typeof(a));          // Boolean

var b;
console.log(typeof(b));          // Undefined

a = null;
console.log(typeof(a));          // object(bug in a javscript)

console.log(typeof(Infinity));   // Number
console.log(typeof(NaN));        // Number
