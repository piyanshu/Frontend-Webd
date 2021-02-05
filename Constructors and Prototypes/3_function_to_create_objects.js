// javascript me humare pass classes nahi hoti..jo bhi hita hai object hi hota hai

// Agar constructor use kar rahe hain to uske naam ko ham camelcase main use nahi karte..capital use karte hain
function Student(name, rollno, marks){
    //var student = {}
    this.name = name;
    this.rollno = rollno;
    this.marks = marks;
    console.log(this);
    //return student;
};
var student1 = new Student("abcd", 20, 80);
var student2 = new Student("pqrs", 30, 90);
console.log(student1);
console.log(student2);

// agar hume createStudent func ko constructor ki tarah use karna hai to hume new keyword likhna hoga.
// new keyword likhne ke baad ek object create hoga vo object us constructor ke saath bound ho jayega. 
// createStudent constructor ke pass jo this hai vo point kar rha hoga object ko..uski saari values ko initialise karega..aur constructor implicitly object ko return kar dega

var student2 = createStudent("xyz", 50, 90);
// createStudent ek normal func ki tarah call hoga..uske pass koi object nahi hai to by default this point karega window ko
// vo saari properties window object ke andar create hongi..but func implicitly return nahi karta..to student2 ke andar undefined hoga