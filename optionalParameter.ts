//optional parameter
console.log("------------------------------");
console.log("Optional Parameters"); 
console.log("------------------------------"); 
function showDetails(id:number,name:string,Platfrom?:string) {  
   
    console.log("ID:", id, " Name:",name);   

    if(Platfrom!=undefined)    
    console.log("PlatFrom:",Platfrom);   
    
 }  
 
 showDetails(321,"Muthu");  
 showDetails(123,"Shiva","Angular");  
console.log("------------------------------"); 
 
    //default parameter

console.log("Default Parameters"); 
console.log("------------------------------"); 
    let train=function (name: string,Platfrom:string="Java"){
        return name+" "+Platfrom+" !...";
    
    }
console.log(train("Shiva -"));
console.log(train("Muthu -","Angular"));
console.log(train("Mota -"))
console.log(train("Piyush -","Android"));
console.log("------------------------------"); 
    //rest parameter
console.log("Rest Parameters"); 
console.log("------------------------------"); 
function test(...args: number[]) {
    console.log(args.length);
    console.log(args);
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
test(1,3);
   