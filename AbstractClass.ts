abstract class Car {
    private name: string;

    constructor(name: string) {
        this.name = name
    }
    
    abstract drivecar(): boolean;
    abstract startcar():string;
    abstract Autocontrol():boolean;
    abstract stopcar():string;
    

}
class Audi extends Car {
  
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("AudiA6 is a Audi model")
        return true;
    }
    stopcar():string{
        console.log("Stoped");
        return "stop";
    }
    startcar():string{
    console.log("Car still Running");
    return "Car Runing"
    }
    
    Autocontrol():boolean{
        console.log("Auto Driving control activated");
        return true
        }
}
let x: Audi = new Audi("A6");
console.log("---------------------------- ")
console.log(" Model : Audi A6 Manuf:Audi  ")
console.log("---------------------------- ")
x.drivecar();
x.stopcar();
x.startcar();
x.Autocontrol();

class honda extends Car {
    
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("Honda is a Sedan model")
        return true;
    }
    stopcar():string{
        console.log("Car Stopped");
        return "stop";
    }
    startcar():string{
    console.log("Car still Running");
    return "car started"
    }
    
    Autocontrol():boolean{
        console.log("Auto Driving activated");
        return true
        }
}
let sedan: honda = new honda("city");
console.log("---------------------------- ")
console.log(" Model : Sedan Manuf:Honda City ")
console.log("---------------------------- ")
sedan.drivecar();
sedan.stopcar();
sedan.startcar();
sedan.Autocontrol();

class polo extends Car {
    
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("Polo is a volksWagan model")
        return true;
    }
    stopcar():string{
        console.log("Car Stopped");
        return "stop";
    }
    startcar():string{
    console.log("Car still Running");
    return "car started"
    }
    
    Autocontrol():boolean{
        console.log("Auto Driving activated");
        return true
        }
}
let vw: polo = new polo("volksWagan");
console.log("---------------------------- ")
console.log(" Model :Polo Manuf :volksWagan ")
console.log("---------------------------- ")
vw.drivecar();
vw.stopcar();
vw.startcar();
vw.Autocontrol();


