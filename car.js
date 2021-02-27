var Audi = /** @class */ (function () {
    function Audi(name, Price, color, engine_cc, cyclinders) {
        this.name = name;
        this.color = color;
        this.Price = Price;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
    }
    Audi.prototype.getFullName = function () {
        return this.name + " ";
    };
    Audi.prototype.Availcar = function () {
        console.log("Car Is Availavle In Market");
    };
    Audi.prototype.TestDrive = function () {
        console.log("Want to Test the Car");
    };
    Audi.prototype.Delivary = function () {
        console.log("Car Can be Delivary in  10 working days......");
    };
    Audi.prototype.Purchase = function () {
        console.log("Bill Paid");
    };
    return Audi;
}());
var car1 = new Audi("A4", 1200000, "Red", 2000, 4);
console.log(car1);
car1.Availcar();
car1.TestDrive();
car1.Delivary();
car1.Purchase();
