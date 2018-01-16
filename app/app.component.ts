import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <h3>{{title}}</h3>
      <ul>
        <li *ngFor="let recipe of recipes">{{recipe.title}}
        <p>Ingredients</p>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
          </ul>
          <p>Description</p>
          <ul>
            <li> {{recipe.description}}</li>
          </ul>
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  title: string = "Epicodus Recipes";
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', ['flour', 'sugar'], 'bake')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public description: string) { }
}
