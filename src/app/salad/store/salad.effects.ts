import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadToppings, SaveToppings } from './salad.actions';
import { map, mergeMap } from 'rxjs';
import { OrderService } from '../../services/order.service';

@Injectable()
export class SaladEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  loadToppings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadToppings),
      mergeMap(() =>
        this.orderService
          .getToppings()
          .pipe(map((toppings) => SaveToppings({ list: toppings })))
      )
    )
  );
}
