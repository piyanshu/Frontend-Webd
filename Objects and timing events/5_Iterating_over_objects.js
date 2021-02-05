var student = {
    'name': 'abc',
    rollno: 135,
    marks: 90,
    2: 'two'
};
for(var prop in student)
{
    // Here we cant use student.prop because we dont know the prop
    console.log(prop, student[prop]);           
}
// output
/*
2 two
name abc
rollno 135
marks 90
*/

// 2.
var keys = Object.keys(student);         
console.log(keys);                              // [ '2', 'name', 'rollno', 'marks' ]
var keys = Object.getOwnPropertyNames(student);
console.log(keys);                              // // [ '2', 'name', 'rollno', 'marks' ]



