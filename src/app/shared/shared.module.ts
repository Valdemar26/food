import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderModule
  ]
})
export class SharedModule { }
