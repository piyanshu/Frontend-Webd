function vehicle(numwheels, price){
    this.numwheels = numwheels;
    this.price = price;
}
vehicle.prototype.getPrice = function(){
    return this.price;
}
var vehicle1 = new vehicle(10, 1000);

// Accessing the prototype from object
console.log(vehicle1.__proto__);
// This will be deprecated and cannot be use but it is still in ES6
console.log(vehicle1.__proto__ === vehicle.prototype);

console.log(Object.getPrototypeOf(vehicle1));
console.log(Object.getPrototypeOf(vehicle1) === vehicle.prototype)

// To check the prototype of any object
console.log(vehicle.prototype.isPrototypeOf(vehicle1));

// To check the property of any object because object can inherit some properties from its prototype
console.log(vehicle1.hasOwnProperty('price'));

vehicle.prototype.color = "black";
// aisa karne se prototype ki property change nahi hogi lekin vehicle1 ke passapni ek color property create hojayegi
vehicle1.color = "white";
console.log(vehicle1.hasOwnProperty('color'));
