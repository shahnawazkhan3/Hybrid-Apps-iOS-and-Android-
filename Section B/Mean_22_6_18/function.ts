

//==========Calling a Function=========

// function show() :void {
//     console.log("wellcome");
// }

// show();

//==========Returning a Function===================


// function greet():string { //the function returns a string 
//     return "Hello World" 
//  } 
 
//  function caller() { 
//     var msg = greet() //function greet() invoked 
//     console.log(msg) 
//  } 
 
//  //invoke function 
//  caller()
//  //=======================Parameterized a Function=========

// function para(id:number ,name :string) {
//     console.log(id);
//     console.log(name);
// }
// para(2233,"shah");

//===========


// function disp_details(id, name, mail_id) {

//     console.log("ID:", id);
//     console.log("Name", name);
     
//     if (mail_id != undefined){
//        console.log("Email Id", mail_id)
//     }
//  }
//  disp_details(123, "John");
 //disp_details(111, "mary", "mary@xyz.com");

//  var setName = function (name :string) :void{
//      this.name = name;
//  }

//  var getName = function () :string {
//      return "ssk"
//  }

class Shah {


        public name :string;

        settname = function name(Sname:string)  {
            this.name = Sname; 
        }
        getName =function ():string{
            return this.name;
        }
}

var obj =new Shah();
obj.settname("shahnawaz");
obj.getName();
console.log(obj.getName());
