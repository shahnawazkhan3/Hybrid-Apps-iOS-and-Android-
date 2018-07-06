///===========get and set method===========
var hybrid = /** @class */ (function () {
    function hybrid() {
    }
    hybrid.prototype.setNAME = function (Sname) {
        this.name = Sname;
    };
    hybrid.prototype.getName = function () {
        return this.name;
    };
    return hybrid;
}());
var obj = new hybrid();
obj.setNAME("Umair");
obj.getName();
console.log("class hybide student  name  " + obj.getName());
