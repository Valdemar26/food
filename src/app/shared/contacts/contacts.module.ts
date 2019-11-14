import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  {path: '',  component: ContactsComponent}
];

const apiMapKey = environment.apiKeyForGoogleMaps;

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: apiMapKey
    })
  ]
})
export class ContactsModule { }
