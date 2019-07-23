import { Employee } from './Employee';

export class Task {



  id: number;
  remark: string;
  atComplete: string;
  emps: Employee[];
  comment: Comment[];
  public Task() {
    //  this is empty task
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getRemark(): string {
    return this.remark;
  }
  public setRemark(rem: string): void {
    this.remark = rem;
  }

  public getatComplete(): string {
    return this.atComplete;
  }
  public setatComplete(date: string): void {
    this.atComplete = date;
  }

  public getEmployees(): Employee[] {
    return this.emps;
  }
  public setEmployees(emp: Employee[]): void {
    this.emps = emp;
  }
  public getComments(): Comment[] {
    return this.comment;
  }
  public setComment(com: Comment[]): void {
    this.comment = com;
  }

}
