import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('', '', '', []);
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  
  addToShoppingList() {
    this.shoppingListService.addIngredients(...this.recipe.ingredients);
  }
}
