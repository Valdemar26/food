import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RationBasketComponent} from './ration-basket.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',  component: RationBasketComponent
  }
];

@NgModule({
  declarations: [RationBasketComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RationBasketModule { }
