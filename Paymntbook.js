"use strict";
exports.__esModule = true;
var pay = {
    payid: 256389,
    name: "Shiva",
    bank: "sbi",
    branch: "Ramapruram",
    Mode: "Cash",
    dopayment: function () {
        return "payment sucessful";
    }
};
console.log(pay.dopayment());
var upimode = /** @class */ (function () {
    function upimode() {
    }
    upimode.prototype.dopayment = function () {
        return "upi sucessful" + upimode;
    };
    return upimode;
}());
var upi = new upimode();
console.log(upi.dopayment());
