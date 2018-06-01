// var a = "shah";
// console.log(a);
// var names:string = "John"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("name"+names) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)
// var global_num = 12
//           //global variable 
// class Numberss { 
//    num_val = 13;             //class variable 
//    static sval = 10;         //static field 
//    storeNum():void { 
//       var local_num = 14;    //local variable 
//    } 
// } 
// console.log("Global num: "+global_num)  
// console.log(Numberss.sval)   //static variable  
// var obj = new Numberss(); 
// console.log("Global num: "+obj.num_val)
//============Arithmetic operators=========//
// var num1 : number =2;
// var num2 : number =4;
// var res: number =0;
// res = num1 +num2;
// console.log(res);
// res = num1 - num2; 
// console.log("Difference: "+res) ;
// res = num1*num2 ;
// console.log("Product:    "+res) ;
// res = num1/num2 ;
// console.log("Quotient:   "+res);
// res = num1%num2 ;
// console.log("Remainder:   "+res) ;
// num1++ ;
// console.log("Value of num1 after increment "+num1) ;
// num2-- ;
// console.log("Value of num2 after decrement "+num2);
//====================Relational Operators==========
var num1 = 2;
var num2 = 4;
var res = num1 > num2;
console.log(res);
res = num1 < num2;
console.log("num1 lesser than num2: " + res);
res = num1 >= num2;
console.log("num1 greater than or equal to  num2: " + res);
res = num1 <= num2;
console.log("num1 lesser than or equal to num2: " + res);
res = num1 == num2;
console.log("num1 is equal to num2: " + res);
res = num1 != num2;
console.log("num1 is not equal to num2: " + res);
var avg = 20;
var percentage = 90;
console.log("Value of avg: " + avg + " ,value of percentage: " + percentage);
var res = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res);
var res = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res);
var res = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res);
