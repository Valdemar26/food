import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantBasketComponent } from './restaurant-basket.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

const routes: Routes = [
  {
    path: '',  component: RestaurantBasketComponent
  }
];

@NgModule({
  declarations: [
    RestaurantBasketComponent,
    PersonalDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RestaurantBasketModule { }
