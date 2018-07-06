

///===========get and set method===========

class hybrid {

    public name :string;
     

    setNAME (Sname:string) :void{
        this.name=Sname;
    }
   
    getName ():string{
        return this.name;
    }
   

}

var obj =new hybrid();

obj.setNAME("Umair");
obj.getName();

console.log("class hybide student  name  "+obj.getName());