import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {DishComponent} from './components/dish-preview/dish/dish.component';


@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    NotfoundComponent,
    // DishComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    HeaderModule,
  ],
  exports: [
    SharedComponent,
    // DishComponent
  ]
})
export class SharedModule { }
