import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
