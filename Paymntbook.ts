import paymentmanager from "./Interface";
let pay: paymentmanager  = {
    payid: 256389,
    name: "Shiva",
    bank: "sbi",
    branch: "Ramapruram",
    Mode: "Cash",
    dopayment() {
        return "payment sucessful"
    }
}

console.log(pay.dopayment());

class upimode implements paymentmanager {
    payid: 894564
    name: "Shiva"
    bank: "sbi"
    branch: "Ramapruram"
    Mode:"UPI_ Transfer"
    dopayment() {
        return "upi sucessful"+ upimode;
    }
}
let upi: upimode = new upimode();
console.log(upi.dopayment());
