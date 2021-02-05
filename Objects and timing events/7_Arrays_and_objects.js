// In javascript, arrays are objects its indices are keys
var arr = [20, 30, 40, 50];
// console.log(arr.0);           // Error: In this case identifier is not valid
console.log(arr[0]);            // 20(Automatically converts to string)
console.log(arr['0']);          // 20

var arr1 = [20, 30, 40, 50];
// The above code can be rewritten as
var obj = {
    '0': 20,
     1: 30,
     2: 40, 
     3: 50 
};
console.log(arr1);
console.log(obj);

// In javascript arrays are objects, but arrays are slighly different form objects 
console.log(obj.length);        // Undefined
console.log(arr1.length);       // 4
arr[6] = 'abc';
console.log(arr);               // [ 20, 30, 40, 50, <2 empty items>, 'abc' ]
// In case of objects we create any property after creating an object. Similarly in case of arrays we create index 6 as 'abc'.

var arr = [20, 30, 40, 50];
var obj = {
    0 : 20, 
    1 : 30,
    2 : 40,
    3 : 50
};
obj.prop1 = 'demo';
console.log(obj);       // { '0': 20, '1': 30, '2': 40, '3': 50, prop1: 'demo' }
arr.prop1 = 'demo';
console.log(arr);       // [ 20, 30, 40, 50, prop1: 'demo' ]
console.log(arr.length);        // 4
arr[10] = 'dd';
console.log(arr);          // [ 20, 30, 40, 50, <6 empty items>, 'dd', prop1: 'demo' ]
