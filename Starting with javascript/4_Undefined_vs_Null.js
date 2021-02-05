var a;
console.log(a);
// The output is undefined...which means we do not set its value

a = null;
console.log(a);
// The output is null...which means we have set the value but we dont know what is the value

var a = 1/0;
console.log(a);
// The output is Infinity...which means max_value which can be stored beyond that, it is infinity

console.log(Math.pow(10, 2));
console.log(Math.pow(10, 1000));    // Infinity

console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308

console.log(Math.sqrt(-1));         // NAN - Not a Number

// parseInt func helps to convert a string to intger
console.log(parseInt('100'));       // 100(but not as string)
console.log(parseInt('aaaa'));      // NAN

