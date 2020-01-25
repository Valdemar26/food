import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comments/comment/comment.component';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ]
  ,
  imports: [
    CommonModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class SharedModule { }
