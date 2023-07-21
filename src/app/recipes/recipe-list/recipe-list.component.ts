import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i0.hippopx.com/photos/143/355/658/asparagus-italian-cuisine-italy-piemonte-preview.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i0.hippopx.com/photos/143/355/658/asparagus-italian-cuisine-italy-piemonte-preview.jpg'
    ),
  ];

  constructor() {}
}
