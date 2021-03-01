var Trainer = /** @class */ (function () {
    function Trainer() {
        this.work = "Teaching";
    }
    return Trainer;
}());
var Trainee = /** @class */ (function () {
    function Trainee() {
        this.work = "Studing";
    }
    return Trainee;
}());
var Hr = /** @class */ (function () {
    function Hr() {
        this.work = "Supervising";
    }
    Hr.prototype.train = function () {
        console.log(" Cannot Train!");
    };
    return Hr;
}());
var t1 = new Trainer();
var t2 = new Trainee();
var TraineTwo = new Hr();
console.log("--------------------------------");
console.log("Trainer Work: " + t2.work);
console.log("Trainee Work: " + t1.work);
console.log("Hr Work: " + TraineTwo.work);
console.log("--------------------------------");
