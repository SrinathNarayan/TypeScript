var car = /** @class */ (function () {
    function car(Model, name, Price, color, manuf, engine_cc, cyclinders) {
        this.Model = Model;
        this.name = name;
        this.Price = Price;
        this.color = color;
        this.manuf = manuf;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
    }
    car.prototype.StartCar = function () {
        console.log("Car is Started and Running...");
    };
    car.prototype.AccelerateCar = function () {
        console.log("Acclerate Your Car...");
    };
    car.prototype.OpenCarLock = function () {
        console.log("Car Lock is open...");
    };
    car.prototype.CloseCarLock = function () {
        console.log("car is locked...");
    };
    car.prototype.StopCar = function () {
        console.log("Stop the Car...");
    };
    return car;
}());
var car1 = new car("Audi", "A6", 45000, "Black", "Audi", 1200, 2);
console.log("-------------------------------");
console.log("Car Model: " + car1.Model);
console.log("Car Name:" + car1.name);
console.log("Car Price: " + car1.Price + " Rs only");
console.log("Car Color: " + car1.color);
console.log("Car Manufacturer: " + car1.manuf);
console.log("Car  Engine CC : " + car1.engine_cc + "CC");
console.log("Number Of Cylinders in Car : " + car1.cyclinders);
console.log("-------------------------------");
console.log("You are Driving Slow...");
car1.AccelerateCar();
console.log("-------------------------------");
car1.CloseCarLock();
console.log("Now You Can Drive Your Car...");
console.log("-------------------------------");
car1.OpenCarLock();
console.log("Please Lock The doors Properly...");
console.log("-------------------------------");
car1.StartCar();
console.log("Have a Safe Journey...");
console.log("-------------------------------");
console.log("You Are Driving Fast...");
car1.StopCar();
console.log("-------------------------------");
