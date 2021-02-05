// objects = They are collection of key value pairs
// Student is an object having no properties
var student = {};
console.log(typeof(student));       // object

var student = {
    'name': 'abc',
    rollno: 135,
    marks: 90
};
// Student is an object having properties. Properties are keys like name, rollno.
// The data type of keys are always strings, so adding quotes are optional
console.log(student);       // { name: 'abc', rollno: 135, marks: 90 }
console.log(student.marks);     // 90
student.marks = 100;
console.log(student);       // { name: 'abc', rollno: 135, marks: 100 }
console.log(student.sem);   // Undefined
console.log(student);       // { name: 'abc', rollno: 135, marks: 100 }
student.sem = 4;
console.log(student);       // { name: 'abc', rollno: 135, marks: 100, sem: 4 }

// In javascript objects do not have any type of access modifiers and we can add any prototype at any point of time
var obj = new Object();         // Another way of creating an object
console.log(typeof(obj));       // object