import { Component, OnInit } from '@angular/core';

import { CommentInterface } from '../interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

comments: CommentInterface[];

  constructor() { }

  ngOnInit() {
    this.comments = [
      {
        userId: 1,
        date: new Date().now,
        message: 'lorem ipsum dolor sit amet123'
      },
      {
        userId: 2,
        date: new Date().now,
        message: 'test comments test test'
      }
    ];
  }

}
