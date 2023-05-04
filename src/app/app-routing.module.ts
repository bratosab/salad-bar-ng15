import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: '', component: OrderFormComponent },
  { path: 'kitchen', loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
