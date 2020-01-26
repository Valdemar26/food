import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = new BehaviorSubject(0);

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter.next(+this.counter.getValue() + 1);
  }

  decrementCounter() {
    if ( this.counter.getValue() > 0 ) {
      this.counter.next(+this.counter.getValue() - 1);
    }
  }

  changeInput(event) {
    console.log(event.target.value);
    this.counter.next(event.target.value);
    if ( !event.target.value ) {
      this.counter.next(null);
    }
  }

  resetInput() {
    this.counter.next(null);
  }
}
