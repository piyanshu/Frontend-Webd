function vehicle(numwheels, price){
    this.numwheels = numwheels;
    this.price = price;
}
// Har object ke pass reference hota hai apne prototype ka
// getprice func ki sirf ek hi copy create hogi prototype me..har object usi copy ko share karega
vehicle.prototype.getPrice = function(){
    return this.price;
}
var vehicle1 = new vehicle(10, 1000);
var vehicle2 = new vehicle(20, 2000);
console.log(vehicle1.getPrice());
console.log(vehicle.prototype);
console.log(vehicle);

// benefits of prototype
// 1. jitne bhi objects ab create honge vo sabhi share kar rahe honge getprice func ko..sirf single copy hi create ho rahi hogi getPrice func ki prototype me
// 2. We can add the properties at the runtime also
vehicle.prototype.color = "black";
console.log(vehicle1.color);
// aisa karne se vehicle1 pehle apne andar color property check karega uske baad apne prototype me
// color property inherit hui hai prototype se
