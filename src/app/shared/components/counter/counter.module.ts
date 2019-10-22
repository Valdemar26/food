import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterComponent} from './counter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
