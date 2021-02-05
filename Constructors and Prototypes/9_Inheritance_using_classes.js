class Vehicle{
    constructor(numwheels, price){
        this.numwheels = numwheels;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    printDescription(){
        console.log("vehicle", this.numwheels, this.price);
    }
}
// Class car can inherits from vehicle class so it is compulsory to call the constructor of vehicle class
// We can us keyword super to call parents constructor
// Always use super before this otherwise it gives an error
class Car extends Vehicle{
    constructor(price, numdoors){
        super(4, price);
        this.numdoors = numdoors;
    }
    printDescription(){
        // Agar hume parent ki kisi bhi cheez ko use karna hai to hum super keyword ko use karenge
        super.printDescription();
        console.log("car");
    }
}
var c = new Car(100000, 6);
console.log(c);
console.log(c.printDescription());