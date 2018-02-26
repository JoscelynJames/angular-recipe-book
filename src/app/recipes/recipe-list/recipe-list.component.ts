import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'The best thing in the world', 'https://www.cicis.com/media/1137/pizza_trad_alfredo.png'),
    new Recipe('Pepperoni Pizza', 'The best thing in the world', 'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png')
  ];
  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
