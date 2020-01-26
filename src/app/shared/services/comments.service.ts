import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { CommentInterface } from '../components/interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: CommentInterface[] = [
    {
      userId: 1,
      date: new Date(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque blanditiis,' +
      ' dolores ea eos, id illum minima molestiae mollitia placeat quae sequi.',
      userName: 'John Doe'
    },
    {
      userId: 2,
      date: new Date(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dicta dolor,' +
      ' earum exercitationem illum incidunt inventore ipsam, iste laboriosam nam nostrum numquam quos sit,' +
      ' temporibus velit voluptatem? Assumenda deserunt ea earum est labore molestiae non perspiciatis quisquam sit vitae.' +
      ' Aliquam deleniti earum ipsam natus sed voluptatibus!',
      userName: 'Jane Doe'
    }
  ];

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return of(this.comments);
    // return this.http.get();
  }
}
