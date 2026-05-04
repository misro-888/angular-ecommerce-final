import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CategoryProductsComponent } from './features/categories/category-products.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:name', component: CategoryProductsComponent },
];
