var student = {
    'name' : 'abc',
    rollno : 135,
    marks : 90
};
// ways to access properties
console.log(student.marks);     // 90
console.log(student['marks']);  // 90
// console.log(student[marks]);     ReferenceError: marks is not defined
 
var student = {
    '-name': 'abc',
    2: 'two',  
};
console.log(student);           // { '2': 'two', '-name': 'abc' }
// console.log(student.-name);      SyntaxError: Unexpected token '-'
console.log(student["-name"]);               // abc
// console.log(student.2);         // error
console.log(student['2']);                   // two

var student = {
    marks: 90
};
function printProperty(obj, prop)
{
    // In the below line we cant use console.log(obj.prop) because we dont know what is the prop
    // property marks is in the variable prop so we dont what is the property here. so we can use only square bracket notation.
    console.log(obj[prop]);
}
printProperty(student, 'marks');