


// var a :string ="shah";
// console.log(a);


// var isDone: boolean = false;
// console.log(isDone);

// var list: number[] = [1, 2, 3];
// var notSure: any = "shah";


// var name1:string = "John"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("name"+name1) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)



var global_num = 12

          //global variable 

class Numbers { 

   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val)

//=========================TypeScript - Operators==================


var num1 :number = 2;
var num2 : number = 4;
var res : number =0;

res = num1 +num2;
console.log(res);

