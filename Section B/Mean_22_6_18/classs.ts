

class Car {

    public engine :string;
 
       constructor(Sengine :string){
           this.engine =Sengine;
       }

       disply(): void{
       console.log("start");
       }

   
 }

 var obj = new Car("tyty676");
 obj.disply();

 console.log(obj.disply());

