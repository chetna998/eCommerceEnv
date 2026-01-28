import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/interfaces/product.interface';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list',
  imports: [MatButtonModule, MatGridListModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  loadProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products.set(res);
    });
  }

  ngOnInit() {
    this.loadProducts();
    console.log("kjh")
  }
}
