import { Component, inject } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { ProductService } from '../../../core/services/shopping.service';

@Component({
  selector: 'app-list-product',
  // standalone: true,
  // imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  productList: IProduct[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllListProduct().then((productList: IProduct[]) => {
      this.productList = productList;
    });
  }
}
