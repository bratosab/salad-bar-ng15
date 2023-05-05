import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NamePrice, SaladState, selectSaladPrice } from './store/salad.reducer';
import { Observable } from 'rxjs';
import { ChooseTopping, LoadToppings } from './store/salad.actions';
import { AppState } from '../core/app.reduer';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaladComponent implements OnInit {
  allToppings$!: Observable<NamePrice[]>;
  toppings$!: Observable<NamePrice[]>;
  price$!: Observable<number>;
  calculatedPrice$!: Observable<number>;
  dressing$!: Observable<string>;
  test: NamePrice = { name: "test", price: 1 }

  constructor(private store: Store<{ salad: SaladState, app: AppState }>) {
    this.allToppings$ = this.store.select((state) => state.salad.allToppings);
    this.toppings$ = this.store.select((state) => state.salad.toppings);
    this.price$ = this.store.select((state) => state.salad.price);
    this.calculatedPrice$ = this.store.select(selectSaladPrice);
    this.dressing$ = this.store.select((state) => state.salad.dressing);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadToppings());
  }

  chooseTopping(topping: NamePrice) {
    this.store.dispatch(ChooseTopping(topping));
  }

  getToppingText(topping: NamePrice) {
    console.log("in getToppingText")
    return `${topping.name} - ${topping.price} €`;
  }

  changeTest() {
    this.test.name = "changed";
  }
}
