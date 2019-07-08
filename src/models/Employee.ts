import { Address } from './Address';
import { Department } from './Department';
import { Task } from './Task';

export class Employee {



     id: number; // it will generate automatacaly
    //  name: string;
    //  lastname; string;
    //  email: string;
    //  password: string;
    //  mobno: string;
    //  dob:string;
    //  gender: string;
    //  empid: string;
     dept: Department;
     address: Address;
     task: Task[];

     public Employee() {
         // this is empty constructor
     }
      constructor(private name:string, private lastname:string  , private  email:string , private password:string ,private mobno:string,private dob:string , private gender:string, private empid:string )
     {
        // this is paramitarized  constructor
     }


    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
         this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmpId(): String {
        return this.empid;
    }

    public setEmpId(empid: string): void {
         this.empid = empid;
    }

    public getDepartment(): Department {
        return this.dept;
    }
   public setDepartment(dept: Department): void {
        this.dept = dept;
   }

   public getAddress(): Address {
       return this.address;
   }

   public setAddress(adr: Address): void {
       this.address = adr;
   }
   public getTasks(): Object[] {
     return this.task;
   }

   public setTask(t: Task[]) {
          this.task = t;
   }

}
