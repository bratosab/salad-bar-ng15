import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Navigate } from '../core/router.actions';
import { SetName } from '../core/app.actions';
import { AppState } from '../core/app.reduer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  name!: string;
  appState$!: Observable<AppState>;

  constructor(private store: Store<{ app: AppState }>) {
    this.appState$ = this.store.select(state => state.app)
  }

  startOrder() {
    this.store.dispatch(SetName({ name: this.name }));
    this.store.dispatch(Navigate({ path: 'salad' }));
  }
}
