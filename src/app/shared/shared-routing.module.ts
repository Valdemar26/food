import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {NotfoundComponent} from './notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import(`./main/main.module`).then(m => m.MainModule) },
  { path: 'restaurant',
    loadChildren: () => import(`./restaurant/restaurant.module`)
      .then(m => m.RestaurantModule)
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import(`./components/dish-preview/dish.module`)
      .then(m => m.DishModule)
  },
  { path: 'rations', loadChildren: () => import(`./rations/rations.module`).then(m => m.RationsModule) },
  { path: 'contacts', loadChildren: () => import(`./contacts/contacts.module`).then(m => m.ContactsModule) },
  { path: 'delivery', loadChildren: () => import(`./delivery/delivery.module`).then(m => m.DeliveryModule) },
  {
    path: 'basket-rations',
    loadChildren: () => import(`./rations/components/ration-basket/ration-basket.module`)
      .then(m => m.RationBasketModule)
  },
  {
    path: 'basket-restaurant',
    loadChildren: () => import(`./restaurant/components/restaurant-basket/restaurant-basket.module`)
      .then(m => m.RestaurantBasketModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
