var arr = new Array(1, 2, 3, 4, 5);
console.log(arr);           // [ 1, 2, 3, 4, 5 ]
console.log(arr[3]);       // 4
console.log(arr[6]);       // Undefined
arr[2] = 90;
console.log(arr);           // [ 1, 2, 90, 4, 5 ]
arr[7] = 100;
console.log(arr);           // [ 1, 2, 90, 4, 5, <2 empty items>, 100 ]
console.log(arr.length);    // 8
console.log(arr[5]);        // Undefined

// ek value dalne se array ka size set ho jayega
var arr1 = new Array(100);
console.log(arr1);          // [ <100 empty items> ]

var arr2 = new Array(100, 200);     // [ 100, 200 ]
console.log(arr2);

var arr3 = [4, 5, 6, 7];
console.log(arr3);          // [4, 5, 6, 7]
console.log(arr3.length);   // 4
var x = arr3.push(10);
console.log(x);             // 5(gives index at which it can be placed)
console.log(arr3);          // [ 4, 5, 6, 7, 10 ]
var y = arr3.pop();
console.log(y);             // 10(deleted element from array)
console.log(arr3);          // [4, 5, 6, 7]

// shift -> left shift 
var z = arr3.shift();
console.log(z);             // 4(element which is out of the array)
console.log(arr3);           // [ 5, 6, 7 ]
// unshift -> right shift
var w = arr3.unshift(8);
console.log(w);             // 4(gives size)
console.log(arr3);           // [ 8, 5, 6, 7 ]

// splice func in Arrays
// This func will take three arguemments 
/*
1. Start Index
2. Deletion count
// If we have to delete any element mention no. of elements
// If we mention 0, 0 elements will be deleted
// If we mention nothing all the elements will be deleted
3. Elements to be inserted(optional)
*/
var arr4 = [2, 3, 4, 5, 6];
arr.splice(1, 1);
console.log(arr4);          // [2, 4, 5, 6]
arr4.splice(1);
console.log(arr);           // [2]
arr4 = [2, 3, 4, 5, 6];
arr.splice(2, 0, 10);       // [2, 3, 10, 4, 5, 6]
arr.splice(2, 0, 10, 20, 40);   // [2, 3, 10, 20, 40, 10, 4, 5, 6]
arr.splice(2, 2, 40, 50);       // [2, 3, 40, 50, 40, 10, 4, 5, 6]