import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import Ingredient from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
    new Recipe(
			'Pizza', 
			'The best thing in the world', 
			'https://www.cicis.com/media/1137/pizza_trad_alfredo.png',
			[
				new Ingredient('Dough', 1),
				new Ingredient('Red Sauce', 1),
				new Ingredient('Cheese', 10),
			]),
    new Recipe(
			'Pepperoni Pizza', 
			'The best thing in the world', 
			'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png',
			[
				new Ingredient('Dough', 1),
				new Ingredient('Red Sauce', 1),
				new Ingredient('Cheese', 10),
				new Ingredient('Pepperoni', 15),
			])
  ];
	constructor(private slService: ShoppingListService) { }

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}