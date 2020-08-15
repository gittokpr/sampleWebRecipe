import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [
    new Recipe(
      'Slow-Roast Gochujang Chicken',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque exercitationem saepe libero',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
    new Recipe(
      'Chorizo & mozzarella gnocchi bake',
      'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
    ),
    new Recipe(
      'Slow-Roast Gochujang Chicken',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque exercitationem saepe libero',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
