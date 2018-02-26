import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'The best thing in the world', 'https://www.cicis.com/media/1137/pizza_trad_alfredo.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
