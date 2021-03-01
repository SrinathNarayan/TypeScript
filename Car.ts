class car {
    Model: string;
    name: string;
    Price: number;
    color: string;
    manuf: string;
    engine_cc: number;
    cyclinders: number;

    constructor( Model: string, name: string,  Price: number, color: string,manuf: string,engine_cc: number, cyclinders: number) {
    this.Model= Model;
    this.name = name;
    this.Price = Price;
    this.color = color;
    this.manuf=manuf;
    this.engine_cc = engine_cc;
    this.cyclinders = cyclinders;


    }
    StartCar():void{
  
    console.log("Car is Started and Running...");
    }
    AccelerateCar():void{
    console.log("Acclerate Your Car...");
    }
    OpenCarLock():void{
    console.log("Car Lock is open...");
  
    } 
    CloseCarLock():void{
    console.log("car is locked...");
    }
    StopCar():void{
    console.log("Stop the Car...");
    } 
}
let car1 = new car("Audi","A6",45000,"Black","Audi",1200,2);
console.log("-------------------------------");
console.log( "Car Model: "+ car1.Model);
console.log( "Car Name:" + car1.name);
console.log( "Car Price: "+ car1.Price+ " Rs only");
console.log( "Car Color: "+ car1.color);
console.log( "Car Manufacturer: "+ car1.manuf);
console.log( "Car  Engine CC : "+ car1.engine_cc +"CC");
console.log( "Number Of Cylinders in Car : "+ car1.cyclinders);
console.log("-------------------------------");
console.log("You are Driving Slow...")
car1.AccelerateCar();
console.log("-------------------------------");
car1.CloseCarLock();
console.log("Now You Can Drive Your Car...")
console.log("-------------------------------");
car1.OpenCarLock();
console.log("Please Lock The doors Properly...")
console.log("-------------------------------");
car1.StartCar();
console.log("Have a Safe Journey...");
console.log("-------------------------------");
console.log("You Are Driving Fast...");
car1.StopCar();
console.log("-------------------------------");

    