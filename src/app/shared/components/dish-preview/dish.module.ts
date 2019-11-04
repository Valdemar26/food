import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DishPreviewComponent } from './dish-preview.component';
import { DishComponent } from './dish/dish.component';
import { CounterModule } from '../counter/counter.module';

const routes: Routes = [
  { path: '',  component: DishComponent }
];

@NgModule({
  declarations: [DishPreviewComponent, DishComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CounterModule
  ],
  exports: [
    DishPreviewComponent
  ]
})
export class DishModule { }
