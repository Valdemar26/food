import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { CounterModule } from '../components/counter/counter.module';
import { LazyLoadDirective } from './lazy-image.directive';


const routes: Routes = [
  { path: '',  component: ProductComponent,  children: [
    ]}
];

@NgModule({
  declarations: [
    ProductComponent,
    LazyLoadDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CounterModule
  ]
})
export class ProductModule { }
