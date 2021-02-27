import paymentbook from './Interface';


let modepay : paymentbook = {
    payid: 256389,
    name: "Sri",
    bank: "sbi",
    Mode:"cash",
    branch: "gunidy",
    Amt: 20000,
    dopayment() {
        return "payment sucessful"
    }




}

console.log(modepay.dopayment());

class upimode implements paymentbook {
    Amt: number;
    Mode: string;
    payid: 894564
    name: "gpay"
    bank: "sbi"
    branch: "sholinganallur"
    dopayment() {
        return "upi sucessful"
    }


}

class card implements paymentbook {
    Amt: number;
    Mode: string;

    payid: 5669
    name: "rupay"
    bank: "sbi"
    branch: "sholinganallur"
    dopayment() {
        return "debited from your card"

    }

}
let upi: upimode = new upimode();
console.log(upi.dopayment());
let cd: card = new card();
console.log(cd.dopayment());
console.log(modepay);