import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css'],
})
export class RecipieDetailComponent implements OnInit {
  isActive = false;
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  makeActive() {
    this.isActive = !this.isActive;
  }
}
