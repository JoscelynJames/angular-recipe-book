import { EventEmitter } from '@angular/core';
import Recipe from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
    new Recipe('Pizza', 'The best thing in the world', 'https://www.cicis.com/media/1137/pizza_trad_alfredo.png'),
    new Recipe('Pepperoni Pizza', 'The best thing in the world', 'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png')
  ];

	getRecipes() {
		return this.recipes.slice();
	}
}