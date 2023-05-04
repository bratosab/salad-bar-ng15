import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './store/salad.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SaladEffects } from './store/salad.effects';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';



@NgModule({
  declarations: [
    SaladComponent,
    ToppingListComponent,
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    SharedMaterialModule,
    StoreModule.forFeature('salad', saladReducer),
    EffectsModule.forFeature([SaladEffects])
  ]
})
export class SaladModule { }
