import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('inputName', { static: false }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: false }) inputAmount: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }
}
