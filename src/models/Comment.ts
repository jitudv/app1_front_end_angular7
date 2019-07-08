import { Employee } from './Employee';
import {Task} from './Task'
import { fromEventPattern } from 'rxjs';

export class Comment {
 id: number;
 name: String;
 emp: Employee;
 task: Task;
public Comment() {
    //  this is  empty constructor
}

 public getId(): number {
     return this.id;
 }

 public setId(id: number): void {
    this.id = id;
 }

 public getName(): String {
     return this.name;
 }
 public setName(name: String): void {
     this.name = name;
 }

 public getEmp(): Employee {
     return this.emp;
 }
 public setEmployee(emp: Employee): void {
     this.emp = emp;
 }

 public setTask(task: Task): void {
     this.task = task;
 }
 public getTask(): Task {
     return this.task;

 }
}
