
let Trainee: [number, string,string] =[2, "ram", "Trainer"];
console .log("Srm Tech  Trainee Program :" )
console .log("\n ") 
console.log(Trainee);
console .log("Length of the Tuple :" + Trainee.length  );
console.log();
console .log("Using ConCat Fuction" )
Trainee[2] = Trainee[2].concat("-Java");
console.log(Trainee);
console .log("Adding Values using Push" )
console.log(Trainee.push("Batch 1"));
console .log("Length of the Tuple :" + Trainee.length  );
console.log(Trainee);

console.log(Trainee.splice(3) + ":Third Element is Removed from tuple");
console .log("Updating the Tuple :" );
console.log(Trainee);

Trainee[1] = "Lokesh";
console.log("Updated tuple : " + Trainee[1]);
var j;
var n = Trainee;
console.log("Name of the Trainer is: "+ Trainee [1]);  
console.log("Trainer Id:"+ Trainee [0]+" is working as "+Trainee [2]); 
console.log("The Elements in Trainee :");

Trainee.forEach(element => {
    console.log(element);


});