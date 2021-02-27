var Trainee = [2, "ram", "Trainer"];
console.log("Srm Tech  Trainee Program");
var TrainerId = Trainee[0], TraineeName = Trainee[1], Platfrom = Trainee[2];
console.log(Trainee);
console.log("Length of the Tuple");
console.log(Trainee.length);
console.log("Using ConCat Fuction");
Trainee[2] = Trainee[2].concat("-Java");
console.log(Trainee);
console.log("Adding Values using Push");
console.log(Trainee.push("Batch 1"));
console.log(Trainee);
console.log(Trainee.splice(3) + " \nThird Element is Remoed from tuple");
Trainee[1] = "Lokesh";
console.log("updated tuple : " + Trainee[1]);
var j;
var n = Trainee;
console.log("The Elements in Trainee");
// for (j in n) {
//     console.log(n[j]);
// }
Trainee.forEach(function (element) {
    console.log(element);
});
