import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { map, switchMap, Observable } from 'rxjs';
import { ProductService, Product } from '../../core/services/product.service';

@Component({
  standalone: true,
  selector: 'app-category-products',
  imports: [AsyncPipe, RouterModule],
  template: `
    @if (products$ | async; as products) {
      <h2 class="page-title">Products</h2>

      <div class="grid">
        @for (p of products; track p.id) {
          <div class="card">
            <img [src]="p.image" />
            <h3>{{ p.title }}</h3>
            <p>{{ p.price }}$</p>
            <a [routerLink]="['/product', p.id]">View Details</a>
          </div>
        }
      </div>
    }
  `,
})
export class CategoryProductsComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ProductService);

  products$: Observable<Product[]> = this.route.params.pipe(
    switchMap((params) =>
      this.service
        .getProducts()
        .pipe(map((products) => products.filter((p) => p.category === params['name']))),
    ),
  );
}
