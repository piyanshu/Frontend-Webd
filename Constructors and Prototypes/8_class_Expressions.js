// Classes are special functions.We cannot use them as normal functions..when we write them without new keyword it give error
// Classes are not hoisted
// class Vehicle{
//     constructor(numwheels, price){
//         this.price = price;
//         this.numwheels = numwheels;
//     } 
//     getPrice(){
//         return this.price;
//     }
// }
// var vehicle1 = new Vehicle(2, 100000);

// class expressions
// class expressions cannot be hoisted
var Vehicle = class{
    constructor(numwheels, price){
        this.price = price;
        this.numwheels = numwheels;
    } 
    getPrice(){
        return this.price;
    }
}
var vehicle1 = new Vehicle(2, 100000);
