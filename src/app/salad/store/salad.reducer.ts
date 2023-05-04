import { createReducer, on } from '@ngrx/store';
import { ChooseTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  price: number;
  dressing: string;
  toppings: NamePrice[];
  allToppings: NamePrice[];
}

export interface NamePrice {
  name: string;
  price: number;
}

const initialState: SaladState = {
  dressing: '',
  price: 3.99,
  toppings: [],
  allToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, action) => ({
    ...state,
    allToppings: [...action.list],
  })),
  on(ChooseTopping, (state, action) => ({
    ...state,
    toppings: [...state.toppings, { name: action.name, price: action.price }],
    price: state.price + action.price,
  }))
);
