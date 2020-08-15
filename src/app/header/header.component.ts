import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onNavClicked(selected: string) {
    this.recipeSelected.emit(selected);
  }
}
