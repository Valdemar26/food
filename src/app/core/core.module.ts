import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from '../product/products.module';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
