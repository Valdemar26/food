import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish.component';
import { CounterModule } from '../counter/counter.module';

const routes: Routes = [
  { path: '',  component: DishComponent }
];

@NgModule({
  declarations: [DishComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CounterModule
  ],
  exports: [
    DishComponent
  ]
})
export class DishModule { }
