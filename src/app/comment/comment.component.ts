import { Component, OnInit } from '@angular/core';

import { CommentService } from 'src/services/comment.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private comservice:CommentService ,private dataService:DataService ) { }

  comlist:Object
  taskid:string
  ngOnInit()
  {
   this.dataService.currentMessage.subscribe((res)=>{this.taskid=res})
   console.log("this is task id on comment component "+this.taskid)
   this.comservice.getComments(this.taskid).subscribe((res)=>{
     console.log(res)
   }
     )
  }



}
