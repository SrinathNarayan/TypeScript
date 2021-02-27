class Audi {
    name: string;
    
    Price: number;
    color: string;
    engine_cc: number;
    cyclinders: number;
    constructor(name: string,  Price: number, color: string, engine_cc: number, cyclinders: number) {
        this.name = name;
        
        this.color = color;
        this.Price = Price;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;


    }
    public getFullName(): string {
        return `${this.name} `;
    }
        Availcar():void{
            console.log("Car Is Availavle In Market");
        }
        TestDrive():void{
            console.log("Want to Test the Car");
        }
        Delivary():void{
            console.log("Car Can be Delivary in  10 working days......");
        } 
        Purchase():void{
            console.log("Bill Paid");
        }
    
        
    }
let car1=new Audi("A4",1200000,"Red",2000,4);
console.log(car1)
car1.Availcar();
car1.TestDrive();
car1.Delivary();
car1.Purchase();

        
    