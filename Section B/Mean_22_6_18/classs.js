var Car = /** @class */ (function () {
    function Car(Sengine) {
        this.engine = Sengine;
    }
    Car.prototype.disply = function () {
        console.log("start");
    };
    return Car;
}());
var obj = new Car("tyty676");
obj.disply();
console.log(obj.disply());
