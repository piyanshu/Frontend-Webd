var student = {
    name: 'abc',
    rollno: 135,
    adress: {
        city: 'New Delhi',
        pincode: 110032
    }
};
console.log(student.adress);        // { city: 'New Delhi', pincode: 110032 }
console.log(student.adress.city);   // 'New Delhi'
console.log(student.adress[city]);  // 'New Delhi'
