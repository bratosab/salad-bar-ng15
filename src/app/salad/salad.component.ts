import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NamePrice, SaladState } from './store/salad.reducer';
import { Observable } from 'rxjs';
import { ChooseTopping, LoadToppings } from './store/salad.actions';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss'],
})
export class SaladComponent implements OnInit {
  allToppings$!: Observable<NamePrice[]>;
  toppings$!: Observable<NamePrice[]>;
  price$!: Observable<number>;
  dressing$!: Observable<string>;

  constructor(private store: Store<{ salad: SaladState }>) {
    this.allToppings$ = this.store.select((state) => state.salad.allToppings);
    this.toppings$ = this.store.select((state) => state.salad.toppings);
    this.price$ = this.store.select((state) => state.salad.price);
    this.dressing$ = this.store.select((state) => state.salad.dressing);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadToppings());
  }

  chooseTopping(topping: NamePrice) {
    this.store.dispatch(ChooseTopping(topping));
  }
}
