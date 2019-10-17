import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
