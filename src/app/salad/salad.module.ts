import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';



@NgModule({
  declarations: [
    SaladComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
