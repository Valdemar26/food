import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MainInterceptor} from './services/main.interceptor';


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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
