import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryComponent } from './delivery.component';

const routes: Routes = [
  {path: '',  component: DeliveryComponent}
];

@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DeliveryModule { }
