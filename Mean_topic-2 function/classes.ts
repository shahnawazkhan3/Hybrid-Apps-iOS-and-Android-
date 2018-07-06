

// class Car {

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
 



class Root { 
    public str:string; 

    constructor (str :string){
        this.str =str;
    }
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
 var obj = new Leaf("pakistan green"); 
 //obj.str ="hello" 
 console.log(obj.str)

