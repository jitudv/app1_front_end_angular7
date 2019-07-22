import { Employee } from './Employee';
import { Task } from './Task';
import { fromEventPattern } from 'rxjs';

export class Comment {


  id: number;
  commentRemark: string;
  dateTimeComment: string;
  task: Task;
  employee: Employee;

  public Comment(commentRemark: string, dateTimeComment: string) {
    this.commentRemark = commentRemark;

    this.dateTimeComment = dateTimeComment;
  }




  public getId(): number {
    return this.id;
  }

  public getCommentRemark(): string {

    return this.commentRemark;
  }

  public setCommentRemark(commentRemark: string) {
    this.commentRemark = commentRemark;
  }

  public getEmployee(): Employee {
    return this.employee;
  }

  public setEmployee(employee: Employee) {
    this.employee = employee;
  }

  public setId(id: number) {
    this.id = id;
  }


  public getDateTimeComment(): string {
    return this.dateTimeComment;
  }

  public setDateTimeComment(dateTimeComment: string) {
    this.dateTimeComment = dateTimeComment;
  }

  public getTask(): Task {
    return this.task;
  }

  public setTask(task: Task) {
    this.task = task;
  }

  public getEmp(): Employee {
    return this.employee;
  }

  public setEmp(employee: Employee) {
    this.employee = employee;
  }



}
