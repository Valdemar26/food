import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantBasketComponent } from './restaurant-basket.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',  component: RestaurantBasketComponent
  }
];

@NgModule({
  declarations: [
    RestaurantBasketComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class RestaurantBasketModule { }
