import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NamePrice } from '../salad/store/salad.reducer';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor() {}

  getToppings(): Observable<NamePrice[]> {
    return of([
      { name: 'Tomato', price: 1 },
      { name: 'Cucumber', price: 1.5 },
      { name: 'Onion', price: 2 },
      { name: 'Pepper', price: 2.5 },
      { name: 'Cheese', price: 3 },
      { name: 'Bacon', price: 3 },
      { name: 'Ham', price: 3 },
      { name: 'Pineapple', price: 1 },
      { name: 'Olives', price: 2 },
    ]);
  }
}
