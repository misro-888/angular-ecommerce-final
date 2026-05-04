import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-categories',
  imports: [RouterModule],
  template: `
    <h2 class="page-title">Categories</h2>

    <div class="grid">
      @for (c of categories; track c.path) {
        <div class="card category-card">
          <h3>{{ c.title }}</h3>
          <a [routerLink]="['/category', c.path]">View Products</a>
        </div>
      }
    </div>
  `,
})
export class CategoriesComponent {
  categories = [
    { title: 'Electronics', path: 'electronics' },
    { title: 'Jewelery', path: 'jewelery' },
    { title: "Men's Clothing", path: "men's clothing" },
    { title: "Women's Clothing", path: "women's clothing" },
  ];
}
