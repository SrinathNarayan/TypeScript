var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(val) {
        return _super.call(this, val) || this;
    }
    Audi.prototype.drivecar = function () {
        console.log("AudiA6 is a Audi model");
        return true;
    };
    Audi.prototype.stopcar = function () {
        console.log("Stoped");
        return "stop";
    };
    Audi.prototype.startcar = function () {
        console.log("Car still Running");
        return "Car Runing";
    };
    Audi.prototype.Autocontrol = function () {
        console.log("Auto Driving control activated");
        return true;
    };
    return Audi;
}(Car));
var x = new Audi("A6");
console.log("---------------------------- ");
console.log(" Model : Audi A6 Manuf:Audi  ");
console.log("---------------------------- ");
x.drivecar();
x.stopcar();
x.startcar();
x.Autocontrol();
var honda = /** @class */ (function (_super) {
    __extends(honda, _super);
    function honda(val) {
        return _super.call(this, val) || this;
    }
    honda.prototype.drivecar = function () {
        console.log("Honda is a Sedan model");
        return true;
    };
    honda.prototype.stopcar = function () {
        console.log("Car Stopped");
        return "stop";
    };
    honda.prototype.startcar = function () {
        console.log("Car still Running");
        return "car started";
    };
    honda.prototype.Autocontrol = function () {
        console.log("Auto Driving activated");
        return true;
    };
    return honda;
}(Car));
var sedan = new honda("city");
console.log("---------------------------- ");
console.log(" Model : Sedan Manuf:Honda City ");
console.log("---------------------------- ");
sedan.drivecar();
sedan.stopcar();
sedan.startcar();
sedan.Autocontrol();
var polo = /** @class */ (function (_super) {
    __extends(polo, _super);
    function polo(val) {
        return _super.call(this, val) || this;
    }
    polo.prototype.drivecar = function () {
        console.log("Polo is a volksWagan model");
        return true;
    };
    polo.prototype.stopcar = function () {
        console.log("Car Stopped");
        return "stop";
    };
    polo.prototype.startcar = function () {
        console.log("Car still Running");
        return "car started";
    };
    polo.prototype.Autocontrol = function () {
        console.log("Auto Driving activated");
        return true;
    };
    return polo;
}(Car));
var vw = new polo("volksWagan");
console.log("---------------------------- ");
console.log(" Model :Polo Manuf :volksWagan ");
console.log("---------------------------- ");
vw.drivecar();
vw.stopcar();
vw.startcar();
vw.Autocontrol();
