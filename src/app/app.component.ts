import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/app.reduer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salad-bar';
  name$!: Observable<string>;
  orderId$!: Observable<number>;

  constructor(private store: Store<{ app: AppState }>) {
    this.name$ = this.store.select(state => state.app.name)
    this.orderId$ = this.store.select(state => state.app.orderId)
  }
}
