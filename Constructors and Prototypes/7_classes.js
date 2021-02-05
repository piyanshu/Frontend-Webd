// Classes helps us to write the code in easier way.It automatically do all things
// When object will create constructor will be called and getprice func will also be placed in prototype 
class Vehicle{
    constructor(numwheels, price){
        this.numwheels = numwheels;
        this.price = price;
    }
    // We do not have to write the function keyword
    getPrice(){
        return this.price; 
    }
}
var vehicle1 = new Vehicle(4, 10000);
console.log(vehicle1);
console.log(Object.getPrototypeOf(vehicle1));