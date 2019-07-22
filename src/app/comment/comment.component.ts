import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Comment } from 'src/models/Comment';
import { CommentService } from 'src/services/comment.service';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { UserPanelComponent } from '../user-panel/user-panel.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']

})
export class CommentComponent implements OnInit {

  constructor(private comservice: CommentService, private dataService: DataService, private cookie: CookieService) { }

  // tslint:disable-next-line: ban-types
  comlist: Object;
  taskid: string;
  commentRemark: string = ' ';
  comment = new Comment();
  ngOnInit() {
    // this.dataService.currentMessage.subscribe((res)=>{this.taskid=res})
    this.taskid = this.cookie.get('taskid');
    console.log('this is task id on comment component ' + this.taskid);
    this.comservice.getComments(this.taskid).subscribe((res) => {
      this.comlist = res;
      console.log(res);
    }
    );
  }
    public addComment() {
    // tslint:disable-next-line: label-position
    // alert(' now   comment is  \t  ' + this.commentRemark);
    if (this.commentRemark !== ' '  &&  this.commentRemark.split(' ')[0] ) {
      // alert('first if working  ')
      this.comment.setCommentRemark(this.commentRemark);
      console.log('vlaue of text erea' + this.commentRemark);
      // alert(' comment erea is not empty  ');
      this.comservice.addComment(this.taskid, this.comment).subscribe((res) => {
      console.log(res);
      });
      this.commentRemark = '  ';
      window.location.reload();
    } else {
      alert('comment cant be  empty pleas write comment ');
    }
  }
}
