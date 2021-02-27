var Months;
(function (Months) {
    Months[Months["jan"] = 1] = "jan";
    Months[Months["Feb"] = 2] = "Feb";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["june"] = 5] = "june";
    Months[Months["July"] = 6] = "July";
})(Months || (Months = {}));
var getMonth = function () { return 7; };
var Mymon = getMonth();
console.log(Months[Mymon]);
console.log(" ");
var Languages;
(function (Languages) {
    Languages[Languages["Android"] = 0] = "Android";
    Languages[Languages["java"] = 1] = "java";
    Languages[Languages["Vbnet"] = 2] = "Vbnet";
    Languages[Languages["Angular"] = 3] = "Angular";
    Languages[Languages["Typescript"] = 4] = "Typescript";
    Languages["Dbms"] = "Sql";
})(Languages || (Languages = {}));
console.log(Languages);
