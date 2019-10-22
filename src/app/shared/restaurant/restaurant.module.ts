import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';


const routes: Routes = [
  { path: '',  component: RestaurantComponent,  children: [
      // {
      //   path: '/:id',
      //   loadChildren: () => import(`../components/dish-preview/dish.module`)
      //     .then(m => m.DishModule)
      // },
    ]}
];

@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class RestaurantModule { }
