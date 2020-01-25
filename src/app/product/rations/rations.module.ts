import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RationsComponent } from './rations.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  component: RationsComponent
  }
];

@NgModule({
  declarations: [RationsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
})
export class RationsModule { }
