import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth/helpers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import(`./main/main.module`).then(m => m.MainModule), data: {breadcrumb: 'Головна'} },
  { path: 'restaurant',
    loadChildren: () => import(`./restaurant/restaurant.module`)
      .then(m => m.RestaurantModule), data: {breadcrumb: 'Ресторан'}
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import(`./components/dish-preview/dish.module`)
      .then(m => m.DishModule), data: {breadcrumb: `id`}
  },
  { path: 'rations', loadChildren: () => import(`./rations/rations.module`).then(m => m.RationsModule) },
  { path: 'contacts', loadChildren: () => import(`./contacts/contacts.module`).then(m => m.ContactsModule) },
  { path: 'delivery', loadChildren: () => import(`./delivery/delivery.module`).then(m => m.DeliveryModule) },
  { path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) },
  {
    path: 'basket-rations',
    loadChildren: () => import(`./rations/components/ration-basket/ration-basket.module`)
      .then(m => m.RationBasketModule)
  },
  {
    path: 'basket-restaurant',
    loadChildren: () => import(`./restaurant/components/restaurant-basket/restaurant-basket.module`)
      .then(m => m.RestaurantBasketModule), canActivate: [AuthGuard]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
