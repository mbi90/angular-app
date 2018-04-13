import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../../shared/ingriedient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.addEmitter.emit(new Ingredient(nameInput.value, Number(amountInput.value)));
  }
}
