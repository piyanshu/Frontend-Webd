function vehicle(numwheels, price){
    this.numwheels = numwheels;
    this.price = price;
    this.getPrice = function(){
        return this.price;
    }
}
var vehicle1 = new vehicle(4, 800000);
var vehicle2 = new vehicle(2, 60000);
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle.prototype);
// Humlog objects create kar rahe hain using constructor function to har object ke andar getprice func ki copy create hojayegi jiski wajah se memory waste hogi
// to memory waste na ho isliye hum prototypes use karte hain

// jab kabhi bhi hum koi bhi func banate hain to uske do object create hote hain func and aur func ka prototype
// agar hum func ko constructor ki tarah use karte hain tabhi prototype ki baat hoti hai varna to nahi
// agar hume func se prototype pe jana hai to 
console.log(vehicle.prototype);

// agar hume prototype se func pe jana hai to
console.log(vehicle.prototype.constructor); 
