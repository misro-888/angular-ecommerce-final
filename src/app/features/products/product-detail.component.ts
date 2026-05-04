import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [AsyncPipe],
  template: `
    @if (product$ | async; as p) {
      <div class="detail">
        <img [src]="p.image" />
        <div>
          <h2>{{ p.title }}</h2>
          <p>{{ p.description }}</p>
          <h3>{{ p.price }}$</h3>
        </div>
      </div>
    }
  `,
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ProductService);

  product$ = this.route.params.pipe(switchMap((params) => this.service.getProduct(params['id'])));
}
