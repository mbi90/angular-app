import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './body/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './body/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './body/recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './body/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './body/shopping-list/shopping-list.component';
import { ShoppingListService } from './body/shopping-list/shopping-list.service';
import { RecipesComponent } from './body/recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
