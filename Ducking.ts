class Trainer {  
    work = "Teaching";  
}  
class Trainee {  
    work = "Studing";  
}  
class Hr {  
    work = "Supervising";  
    train(){  
        console.log(" Cannot Train!");  
    }  
}  
let t1: Trainee = new Trainer();  
let t2: Trainer = new Trainee();  
let TraineTwo: Trainee = new Hr();  
console.log("--------------------------------") ;
console.log("Trainer Work: "+t2.work);  
console.log("Trainee Work: "+t1.work);  
console.log("Hr Work: "+TraineTwo.work);  
console.log("--------------------------------"); 





