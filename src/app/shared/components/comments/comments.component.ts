import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { CommentInterface } from '../interfaces/comment.interface';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  comments: CommentInterface[];
  subscriptions: Subscription = new Subscription();

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    const subscription = this.commentsService.getComments().subscribe(data => this.comments = data);
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
