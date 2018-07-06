

var a : string = "shah";
console.log(a);

var b : number =6;
console.log(b);

///===================Calling a Function=========

function disply() {
    console.log("hello");
}
disply();

///===================return function a Function=========

function  retFun() {
    return "shah khan";
}

function show() {
    var msg = retFun();

console.log(msg);
    
}

show();


//==================Parameterized a Function=========

function parFun(n1 :string , n2 :number) {
    console.log("name  "+n1);
    console.log("id "+n2);
}

parFun("faisal", 656);


//==================Optional Parameters==========

function disp_details(id :any, name :any, mail_id :any) {

    console.log("ID:", id);
    console.log("Name", name);
     
    if (mail_id != undefined){
       console.log("Email Id", mail_id);
    }
 }
//disp_details(123, "John");
 disp_details(111, "mary", "mary@xyz.com");

 //==============Default Parameters============

 function calculate_discount(price :any, rate :any =5) {

    if (rate == 0) {
     rate = 0.50; 
    }
 
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
 }
 calculate_discount(1000);
 calculate_discount(1000, 0.30);

 //==============Anonymous Function===========

 var shah = function () {
     return "shah";
 }

 console.log(shah());

 //================Anonymous function with parameters========

 
















