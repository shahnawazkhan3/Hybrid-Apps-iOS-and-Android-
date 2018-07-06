

// var a :string = "shah";


// console.log(a);

// //======calling function

// // function disply() {
// //     console.log("function calling");
// // }

// // disply();


// //==========================Returning a Function===================

// function demo() :string {
//     return "shah";
// }

// function displyss() {
//     var msg = demo();
//     console.log(msg);
// }
// displyss();


// //==================Parameterized a Function=========

// function paraFunction(n1,s1) {
//     console.log(n1);
//     console.log(s1);
// }


// paraFunction(868,"khan");

// //==================Optional Parameters==========

// function disp_details(id, name, mail_id) {

//     console.log("ID:", id);
//     console.log("Name", name);
     
//     if (mail_id != undefined)
//        console.log("Email Id", mail_id);
//  }
//  //disp_details(123, "John");

//  disp_details(111, "mary", "mary@xyz.com");


//==============Default Parameters============

// function calculate_discount(price :any, rate :any =5) {

//     if (rate === void 0) {
//      rate = 0.50; 
//     }
 
//     var discount = price * rate;
//     console.log("Discount Amount: ", discount);
//  }
//  calculate_discount(1000);
//  calculate_discount(1000, 0.30);


 //==============Anonymous Function===========

//  var msg = function () {
//      return "heloo class";
//  }

//  console.log(msg());

//  ///exmple 2=======

//  var ress = function(n1 :number,n2 :number) {
//      return n1 *n2;
//  };
//  console.log(ress(4,6));

//  //================The Function Constructor=========

//  var myFunction = new Function("a", "b", "return a * b"); 

// var x = myFunction(4, 3); 

// console.log(x);

//=======rection funtion 

// function rectinFun(number) {
    
//     if(number <=0){
//        return 1;
//     }else{
//        return number * rectinFun(number-1);
//     }
// };

// console.log(rectinFun(6));

// (function () { 
//     var x = "Hello!!";   
//     console.log(x)     
//  })()   


 //========================Lambda Functions==============

 var foo = (x:number)=>10 + x 
console.log(foo(100))      //outputs 110 

var foos = (x: any)=> 12* x;
console.log(foos(2));

var fooss = function (x) { 
    return 10 + x; 
};

console.log(fooss(100));      //outputs 110


var food = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 food(100)




 var func = (x)=> { 

    if(typeof x=="number") { 
 
       console.log(x+" is numeric") 
 
    } else if(typeof x=="string") { 
 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")






