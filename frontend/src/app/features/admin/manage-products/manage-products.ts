import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/interfaces/product.interface';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-manage-products',
  imports: [MatTableModule, MatButton],
  templateUrl: './manage-products.html',
  styleUrl: './manage-products.scss',
})
export class ManageProducts {
  private productService = inject(ProductService);
  productList = signal<Product[]>([]);
  displayedColumns: string[] = ['title', 'price', 'description', 'category', 'action'];
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.productList.set(res);
    });
  }
  deleteProduct(product: Product) {
    this.productService.removeProduct(product.id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err:Error) => {
        console.log(err)
      }
    });
  }
}
