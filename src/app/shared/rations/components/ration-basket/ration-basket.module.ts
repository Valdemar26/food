import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RationBasketComponent } from './ration-basket.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {RationsComponent} from '../../rations.component';

const routes: Routes = [
  {path: '',  component: RationBasketComponent}
];

@NgModule({
  declarations: [RationBasketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RationBasketModule { }
