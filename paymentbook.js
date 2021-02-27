"use strict";
exports.__esModule = true;
var modepay = {
    payid: 256389,
    name: "Sri",
    bank: "sbi",
    Mode: "cash",
    branch: "gunidy",
    Amt: 20000,
    dopayment: function () {
        return "payment sucessful";
    }
};
console.log(modepay.dopayment());
var upimode = /** @class */ (function () {
    function upimode() {
    }
    upimode.prototype.dopayment = function () {
        return "upi sucessful";
    };
    return upimode;
}());
var card = /** @class */ (function () {
    function card() {
    }
    card.prototype.dopayment = function () {
        return "debited from your card";
    };
    return card;
}());
var upi = new upimode();
console.log(upi.dopayment());
var cd = new card();
console.log(cd.dopayment());
console.log(modepay);
