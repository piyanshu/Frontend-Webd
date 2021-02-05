// var obj points to an object where the object has been created
var obj = {
    'p1' : 10
};
// obj2 and obj points to the same object
var obj2 = obj;
obj2.p1 = 100;
console.log(obj);               // { p1: 100 }
console.log(obj2);              // { p1: 100 }
console.log(obj == obj2);       // True(same location)
console.log(obj === obj2)       // True
obj2 = {
    'p1': 100
}
console.log(obj);               // { p1: 100 }
console.log(obj2);              // { p1: 100 }
console.log(obj == obj2);       // False