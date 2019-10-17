import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '',  component: ContactsComponent}
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
