var student = {
    'name': 'abc',
    rollno: 18,
    marks: 90
};
delete student.marks;
console.log(student);               // { name: 'abc', rollno: 18 }
delete student['rollno'];
console.log(student);               // { name: 'abc' }
