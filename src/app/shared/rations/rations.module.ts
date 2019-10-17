import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RationsComponent } from './rations.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',  component: RationsComponent, children: [
      { path: 'rations/basket-rations', loadChildren: () => import(`./components/ration-basket/ration-basket.module`).then(m => m.RationBasketModule) },
    ]
  }
];

@NgModule({
  declarations: [RationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RationsModule { }
