var Weeks;
(function (Weeks) {
    Weeks["Mon"] = "MonDay";
    Weeks["Tue"] = "TuesDay";
    Weeks["Wed"] = "WednesDay";
    Weeks["Thrus"] = "ThrusDay";
    Weeks["Fri"] = "FriDay";
    Weeks["Sat"] = "SaturDay";
    Weeks["Sun"] = "SunDay";
})(Weeks || (Weeks = {}));
function checkStatus(status) {
    console.log(status);
}
console.log("Working Status In a Week :");
console.log("-------------------------");
console.log("Only WeekDays:");
console.log("-------------");
checkStatus(Weeks.Mon);
checkStatus(Weeks.Tue);
checkStatus(Weeks.Wed);
checkStatus(Weeks.Thrus);
checkStatus(Weeks.Fri);
console.log("-------------");
console.log("Only Weekends:");
console.log("-------------");
checkStatus(Weeks.Sun);
checkStatus(Weeks.Sat);
var Languages;
(function (Languages) {
    Languages["Monday"] = "Android";
    Languages["Firday"] = "Vbnet";
    Languages["Sunday"] = "Typescript";
    Languages["Saturday"] = "Angular";
    Languages["Wednesday"] = "Dbms";
    Languages["TuesDay"] = "Java";
})(Languages || (Languages = {}));
function checkCode(code) {
    console.log(code);
}
console.log("\n");
console.log("Language Status In a Week :");
console.log("-------------------------");
console.log("Only WeekDays:");
console.log("-------------");
checkCode(Languages.Monday);
checkCode(Languages.TuesDay);
checkCode(Languages.Firday);
console.log("-------------");
console.log("Only Weekends:");
console.log("-------------");
checkCode(Languages.Sunday);
checkCode(Languages.Saturday);
