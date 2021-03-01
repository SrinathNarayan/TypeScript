
  enum Weeks{
    Mon = "MonDay",
    Tue = "TuesDay",
    Wed = "WednesDay",
    Thrus = "ThrusDay",
    Fri = "FriDay",
    Sat = "SaturDay",
    Sun ="SunDay"
    
}

function checkStatus(status: Weeks): void {  
  console.log(status);  
} 
console.log("Working Status In a Week :")
console.log("-------------------------")
console.log("Only WeekDays:")
console.log("-------------")
checkStatus(Weeks.Mon);  
checkStatus(Weeks.Tue); 
checkStatus(Weeks.Wed);  
checkStatus(Weeks.Thrus); 
checkStatus(Weeks.Fri);    
console.log("-------------")
console.log("Only Weekends:")
console.log("-------------")
checkStatus(Weeks.Sun);  
checkStatus(Weeks.Sat);  

enum Languages{
  Monday = "Android",
  Firday = "Vbnet",
  Sunday= "Typescript",
  Saturday= "Angular",
  Wednesday= "Dbms",
  TuesDay= "Java"
    


  }
  function checkCode(code : Languages):void {  
    console.log(code);  
  } 
  console.log("\n")
  console.log("Language Status In a Week :")
  console.log("-------------------------")
  console.log("Only WeekDays:")
  console.log("-------------")
  checkCode(Languages.Monday);  
  checkCode(Languages.TuesDay); 
  checkCode(Languages.Firday);  
  console.log("-------------")   
  console.log("Only Weekends:");
  console.log("-------------");
  checkCode(Languages.Sunday);  
  checkCode(Languages.Saturday);  
  
    
  
