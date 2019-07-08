export class Department
{
    id:number
    name:String
    public Department()
    {
     // this  is empty constructor        
    }
    
    public getId():number
    {
        return this.id;
    }
    public setId(id:number):void{
         this.id=id;
    }
   
    public getName():String{
        return this.name;
    }
    public setName(name:String):void
    {
         this.name=name;
    }

}