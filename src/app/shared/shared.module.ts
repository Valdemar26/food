import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    HeaderModule,
    FormsModule,
  ],
  exports: [
    SharedComponent,
  ]
})
export class SharedModule { }
