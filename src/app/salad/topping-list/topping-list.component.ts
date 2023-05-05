import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NamePrice } from '../store/salad.reducer';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToppingListComponent {
  @Input() toppings!: NamePrice[];
  @Output() chooseTopping = new EventEmitter<NamePrice>(); 
  @Input() test!: NamePrice;

  toppingChange(event: MatSelectionListChange) {
    const chosenToping =  event.source.selectedOptions.selected[0].value as NamePrice;
    this.chooseTopping.emit(chosenToping);
  }
}
