// class Car {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     public name :string;
//    setName (name : string) : void {
//       this.name = name;
//    }
//    getName () :string {
//        return this.name;
//    } 
// }
// var obj = new Car ();
// //obj.getName();  // get method calll
// obj.setName("shah");
// console.log(obj.getName());
// class Shape { 
//     public Area:number ;
//     constructor(a:number) { 
//        this.Area = a ;
//     } 
//  } 
//  class Circle extends Shape { 
//     disp():void { 
//        console.log("Area of the circle:  "+this.Area) ;
//     } 
//  }
//  var obj = new Circle(223); 
//  var obj2 = new Shape (566);
//  console.log (obj2.Area);
//  obj.disp();
var Root = /** @class */ (function () {
    function Root(str) {
        this.str = str;
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); //indirectly inherits from Root by virtue of inheritance  
var obj = new Leaf("pakistan green");
//obj.str ="hello" 
console.log(obj.str);
