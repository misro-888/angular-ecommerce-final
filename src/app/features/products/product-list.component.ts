import { Component, inject } from '@angular/core';
import { ProductService, Product } from '../../core/services/product.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [AsyncPipe, RouterModule],
  template: `
    @if (products$ | async; as products) {
      <div class="grid">
        @for (p of products; track p.id) {
          <div class="card">
            <img [src]="p.image" />
            <h3>{{ p.title }}</h3>
            <p>{{ p.price }}$</p>

            <a [routerLink]="['/product', p.id]"> View Details </a>
          </div>
        }
      </div>
    }
  `,
})
export class ProductListComponent {
  private service = inject(ProductService);
  products$: Observable<Product[]> = this.service.getProducts();
}
