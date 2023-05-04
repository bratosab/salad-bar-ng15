import { createAction, props } from '@ngrx/store';
import { NamePrice } from './salad.reducer';

export enum SaladActionTypes {
  LoadToppings = '[Salad] Load Toppings',
  SaveToppings = '[Salad] Save Toppings',
  ChooseTopping = '[Salad] Choose Topping',
}

export const LoadToppings = createAction(SaladActionTypes.LoadToppings);
export const SaveToppings = createAction(
  SaladActionTypes.SaveToppings,
  props<{ list: NamePrice[] }>()
);
export const ChooseTopping = createAction(
  SaladActionTypes.ChooseTopping,
  props<NamePrice>()
);
