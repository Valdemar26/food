import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RationsComponent } from './rations.component';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from '../restaurant/restaurant.component';
import {RationBasketModule} from './components/ration-basket/ration-basket.module';

const routes: Routes = [
  {path: '',  component: RationsComponent, children : [
     { path: 'basket-rations', loadChildren: () => import(`./components/ration-basket/ration-basket.module`).then(m => m.RationBasketModule) },
    ]}
];

@NgModule({
  declarations: [RationsComponent],
  imports: [
    CommonModule,
    RationBasketModule,
    RouterModule.forChild(routes)
  ]
})
export class RationsModule { }
