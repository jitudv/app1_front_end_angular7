import { Employee } from './Employee';


export class Task{
        
    
    
       id:number
       remark:String;
       atComplete:Date;
       emps:Employee[];
       comment:Comment[];
       public Task()
       {
           //  this is empty task 
       }

       public getId():number
       {
           return this.id;
       }
       public setId(id:number):void{
            this.id=id;
       }
    
      public getRemark():String
      {
         return this.remark;
      }
      public setRemark(rem:String):void{
          this.remark=rem;
      }

      public getDateAtComplete():Date{
          return this.atComplete;
      }
      public setAtCompleteDate(date:Date):void{
          this.atComplete=date;
      }
   
      public getEmployees():Employee[]
      {
          return this.emps;
      }
      public setEmployees(emp:Employee[]):void
      {
        this.emps=emp;
      }
      public getComments():Comment[]
      {
          return this.comment;
      }
      public setComment(com:Comment[]):void
      {
          this.comment=com;
      }

}